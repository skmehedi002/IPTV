(function ($) {
"use strict";

var $window = $(window);

/* Preloader Effect */
$window.load(function () {
	$(".preloader").fadeOut(500);
});
/* ---------------------------------------------
navigation
--------------------------------------------- */
/*--Dropdown Menu--*/
$(".nav-wrapper > ul > li, ul.dropdown li").mouseover(function () {
	$(this).addClass("dropdwon");
});
$(".nav-wrapper > ul > li, ul.dropdown li").mouseout(function () {
	$(this).removeClass("dropdwon");
});

/*--search Menu--*/
$(".pixinav .search_button, .pixinav .search-close").on("click", function () {
	$('.search-form').toggleClass('search-open');
});

/*--Responsive Navigation--*/
//Nav Toggle*
$('.responsive-nav .nav-icon, .responsive-nav .nav-button-close, .responsive-nav .nav-wrapper>ul>li>a').on("click", function () {
	$('.nav-wrapper').toggleClass('right-canvas');
});

//Dropdown
$(".responsive-nav ul.dropdown ").on("click", function (e) {
	e.stopPropagation();
});

$('.responsive-nav .nav-wrapper  ul  li').on("click", function () {
	$(this).children('.mega_menu').slideToggle().css({
		"display": "flex"
	});
	$(this).children('ul').slideToggle();

});
//Icon Rotated
$(".responsive-nav .nav-wrapper ul  li  a").on("click", function () {
	$(this).toggleClass("icon_rotated");
});
//sticky nav
$(window).on("scroll", function () {
	var winTop = $(window).scrollTop();
	if (winTop >= 1) {
		$(".pixinav").addClass("sticky-header");
	} else {
		$(".pixinav").removeClass("sticky-header");
	}
});
/* ---------------------------------------------
Smooth Scroll
--------------------------------------------- */

$('.nav > li > a').bind('click', function (event) {
	var $anchor = $(this);
	var headerH = '48';
	$('.header').outerHeight();
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
	}, 1200, 'easeInOutExpo');

	event.preventDefault();
});
$.extend($.easing, {
	easeInOutExpo: function (t, e, i, n, s) {
		return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
	},
});

/*-----------------------
Pogo Slider
-----------------------
*/

$('#pogo-slider').pogoSlider({
	autoplay: true,
	autoplayTimeout: 5000,
	displayProgess: true,
	targetWidth: 1920,
	targetHeight: 960,
	responsive: true,
	pauseOnHover: false,
}).data('plugin_pogoSlider');

/* ---------------------------------------------
carousel Clients Brand
--------------------------------------------- */
$('.about-img.owl-carousel').owlCarousel({
	loop: true,
	margin: 15,
	dots: true,
	nav: false,
	smartSpeed: 500,
	autoplay: false,
	autoplaySpeed: 1500,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 3
		}
	}
});
/* ---------------------------------------------
carousel Clients Brand
--------------------------------------------- */
$('.clients-brand.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots: false,
	nav: false,
	smartSpeed: 500,
	autoplay: true,
	autoplaySpeed: 1500,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 4
		}
	}
});




})(jQuery);
