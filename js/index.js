angular.module("aTwitter",[
	"pages",
	"components",
	"services",
	"ui.router",
	"ngResource",
	"ui.bootstrap",
	])
 .config(function($stateProvider,$urlRouterProvider){
 	$stateProvider
 		.state("signIn",{
 			url:"/signIn",
 			templateUrl:"./js/pages/signIn/index.html",
 			controller:"SignInController",
 			resolve:{
 				checkLogin:function($location){
 					if(localStorage.Identifier)
 						$location.path("/")
 				}
 			}
 		})
 		.state("signUp",{
 			url:"/signUp",
 			templateUrl:"./js/pages/signUp/index.html",
 			controller:"SignUpController",
 			resolve:{
 				checkLogin:function($location){
 					if(localStorage.Identifier)
 						$location.path("/")
 				}
 			}
 		})
 		.state("index",{
 			templateUrl:"./js/pages/index/index.html",
 			controller:"IndexController",
 			resolve:{
 				checkLogin:function($location){
 					if(!localStorage.Identifier)
 						$location.path("/signIn")
 				}
 			}
 		})
 		.state("index.home",{
 			url:"/home",
 			abstract:".followsTweets",
 			templateUrl:"./js/pages/index/home/index.html",
 			controller:"HomeController"
 		})
 		.state("index.home.followsTweets",{
 			url:"",
 			templateUrl:"./js/pages/index/home/followsTweets/template.html",
 			controller:"FollowsTweetsController"
 		})
 		.state("index.home.allTweets",{
 			templateUrl:"./js/pages/index/home/allTweets/template.html",
 			controller:"AllTweetsController"
 		})
 		.state("index.home.allUsers",{
 			templateUrl:"./js/pages/index/home/allUsers/template.html",
 			controller:"AllUsersController"
 		})
 		.state("index.notifications",{
 			url:"/notifications",
 			templateUrl:"./js/pages/index/notifications/index.html",
 			controller:"NotificationsController",
 		})
 		.state("index.profile",{
 			url:"/:userHandle",
 			templateUrl:"./js/pages/index/profile/index.html",
 			controller:"ProfileController"
 		})
 })