$(function(){
	// main slider
	var mainSwiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade", 
		fadeEffect: { 
			crossFade: true, 
		},
		autoplay: {
			delay: 5000, 
		},
		pagination: {
			el: ".swiper-pagination",
		},
		/*
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		*/
	});

	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$(".play").click(function(e){
		e.preventDefault();
		mainSwiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){ 
			// <a href="" id="pause_play" class="play">

			$(this).removeAttr("class"); 
			$(this).addClass("pause"); 
			$(this).text("pause"); 
			mainSwiper.autoplay.start(); 
		}
		else{ 
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
		}
	});

	
	// plan slider
	var planSwiper = new Swiper(".planSwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
    });
	$(".plan_prev").click(function(e){ 
		e.preventDefault();
		planSwiper.slidePrev(); 
	});
	$(".plan_next").click(function(e){ 
		e.preventDefault();
		planSwiper.slideNext(); 
	});


	// info slider
	var infoSwiper = new Swiper(".infoSwiper", {
	});
	$(".info_prev").click(function(e){ 
		e.preventDefault();
		infoSwiper.slidePrev(); 
	});
	$(".info_more").click(function(e){ 
		e.preventDefault();
		infoSwiper.slidePrev(); 
	});
	$(".info_next").click(function(e){ 
		e.preventDefault();
		infoSwiper.slideNext(); 
	});

	
	// feed slider
	var feedSwiper = new Swiper(".feedSwiper", {
		slidesPerView: 3,
		spaceBetween: 10,
	});
	$(".feed_prev").click(function(e){ 
		e.preventDefault();
		feedSwiper.slidePrev(); 
	});
	$(".feed_next").click(function(e){ 
		e.preventDefault();
		feedSwiper.slideNext(); 
	});
	$(".pr").click(function(e){ 
		e.preventDefault();
		feedSwiper.slidePrev(); 
	});
	$(".ne").click(function(e){ 
		e.preventDefault();
		feedSwiper.slideNext(); 
	});


	// lang click
	$(".lang").click(function(e){
		e.preventDefault();
		$("dd > ul").slideToggle(300);
	});


	// tabs
	$(".category3 .tabs li").click(function(e){
		e.preventDefault();
		$(".category3 .tabs li").removeClass("active");
		$(this).addClass("active");
	});

	$(".category4 .tabs li").click(function(e){
		e.preventDefault();
		$(".category4 .tabs li").removeClass("active");
		$(this).addClass("active");
	});


	// gnb
	$("#gnb > ul > li").hover(
		function(){
			$("#header").addClass("active");
		},
		function(){
			$("#header").removeClass("active");
		}
	);

	// select click
	$(".select dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".select dd").slideToggle(300);
	});
});