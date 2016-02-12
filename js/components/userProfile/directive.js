userProfile.directive("userProfile",function(){
	return {
		templateUrl:"./js/components/userProfile/template.html",
		controller:"UserProfileController",
		replace:true,
		scope:{
			profile:'='
		}
	}
})