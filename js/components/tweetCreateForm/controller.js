tweetCreateForm.controller("TweetCreateFormController",function($scope,userService){
	var socket=$scope.socket;
	$scope.allUsers=userService.allHandles();
	console.log($scope.allUsers);
	$scope.allUsers.$promise.then(function(){
		$('#content').triggeredAutocomplete({
			hidden: '#hidden_inputbox',
			source: $scope.allUsers.body,
			trigger: "@"
		})	
	})
	
	$scope.createTweet=function(){
		// console.log($scope.content);
		if(!$scope.content)
			$scope.createTweetError="Please Fill the content";
		else{
			var content=$("#content").val();
			console.log(content);
			var new_tweet={content:content,userHandle:localStorage.userHandle,tokenId:localStorage.Identifier};
			socket.emit("TweetCreated",new_tweet);
			$scope.content="";
		}
	}
})