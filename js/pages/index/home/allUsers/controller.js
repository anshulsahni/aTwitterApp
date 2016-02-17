pages.controller("AllUsersController",function($scope,userService){
	$scope.profiles=[];
	var profiles=userService.get();
	profiles.$promise.then(function(){
		$scope.profiles=profiles.body;
	})
})