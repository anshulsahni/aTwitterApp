pages.controller("NotificationsController",function($scope,tweetSocket,userService){
	$scope.loading=true;
	$scope.notifications=[];
	var user=new userService();
	user.tokenId=localStorage.Identifier;
	user.userHandle=localStorage.userHandle;
	notificationResponse=user.$notifications();
	notificationResponse.then(function(data){
		$scope.notifications=data.body;
		$scope.loading=false;
		var user=new userService();
		user.tokenId=localStorage.Identifier;
		user.userHandle=localStorage.userHandle;
		user.$markNotifRead();
	})
	var socket=tweetSocket;
	socket.on("TweetNotifyContent",function(data){
		$scope.notifications.unshift(data)
		$scope.$apply();
		socket.emit("NotifsRead",localStorage.userHandle);
	})
	socket.emit("NotifsRead",localStorage.userHandle);

	$scope.$on("$destroy",function(event){
		socket.removeListener("TweetNotifyContent")
	})

})