pages.controller("FollowsTweetsController",function($scope,tweetSocket){
	socket=tweetSocket;
	socket.emit("FollowsTweets",{userHandle:localStorage.userHandle,tokenId:localStorage.Identifier});
	socket.on("TransferFollowsTweets",function(data){
		$scope.tweets=data.data
		$scope.$apply();
	})
})