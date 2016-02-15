services.factory("tweetService",function($resource){
	return $resource("http://localhost:3000/tweets",{},{
		byAuthor:{
			method:"GET",
			url:"http://localhost:3000/tweets/byAuthor/:userHandle"
		}
	})
})