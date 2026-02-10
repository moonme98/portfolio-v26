$(function(){
	// gnb tab
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$(".menu").toggleClass("active");
		$(".tab").toggleClass("active");

		if($(".tab").hasClass("active") == false){
			$("#gnb ul ul").hide();
			$("#gnb > ul > li").removeClass("active");
		}
	});
	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});


	// top fixed
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();
		if(t > 50){
			$("#header").addClass("fixed");
		}
		else{
			$("#header").removeClass("fixed");
		}
	});


	// main slider
	var mainSwiper = new Swiper(".mainSwiper", {
		speed: 1200,
		loop: true,
		autoplay: {
			dealay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
		}
	});
	$(".play").click(function(e){
		e.preventDefault();
		mainSwiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){ 
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
        slidesPerView: 1.1,
		pagination: {
			el: ".plan-swiper-pagination",
        },
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


	// tabs
	$("#page1 .tabs li").click(function(e){
		e.preventDefault();
		$("#page1 .tabs li").removeClass("active");
		$(this).addClass("active");
	});
	$("#page2 .tabs li").click(function(e){
		e.preventDefault();
		$("#page2 .tabs li").removeClass("active");
		$(this).addClass("active");
	});
	$("#page4 .tabs li").click(function(e){
		e.preventDefault();
		$("#page4 .tabs li").removeClass("active");
		$(this).addClass("active");
	});
});