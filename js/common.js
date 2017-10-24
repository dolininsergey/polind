$(function() {

		$('.search-button').click(function() {
			$('.search-form').animate({width: 'toggle'});
		});


	  $(".owl-carousel").owlCarousel({
	  	loop: true,
	  	items: 5,
	  	margin: 15,
	  	responsiveClass: true,
	  	responsive : {
	          0 : {
	              items: 1
	          },
	          500 : {
	              items: 2
	          },
	          650 : {
	          		items: 3
	          },
	          960 : {
	              items: 4
	          },
	          1200 : {
	              items: 5
	          },
	      }
	  });


		$(".oc-item").hover(function() {
			$(this).find('.button').css('display', 'inline-block');
		}, function() {
			$(this).find('.button').css('display', 'none');
		});

});
