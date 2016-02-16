pages.controller("HomeController",function($scope,userService,tweetSocket){
	var tokenId=localStorage.Identifier;
	var userHandle=localStorage.userHandle;
	var socket=tweetSocket;

	$scope.profiles=userService.get();

	$scope.sock=socket;
	$scope.tweets=[];
	$scope.alerts=[];
	$scope.followTweets=[];
	$scope.allTweets=[];
	

	socket.on("TweetUpdate",function(data){
		$scope.tweets.unshift(data.data);
		$scope.$apply();
	})

	
	socket.emit("FollowsTweets",{userHandle:localStorage.userHandle,tokenId:localStorage.Identifier});
	socket.on("TransferFollowsTweets",function(data){
		$scope.followTweets=data.data
		$scope.$apply();
	})
	socket.emit("AllTweets");
	socket.on("TransferAllTweets",function(data){
		$scope.allTweets=$scope.allTweets.concat(data.data)
		$scope.$apply();
	})
	socket.on("TransferAllTweetsUpdate",function(data){
		$scope.allTweets.unshift(data.data)
		$scope.$apply();
	})

})