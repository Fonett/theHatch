$(function () {

	$(".menu-visible").hide();
	/* Toggle */ 
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();	

		var $this = $(this),
		blockId = $this.data('collapse');


		
			
		$this.toggleClass("active");
		$(blockId).slideToggle();
	})


	/* Slider */ 
	$("[data-slider]").slick({
		arrows: false
	});

	/* Fixed Header */ 
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight();

		scrollPos = $(this).scrollTop();

		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});


	/* Smooth Scroll */ 
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset - 150
		}, 700);
	});


	/* Nav Toggle */
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	navToggle.on("click", function (event) {
		event.preventDefault();

		nav.toggleClass("show");
	});

});