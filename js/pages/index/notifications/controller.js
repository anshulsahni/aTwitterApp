pages.controller("NotificationsController",function($scope,tweetSocket,userService){
	$scope.notifications=[];
	var user=new userService();
	user.tokenId=localStorage.Identifier;
	user.userHandle=localStorage.userHandle;
	notificationResponse=user.$notifications();
	notificationResponse.then(function(data){
		$scope.notifications=data.body;
		var user=new userService();
		user.tokenId=localStorage.Identifier;
		user.userHandle=localStorage.userHandle;
		user.$markNotifRead();
	})
	var socket=tweetSocket;
	socket.emit("NotifsRead",localStorage.userHandle);

})