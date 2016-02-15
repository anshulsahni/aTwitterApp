services.factory("tweetService",function($resource){
	return $resource("http://anshulsahni.me:3000/tweets",{},{
		byAuthor:{
			method:"GET",
			url:"http://anshulsahni.me:3000/tweets/byAuthor/:userHandle"
		}
	})
})