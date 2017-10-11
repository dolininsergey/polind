$(function() {

	$('.search-button').click(function() {
		$('.search-form').animate({width: 'toggle'});
	});


  $(".owl-carousel").owlCarousel({
  	loop: false,
  	//autoplay: true,
  	//autoplayTimeout: 1000,
  	items: 5,
  	margin: 15,
  	responsiveClass: true,
  	responsive : {
          0 : {
              items: 1
          },
          768 : {
              items: 3
          },
          960 : {
              items: 4
          },
          1200 : {
              items: 5
          },
      }
  	//center: true,
  });


    // $('.center').each(setInterval(function(){
    //     //$(this).addClass("ben");
    //     $(this).children().css("border", "solid 1px #fff");
    // }, 1000));
    // $("owl-item").each(function() {
    // 	if($(this)).hasClass("center") {
    // 		$(this).css("border", "solid 1px #fff");
    // 	}
    // });
//setInterval (function(){}, 5000);

});
