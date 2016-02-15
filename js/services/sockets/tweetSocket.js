socketServices.factory("tweetSocket",function(){
	return io.connect("http://localhost:3000",{query:"tokenId="+localStorage.Identifier+"&userHandle="+localStorage.userHandle});
})