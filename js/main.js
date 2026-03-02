$(function(){

	// 폴더 애니메이션
	const folder = document.getElementById('mobileFolder');
	folder.addEventListener('click', function(e) {
		if (window.innerWidth <= 768) {
			this.classList.toggle('is-open');
			e.stopPropagation();
		}
	});

	// 상단 메뉴 + 오른쪽 메뉴 클릭 이동
	document.querySelectorAll('#gnb a, .controller a').forEach(link => {
		link.addEventListener('click', function (e) {

			const href = this.getAttribute('href');

			if (!href.startsWith("#")) return;

			e.preventDefault();

			const targetSection = document.querySelector(href);

			if (targetSection) {
				const headerHeight = document.querySelector("#header").offsetHeight;

				window.scrollTo({
					top: targetSection.offsetTop - headerHeight,
					behavior: 'smooth'
				});
			}
		});
	});

	// nav active
	function setActiveMenu() {

		const sections = document.querySelectorAll('section');
		const navLinks = document.querySelectorAll('#gnb a, .controller a');

		let current = "";

		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			if (window.pageYOffset >= sectionTop - 60) {
				current = section.getAttribute('id');
			}
		});

		navLinks.forEach(link => {
			link.classList.remove('active');

			const href = link.getAttribute('href').replace("#","");

			if (href === current) {
				link.classList.add('active');
			}
		});
	}

	window.addEventListener('load', function() {
		if(window.location.hash){
			history.replaceState(null, null, ' ');
			window.scrollTo(0,0);
		}
		setActiveMenu();
	});
	window.addEventListener('scroll', setActiveMenu);


	// tab
	function initPortfolioTab(sectionId){

		var $portfolios = $("#" + sectionId + " .portfolio");

		$portfolios.removeClass("active");
		$portfolios.first().addClass("active");

		$portfolios.find(".tit").off("click").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();

			var portfolio = $(this).closest(".portfolio");

			if(portfolio.hasClass("active")){
				portfolio.removeClass("active");
				return;
			}

			$portfolios.removeClass("active");
			portfolio.addClass("active");

			var headerHeight = $("#header").outerHeight() || 0;
			var portfolioY = portfolio.offset().top - headerHeight;

			$("html, body").stop().animate({scrollTop: portfolioY}, 600);
		});
	}

	// 초기화
	initPortfolioTab("portfolio_fn");
	initPortfolioTab("portfolio");



	// portfolio details
	function wheelGalleryUI(target){

		var $imgArea = $("#"+target+" .img");

		$imgArea.on("wheel", function(e){

			if(!$imgArea.closest(".portfolio").hasClass("active")) return;

			var $view = $(this).find(".view");
			var $img  = $view.find("img");

			if($img.length === 0) return;

			var maskH = $view.outerHeight();
			var imgH  = $img.outerHeight();
			var maxScroll = imgH - maskH;

			if(maxScroll <= 0) return;

			e.preventDefault();

			var currentTop = Math.abs(parseInt($img.css("top"))) || 0;
			var delta = e.originalEvent.deltaY;
			var scrollStep = 60;

			if(delta > 0){
				currentTop += scrollStep;
			} else {
				currentTop -= scrollStep;
			}

			if(currentTop < 0) currentTop = 0;
			if(currentTop > maxScroll) currentTop = maxScroll;

			$img.css({
				position: "absolute",
				top: -currentTop + "px"
			});
		});
	}

	// 자동 적용
	$("[id^='pc'], [id^='mo']").each(function(){
		wheelGalleryUI($(this).attr("id"));
	});


	// gnb 클릭
	$("#gnb li a").click(function(e){
		e.preventDefault();

		var target = $(this).attr("href");

		if(target === "#none") return;

		var $target = $(target);

		if($target.length){
			var headerHeight = $("#header").outerHeight() || 0;
			var pos = $target.offset().top - headerHeight;

			$("html, body").stop().animate({scrollTop: pos}, 800);
		}
	});


	// project link
	function mobileLink(){
		if (window.innerWidth <= 1000){
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