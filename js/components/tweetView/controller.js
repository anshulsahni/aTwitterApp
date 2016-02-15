tweetView.controller("TweetViewController",function($scope){
	$scope.printCreationTime=function(){
		var date= new Date($scope.tweet.creationTime);
		return date.toString();
	}	
})