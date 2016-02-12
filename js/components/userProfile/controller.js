userProfile.controller("UserProfileController",function($scope,userService){
	$scope.$watch("profile",function(){
		var follow_list=userService.follows({userHandle:localStorage.userHandle});
		follow_list.$promise.then(function(follows){
				console.log(follows.body);
				if(!localStorage.Identifier)
					$scope.followBtn=false;
				else{
					if($scope.profile && localStorage.userHandle==$scope.profile.userHandle)
						$scope.followBtn=false;
					else{
						$scope.followBtn=true;
						for(i in follows.body){
							if(follows.body[i].userHandle==$scope.profile.userHandle){
								$scope.followBtn=false;
								break;
							}
						}
					}	
				}	
			})			
		})

	$scope.follow=function(followHandle){
		// console.log(followHandle);
		var tokenId=localStorage.Identifier;
		var userHandle=localStorage.userHandle;
		var user=new userService();

		user.tokenId=tokenId;
		user.followHandle=followHandle;
		user.userHandle=userHandle;
		user.$follow(function(res){
			if(res.message.UserFollowed)
				$scope.followBtn=false;
		})

	}
	
})