pages.controller("ProfileController",function($scope,userService,$stateParams,tweetSocket,tweetService){
	$scope.loading=true;
	var socket=tweetSocket;
	$scope.userNotFound=false;
	userService.get({userHandle:$stateParams.userHandle},function(res){
		if(res.message.UserNotFound)
			$scope.userNotFound=true;
		else{
			$scope.userProfile=res.body;
		}
	});
	$scope.tweets=[];
	if(!$scope.userNotFound){
		tweetService.byAuthor({userHandle:$stateParams.userHandle},function(res){
			$scope.tweets=res.body;
		})
	}
	socket.on("TweetsIncoming",function(data){
		console.log(data);
		for(i in data.data){
			$scope.tweets.push(data.data[i]);			
		}
		$scope.loading=false;
		$scope.$apply();
	})
})