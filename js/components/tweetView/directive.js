tweetView.directive("tweetView",function(){
	return {
		templateUrl:"./js/components/tweetView/template.html",
		controller:"TweetViewController",
		replace:true,
		scope:{
			tweet:'='
		}
	}
})