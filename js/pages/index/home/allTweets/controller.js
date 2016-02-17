pages.controller("AllTweetsController",function($scope,tweetSocket){
	$scope.loading=true;
	socket=tweetSocket;
	$scope.tweets=[];
	socket.emit("AllTweets");
	socket.on("TransferAllTweets",function(data){
		console.log(data);
		$scope.tweets=$scope.tweets.concat(data.data)
		$scope.loading=false;
		$scope.$apply();
	})
	socket.on("TransferAllTweetsUpdate",function(data){
		$scope.tweets.unshift(data.data)
		$scope.$apply();
	})
})