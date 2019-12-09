'use strict';
(function ($) {
	/*scroll from top*/
	$(document).ready(function () {
		$('.main-nav__link').click(function (evt) {
			evt.preventDefault();
			var linkHref = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(linkHref).offset().top
			}, 1000);

		})
	});

	/*scroll from bottom*/
	$(function () {
      var headerHeight = $('.ei-slider').outerHeight();
			var functionsHeight = headerHeight + $('.health-diary').outerHeight();
			var opportunitiesHeight = functionsHeight + $('.opportunities').outerHeight();
      var specialistsHeight = opportunitiesHeight + $('.to-specialists').outerHeight() + 500;
			$('#about-service-up').click(function () {
				$('html, body').animate({ scrollTop: headerHeight }, 1000);
				return false;
			})
			$('#functions-up').click(function () {
				$('html, body').animate({ scrollTop: functionsHeight }, 1000);
				return false;
			})
			$('#opportunities-up').click(function () {
				$('html, body').animate({ scrollTop: opportunitiesHeight }, 1000);
				return false;
			})
			$('#to-specialists-up').click(function () {
				$('html, body').animate({ scrollTop: specialistsHeight }, 1000);
				return false;
			})

  })
  
/*menu*/

function resize() {
    var menu = $('.main-nav__list');
    var header = $('nav');
    var widthHead = header.width();
    if (widthHead < 670) {
        menu.css({'display':'none'});
        header.addClass('mobile');
    } else {
        menu.css({'display':'flex'});
        header.removeClass('mobile');
    }
}
resize();
 
$(window).resize(function() {
    resize();
});
 
$('.main-nav__hamburger').click(function(){
   var element = $('.main-nav__list');
   var display = element.css('display');
    if(display == 'none')
        $('.main-nav__list').slideDown(400);
    if(display == 'block')
        $('.main-nav__list').slideUp(400);
});
 
$('.main-nav__link').click(function(){
    var header = $('header');
    var widthHead = header.width();
    if(widthHead < 670)
        $('.main-nav__list').slideUp(400)});

}) (jQuery)


