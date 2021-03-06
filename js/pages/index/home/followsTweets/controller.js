pages.controller("FollowsTweetsController",function($scope,tweetSocket){
	socket=tweetSocket;
	$scope.loading=true;
	socket.emit("FollowsTweets",{userHandle:localStorage.userHandle,tokenId:localStorage.Identifier});
	socket.on("TransferFollowsTweets",function(data){
		$scope.tweets=data.data
		$scope.loading=false;
		$scope.$apply();
	})
	socket.on("FollowsTweetsUpdate",function(data){
		$scope.tweets.unshift(data.data)
		$scope.$apply();
	})
})