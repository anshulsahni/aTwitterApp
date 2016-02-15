pages.controller("HomeController",function($scope,userService,tweetSocket){
	var tokenId=localStorage.Identifier;
	var userHandle=localStorage.userHandle;
	$scope.notifCount=0;
	var socket=tweetSocket;

	$scope.userProfile=userService.get({userHandle:userHandle});
	$scope.userProfile.$promise.then(function($location){
		if($scope.userProfile.error){
			localStorage.clear();
			$location.path("/signIn")
		}
	})

	$scope.profiles=userService.get();
	console.log($scope.profiles);

	$scope.sock=socket;
	$scope.tweets=[];
	$scope.alerts=[];
	$scope.followTweets=[];
	$scope.allTweets=[];
	

	socket.on("TweetUpdate",function(data){
		$scope.tweets.unshift(data.data);
		$scope.$apply();
	})

	socket.on("TweetNotify",function(data){
		$scope.notifCount++;
		console.log(data);
		$scope.$apply();

	})
	socket.emit("FollowsTweets",{userHandle:localStorage.userHandle,tokenId:localStorage.Identifier});
	socket.on("TransferFollowsTweets",function(data){
		$scope.followTweets=$scope.followTweets.concat(data.data)
		console.log(data.data);
		$scope.$apply();
	})
	socket.emit("AllTweets");
	socket.on("TransferAllTweets",function(data){
		$scope.allTweets=$scope.allTweets.concat(data.data);
		$scope.$apply();
	})

	var user=new userService;
	user.tokenId=tokenId;
	user.userHandle=userHandle;
	user.$unreadNotifications(function(){
		$scope.notifCount=user.body.length
	})

})