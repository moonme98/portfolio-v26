$(function(){
	// video
	var videoUrl=["video1", "video2"];
	var videoTotal=videoUrl.length-1;
	var videoN=0;
	var videoPath="";
	var video=document.getElementById("my_video");
	
	video.play();
	video.muted=true;

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN+=1;
		}
		else{
			videoN=0;
		}

		videoPath="video/" + videoUrl[videoN] + ".mp4";
		$("#my_video").attr({src : videoPath});
		video.play();
	});


	// tab
	var portfolioN=0;

	$(".portfolio:first").addClass("active");

	$(".portfolio .tit").click(function(e){
		e.preventDefault();
		var portfolio=$(this).parents(".portfolio");
		// console.log(portfolioN, portfolio.index());

		if(portfolioN != portfolio.index()){
			portfolioN=portfolio.index();
			$(".portfolio").removeClass("active");
			portfolio.addClass("active");

			var portfolioY=$(this).offset().top-60;
			$("html").animate({scrollTop:portfolioY}, 800);
		}
	});


	// scroll
	var n=0;
	var t;
	var pos=0;
	var scrollTimer;

	function init(){
		$("#gnb li").eq(n).addClass("active");
	}
	init();

	$(window).scroll(function(){
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t < $("#page1").offset().top){
				n=0;
			}
			else if(t < $("#page2").offset().top){
				n=1;
			}
			else if(t < $("#page3").offset().top){
				n=2;
			}
			else if(t < $("#page4").offset().top){
				n=3;

				if(t == $(document).height()-$(window).height()){
					n=4;
				}
			}
			else{
				n=4;
			}

			if(n == 1 || n == 3){
				$("#gnb li").addClass("dark");
				$(".download").addClass("dark");
				$("#header").addClass("dark");
			}
			else{
				$("#gnb li").removeClass("dark");
				$(".download").removeClass("dark");
				$("#header").removeClass("dark");
			}

			$("#gnb li").removeClass("active");
			$("#gnb li").eq(n).addClass("active");
			$(".download").removeClass("active");
			$(".download").eq(n).addClass("active");

			$(".controller li").removeClass("on");
			$(".controller li").eq(n).addClass("on");
		}, 100);
	});
	$(window).trigger("scroll");


	// click
	$("#gnb li, .controller li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			pos=0;
		}
		else{
			pos=$("#page"+n).offset().top;
		}

		$("html").animate({scrollTop:pos}, 800);
	});

	
	// portfolio details
	var mouseWheelUI={
		pcscroll: 0,
	}

	function wheelGalleryUI(target){
		var maskH=$("#"+target+" .view").height();
		var img=$("#"+target+" .view img");
		// var imgH=img.height();
		var imgH=1971;
		var able=imgH-maskH;
		var step=Math.round(able/60);
		var scrollAmount=parseInt(img.css("top"));
		// console.log(maskH, imgH, able, step, scrollAmount);

		$("#"+target).mousewheel(function(e, delta){
			if(delta > 0){
				if(scrollAmount > 0){
					scrollAmount-=12;
				}
				else{
					scrollAmount=0;
				}
			}
			else{
				if(scrollAmount < able){
					scrollAmount+=12;
				}
				else{
					scrollAmount=able;
				}
			}
			img.css({top:-1*scrollAmount});
		});
	}

	$(".wrapper").mousewheel(function(e, delta){
		if(e.target.className === "dim"){
			return false;
		}
	});

	for(var i=0; i<=3; i++){
		wheelGalleryUI("pc"+i),
		wheelGalleryUI("mo"+i);
	}


	// project link
	function mobileLink(){
		if(isMobile){
			$(".project1").attr({href: "project1/mobile/index.html"});
			$(".project2").attr({href: "project2/mobile/index.html"});
		}
		else{
			$(".project1").attr({href: "project1/pc/index.html"});
			$(".project2").attr({href: "project2/pc/index.html"});
		}

		$(".project3").attr({href: "project3/index.html"});
	}

	mobileLink();
});