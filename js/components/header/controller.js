header.controller("HeaderController",function($scope,userService,$location,tweetSocket){
	$scope.signOut=function(){
		var user=new userService
		user.tokenId=localStorage.Identifier;
		user.userHandle=localStorage.userHandle;
		user.$signOut(function(){
			console.log(user);
			if(!user.error && user.message.TokenSuccessfullyExpired){
				localStorage.removeItem("Identifier");
				localStorage.removeItem("userHandle");
				$location.path("/signIn")
			}
		})
	}
	var socket=tweetSocket;
	socket.on("TweetNotify",function(data){
		console.log(data);
		$scope.notifCount++;
		$scope.$apply();
	})
	socket.on("NotifsMarkedRead",function(){
		$scope.notifCount=0;
		$scope.$apply();
	})
})