pages.controller("AllUsersController",function($scope,userService){
	$scope.loading=true;
	$scope.profiles=[];
	var profiles=userService.get();
	profiles.$promise.then(function(){
		$scope.loading=false;
		$scope.profiles=profiles.body;
	})
})