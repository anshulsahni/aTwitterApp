userProfile.controller("UserProfileController",function($scope,userService,tweetSocket){
	$scope.$watch("profile",function(){
		var follow_list=userService.follows({userHandle:localStorage.userHandle});
		follow_list.$promise.then(function(follows){
				if(localStorage.userHandle==$scope.profile.userHandle)
					$scope.self=true;
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
	socket=tweetSocket;
	$scope.follow=function(followHandle){
		// console.log(followHandle);
		var tokenId=localStorage.Identifier;
		var userHandle=localStorage.userHandle;
		var user=new userService();

		user.tokenId=tokenId;
		user.followHandle=followHandle;
		user.userHandle=userHandle;
		user.$follow(function(res){
			if(res.message.UserFollowed){
				$scope.followBtn=false;
				socket.emit("FollowsTweets",{userHandle:localStorage.userHandle,tokenId:localStorage.Identifier});
			}

		})
	}

	$scope.unfollow=function(unfollowHandle){
		// console.log(followHandle);
		var tokenId=localStorage.Identifier;
		var userHandle=localStorage.userHandle;
		var user=new userService();

		user.tokenId=tokenId;
		user.unfollowHandle=unfollowHandle;
		user.userHandle=userHandle;
		user.$unfollow(function(res){
			if(res.message.UserUnFollowed){
				$scope.followBtn=true;
				socket.emit("FollowsTweets",{userHandle:localStorage.userHandle,tokenId:localStorage.Identifier});
			}
		})
	}
	
})