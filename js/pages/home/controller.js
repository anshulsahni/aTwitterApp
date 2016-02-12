pages.controller("HomeController",function($scope,userService){
	var tokenId=localStorage.Identifier;
	var userHandle=localStorage.userHandle;
	$scope.bool=true;
	var socket=io.connect("http://localhost:3000",{query:"tokenId="+tokenId+"&userHandle="+userHandle});
	$scope.userProfile=userService.get({userHandle:userHandle});
	$scope.sock=socket;
	$scope.tweets=[];
	socket.on("TweetsIncoming",function(data){
		// console.log(data);
		// $scope.tweets = data.data;
		for(i in data.data){
			$scope.tweets.push(data.data[i]);
			$scope.$apply();
		}
		console.log($scope.tweets);
	})
	socket.on("TweetUpdate",function(data){
		$scope.tweets.unshift(data.data);
		console.log(data.data);
		$scope.$apply();
	})
	
	// console.log($scope.sock);

})