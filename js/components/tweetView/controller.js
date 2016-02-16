tweetView.controller("TweetViewController",function($scope,userService,$sce){
	$scope.printCreationTime=function(){
		var date= new Date($scope.tweet.creationTime);
		return date.toString();
	}
	var content="";
	var tmpcontent=$scope.tweet.content.toString();
	var prev=0;
	for(var i=0;i<tmpcontent.length;i++){
		if(tmpcontent[i]=="@" && (tmpcontent[i-1]==" " || i==0)){
			var end=tmpcontent.indexOf(" ",i);
			var tmp=(tmpcontent.substring(i+1,end==-1?tmpcontent.length:end));
			content=content.concat(tmpcontent.substring(prev,i));
			content=content.concat('<a href="#/'+tmp+'">@'+tmp+'</a>');
			prev=end;
		}
	}
	content=content.concat(tmpcontent.substring(prev,tmpcontent.length));
	content=$sce.trustAsHtml(content);
	// content=$sce.parseAsHtml(content);
	$scope.tweet.content=content;
})