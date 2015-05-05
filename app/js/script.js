$(document).ready(function(){
	console.log("Quick'n'Muggin's");
	
	if($("#mugginsCommander").length <= 0){
		$(window).scroll(function() {
			stickNav();
		});
	}
	

	//scrollto map
	$(".goMap").click(function(){
		console.log("lol");
		scrollToInfo($(".mapContainer"));
		return false;
	});
	

	//Modal
	$(".goModal").click(function(){
		genModal();
		hideModal();
		return false;
	});


	//Time
	if($("#mugginsCommander").length > 0){
		commanderTime();
		completeOrder();

		$(window).scroll(function(){
			stickCommande($(window).scrollTop());
		});	
		
		
		var owlCommander = $("#mugginsCommandeDisplay"); 
		owlCommander.owlCarousel({
		    items : 1,
		    autoHeight : true,
		    afterAction : afterAction,
		    itemsDesktop : [1000, 1],
		    itemsDesktopSmall : [900, 1],
		    itemsTablet : [600, 1],
		    itemsMobile : [450, 1]
		});

		$("#cmdLeft").click(function(){
			owlCommander.trigger('owl.prev');
			return false;
		});
		$("#cmdRight").click(function(){
			owlCommander.trigger('owl.next');
			return false;
		});
	}
	//owlcaroussel

	if($("#mugginsClassique").length > 0){
		var owl = $("#mugginsClassique");

		owl.owlCarousel({
		    items : 3,
		    itemsDesktop : [1000,3],
		    itemsDesktopSmall : [900,3],
		    itemsTablet: [600,2],
		    itemsMobile : [300,1]
		});
	}
	

	if($("#mugginsGourmand").length > 0){
		var owl2 = $("#mugginsGourmand");

		owl2.owlCarousel({
			items : 3,
		    itemsDesktop : [1000,3],
		    itemsDesktopSmall : [900,3],
		    itemsTablet: [600,2],
		    itemsMobile : [300,1]
		});
	} 


	if($("#mugginsArticlesDisplay").length > 0){
		var owlBlog = $("#mugginsArticlesDisplay"); 
		owlBlog.owlCarousel({
			items : 5,
			itemsDesktop : [1000, 5],
			itemsDesktopSmall : [900, 3],
			itemsTablet : [600, 2],
			itemsMobile : [450, 1]
		});
	}

	
});


function stickNav(){
	var top = $(".js-showMenu").offset().top;
	if( $(window).scrollTop() > top){
		$("#mugginsNav").addClass("mugginsMenuLogoScrolled");
		$("#mugginsNav").css("background-color", "#fff!important");
	}
	else{
		if($("#mugginsNav").hasClass("mugginsMenuLogoScrolled")){
			$("#mugginsNav").removeClass("mugginsMenuLogoScrolled");
			$("#mugginsNav").css("background-color", "");
		}
	}

}

function afterAction(){
	if(this.owl.currentItem == 0){
		$("#cmdLeft").addClass("hidden");
	}
	else{
		$("#cmdLeft").removeClass("hidden");
	}

	if(this.owl.currentItem == 2){
		$("#cmdRight").addClass("hidden");
	}
	else{
		$("#cmdRight").removeClass("hidden");
	}
}


function stickCommande(currentScroll){
	var top = $('header').height() + $('nav').height() + 20;
	if( currentScroll > top){
		$("#commandeNavigation").addClass('scrolledCommande');
	}
	else{
		if($("#commandeNavigation").hasClass('scrolledCommande')){
			$("#commandeNavigation").removeClass('scrolledCommande');
		}
	}	
}

function scrollToInfo(position){
	 $('html, body').animate({  
        scrollTop:position.offset().top  
    }, 1500); 
}


function genModal(){
	$("body").append("<div class='mugginsModalContainer'></div>");
	$(".mugginsModalContainer").append(' <div class="container" id="containerForModal" style="top: -5%; opacity: 0"><div class="row"><div class="col-md-6 col-md-offset-3"><div class="mugginsModal"><div class="patternScieOrange"></div><h2 class="mugginsHead">Parlez de nous !</h2><p class="modalDesc">Faites vos plus belles photos et écrivez vos plus beaux messages sur Quick\'n\'Muggin\'s et vous aurez droit à 10% de réduction à votre prochain passage chez nous !</p><h3 class="mugginsHead">Spread your digital love</h3><div class="socialLinks"><a href="#"><i class="fa fa-3x fa-fw fa-instagram"></i></a><a href="#"><i class="fa fa-3x fa-fw fa-twitter"></i></a><a href="#"><i class="fa fa-3x fa-fw fa-facebook"></i></a></div><div class="patternScieOrange"></div></div></div></div></div>');

	$("#containerForModal").animate({opacity : 1 , top : "20%"}, {duration: 600, easing:"easeOutStrong"});	

}	

function hideModal(){
	$(document).mouseup(function (e){
	    var container = $(".mugginsModal");
    	if (!container.is(e.target) // if the target of the click isn't the container...
    	    && container.has(e.target).length === 0) // ... nor a descendant of the container
    	{
	        container.remove();
	        $(".mugginsModalContainer").remove();
	    }
	});
}

function commanderTime(){
	var d = new Date();
	var min = d.getMinutes();
	var h = d.getHours();
	if((min + 30) > 60){
		h ++;
		min -= 30;
	}else{
		min += 30;
	}
	if(min <= 9){
		$("#theTime").append(h + " : 0" + min);	
	}
	else{
		$("#theTime").append(h + " : " + min);
	}
}


function completeOrder(){
	$(".mugginsThumbnail").click(function(){
		$("#cake").empty();
		$("#cake").append($(this).attr('id-cake'));
		return false;
	});

	$(".topping").click(function(){
		$("#topping").empty();
		$("#topping").append(" + " + $(this).attr('id-top'));
		return false;
	});
}