$(document).ready(function(){
	console.log("hello");

	//var sticky_navigation_offset_top = $('#mugginsCoverHome').offset().top;

	$(window).scroll(function() {
		stickNav();
	});

});


function stickNav(){
	var top = $(".js-showMenu").offset().top;
	if( $(window).scrollTop() > top){
		console.log("addClass");
		$("#mugginsNav").addClass("mugginsMenuLogoScrolled");
		$("#mugginsNav").css("background-color", "#fff!important");
	}
	else{
		if($("#mugginsNav").hasClass("mugginsMenuLogoScrolled")){
			console.log("removeClass");
			$("#mugginsNav").removeClass("mugginsMenuLogoScrolled");
			$("#mugginsNav").css("background-color", "");
		}
	}

}

/*
function sticky_navigation(sticky_navigation_offset_top, target){
	var scroll_top = $(window).scrollTop(); // our current vertical position from the top
	
	// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
	if (scroll_top > sticky_navigation_offset_top) { 
		$('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });

	} else {
		$('#sticky_navigation').css({ 'position': 'relative' }); 
	}
}
*/	