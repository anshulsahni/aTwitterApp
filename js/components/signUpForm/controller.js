signUpForm.controller("SignUpFormController",function($scope,userService){
	$scope.signUp=function(){
		if(!$scope.name || !$scope.email || !$scope.password || !$scope.userHandle){
			$scope.signUpError="Please Fill All the Fields";
			return;
		}
		else if($scope.password.length<4){
			$scope.signUpError="Password should be minium 4 characters";
			return;
		}
		else if($scope.userHandle.indexOf(" ")>-1){
			$scope.signUpError="User Handle Cannot Contain Space";
			return;
		}
		new_user=new userService();
		new_user.name=$scope.name;
		new_user.email=$scope.email;
		new_user.password=$scope.password;
		new_user.userHandle=$scope.userHandle;
		console.log(new_user);
		new_user.$signUp(function(){
			console.log(new_user);
			if(new_user.error){
				if(new_user.message.FieldRepeated && new_user.message.FieldRepeated=="userHandle")
					$scope.signUpError="Entered User Handle Already Exist";
				else if(new_user.message.FieldRepeated && new_user.message.FieldRepeated=="email")
					$scope.signUpError="Enter Email Already Exist";
				else{
					$scope.signUpError="Unexpected Error";
				}
			}
			else if(new_user.message.UserCreated){
				$scope.successSignUp="User Created Successfully";
				$scope.signUpError="";			
			}

		})
	}
})