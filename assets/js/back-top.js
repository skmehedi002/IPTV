(function ($) {
	"use strict";


	// scroll body to 0px on click
	$(document).on('click', '.back-top a', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-top').fadeIn();
		} else {
			$('.back-top').fadeOut();
		}
	});

	

})(jQuery);
