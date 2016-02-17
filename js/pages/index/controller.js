pages.controller("IndexController",function($scope,userService,tweetSocket){
	socket=tweetSocket;
	$scope.notifCount=0;
	$scope.userProfile=userService.get({userHandle:localStorage.userHandle});
	$scope.userProfile.$promise.then(function($location){
		if($scope.userProfile.error){
			localStorage.clear();
			$location.path("/signIn")
		}
	})

	var user=new userService;
	user.tokenId=localStorage.Identifier;
	user.userHandle=localStorage.userHandle;
	user.$unreadNotifications(function(){
		$scope.notifCount=user.body.length
		console.log(user);
	})
})