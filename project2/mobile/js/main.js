$(function(){
	// top fixed
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();
		if(t > 55){
			$("#header").addClass("fixed");
		}
		else{
			$("#header").removeClass("fixed");
		}
	});


	// main slider
	var mainSwiper=new Swiper(".main-swiper", {
		speed: 1200,
		loop: true,
		autoplay: {
			dealay: 5000,
		},
		pagination: {
			el: ".main-swiper-pagination",
		},
	});

	// gallery slider
	var gallerySwiper = new Swiper(".gallery-swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});


	// column slider
	var columnSwiper = new Swiper(".column-swiper", {
		loop : true,
		slidesPerView: 1.4,
	spaceBetween: 70,
		centeredSlides: true,
	pagination: {
			el: ".column-swiper-pagination",
	},
	});


	// covid popup
	$(".covid_popup p").click(function(e){
		e.preventDefault();
		$(".covid_popup").slideToggle();
	});


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
			$("#gnb .sub").slideUp(300);
			$(this).find(".sub").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find(".sub").slideUp(300);
		}
	});


	// #page1 tab
	$("#page1 .brand_logo").click(function(e){
		e.preventDefault();
		$("#page1").removeClass("active");
		$(this).next().slideToggle();
	});
});