tweetCreateForm.controller("TweetCreateFormController",function($scope,userService){
	var socket=$scope.socket;
	$scope.allUsers=userService.allHandles();
	console.log($scope.users);
	$scope.createTweet=function(){
		if(!$scope.content)
			$scope.createTweetError="Please Fill the content";
		else{
			var new_tweet={content:$scope.content,userHandle:localStorage.userHandle,tokenId:localStorage.Identifier};
			socket.emit("TweetCreated",new_tweet);
			// $scope.createTweetSuccess="Tweet Successfully Created";
			$scope.content="";
		}
	}
	$scope.onSelect = function ($item, $model, $label) {
	    console.log($item);
	    console.log($model);
	    console.log($label);
	};

})