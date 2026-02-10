$(function(){
	// gnb hover
	$("nav > ul > li").hover(
		function(){
			$(this).find("a").next(".sub").css({height:250});
		},
		function(){
			$(this).find("a").next(".sub").css({height:0});
		}
	);
	$("nav > ul > li > a").focusin(function(){
		$(this).next(".sub").addClass("active");
		$(this).next(".sub").css({height:250});
	});
	$("nav li li:last-child li:last-child a").focusout(function(){
		$(this).parents(".sub").removeClass("active");
		$(this).parents(".sub").css({height:0});
	});
	$("nav > ul > li > a").click(function(e){
		e.preventDefault();
		$(".search_pop").slideToggle();
	});

	
	// gnb scroll
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();
		if(t > 60){
			$("#gnb").addClass("fixed");
		}
		else{
			$("#gnb").removeClass("fixed");
		}
	});


	// covid popup
	$(".covid_popup img").click(function(e){
		e.preventDefault();
		$(".covid_popup").slideToggle();
	});


	// lang click
	$(".lang").click(function(e){
		e.preventDefault();
		$("dd > ul").slideToggle(300);
	});
		
	
	// search click
	$(".close").click(function(e){
		e.preventDefault();
		$(".search_pop").slideUp();
	});


	// notice_popup
	var reData;
	
	$(".notice_popup").addClass("on");

	setTimeout(function(){
		$(".notice_popup").removeClass("on");
	}, 3000);

	
	$(".notice_ico").click(function(e){
		e.preventDefault();

		reData=$(".notice_popup").hasClass("on");

		if(reData == false){
			$(".notice_popup").addClass("on");
			// 아이콘 모양을 X 바꿉니다.
		}
		else{
			$(".notice_popup").removeClass("on");
			// 아이콘 모양을 <- 바꿉니다.
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
			el: ".swiper-pagination",
		},
	});

	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
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


	// gallery slider
	var galleryw=1100;
	var galleryAmount=0;
	// var id=setInterval(rightMoving, 5000);

	$(".gallery .controls .left").click(function(e){
		e.preventDefault();
		if(!$(".gallery ul").is(":animated")) rightMoving();
	});
	$(".gallery .controls .right").click(function(e){
		e.preventDefault();
		if(!$(".gallery ul").is(":animated")) leftMoving();
	});
	/*
	$(".gallery .controls .left, .gallery .controls .right").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(rightMoving, 6000);
		}
	);
	*/

	function leftMoving(){
		galleryAmount-=galleryw;

		$(".gallery ul").animate({left:galleryAmount}, 600, function(){
			$(this).append($(".gallery ul li:first-child"));
			galleryAmount+=galleryw;
			$(this).css({left:galleryAmount});

			$(".gallery li").each(function(n){
				if(n == 1){
					$(this).addClass("active");
				}
				else{
					$(this).removeClass("active");
				}
			});
		});
	}
	function rightMoving(){
		$(".gallery ul").prepend($(".gallery ul li:last-child"));

		galleryAmount-=galleryw;
		$(".gallery ul").css({left:galleryAmount});
		galleryAmount+=galleryw;

		$(".gallery ul").animate({left:galleryAmount}, 600, function(){
			$(".gallery li").each(function(n){
				if(n == 1){
					$(this).addClass("active");
				}
				else{
					$(this).removeClass("active");
				}
			});
		});
	}


	// fmaily_site click
	$(".fmaily_site dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".fmaily_site dd").slideToggle(300);
	});

	
	// #page1
	var bgn=0;

	motionBackground(bgn);

	$("#page1 .logo > ul > li").mouseenter(function(e){
		e.preventDefault();
		bgn=$(this).index();
		motionBackground(bgn);
	});

	function motionBackground(n){
		$("#page1_bg").addClass("active");
		$("#page1_bg").attr({"class":"case"+n})

		$("#page1_bg").fadeIn(500, function(){
			$("#page1").attr("class", "case"+n);
			$("#page1").addClass("active");
			$(this).hide();
			$(this).removeClass("active");
		});
		$("#page1 .logo > ul > li").each(function(i){
			if(i == bgn){
				$(this).addClass("active");
			}
			else{
				$(this).removeClass("active");
			}
		});
	}
});