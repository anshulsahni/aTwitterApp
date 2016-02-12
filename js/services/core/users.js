services.factory("userService",function($resource){
	return $resource("localhost:3000/users/:userHandler",{userHandler:"@userHandler"},{
		signIn:{
			method:"POST",
			url:"localhost:3000/users/signIn"
		}
	})
})