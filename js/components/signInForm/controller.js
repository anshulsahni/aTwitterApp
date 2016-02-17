signInForm.controller("SignInFormController",function($scope,userService,$location){
	$scope.signIn=function(){
		if(!$scope.userHandle || !$scope.password){
			$scope.logInError="Please Provide User Handle and Password";
			return;
		}
		var user=new userService;
		user.userHandle=$scope.userHandle;
		user.password=$scope.password;

		user.$signIn(function(){
			if(user.error){
				if(user.message.InvalidEmailOrPassword)
					$scope.logInError="Invalid Email Or Password";
				else
					$scope.logInError="Unexpected Error";
			}
			else{
				if(user.message.TokenCreated){
					 localStorage.setItem("Identifier",user.body.tokenId);
					 localStorage.setItem("userHandle",$scope.userHandle);
					 $location.path("/home")
				}
				else{
					$scope.logInError="Unexpected Error";
				}
			}
		})
		
	}
})