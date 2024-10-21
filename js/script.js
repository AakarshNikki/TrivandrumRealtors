const navLinks = document.getElementById('nav-links');
$(document).ready(function() {	
	$('.current-projects').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
	/* Navigation burger onclick side navigation show */
	$('.hamburger').on('click', function() {
		if($('#myBtn').hasClass('change')) {
			$('.nav-links').addClass('stop-scroll');
            $('.nav-links').toggle('slow');

		} else {
            $('.nav-links').toggle('slow');
			$('.nav-links').removeClass('stop-scroll');
		}
	});
});
new WOW().init();
 
