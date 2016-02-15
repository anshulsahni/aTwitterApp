header.controller("HeaderController",function($scope,userService,$location){
	$scope.signOut=function(){
		var user=new userService
		user.tokenId=localStorage.Identifier;
		user.userHandle=localStorage.userHandle;
		user.$signOut(function(){
			console.log(user);
			if(!user.error && user.message.TokenSuccessfFullyExpired){
				localStorage.removeItem("Identifier");
				localStorage.removeItem("userHandle");
				$location.path("/signIn")
			}
		})
	}
})