'use strict';

$(function(){
	$('.partners__list').slick({
		dots: true,
		slidesToShow: 6,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: true,
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 480,
		      settings: {
		        arrows: true,
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },{
		      breakpoint: 380,
		      settings: {
		        arrows: true,
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	baguetteBox.run('.baguetteBox');


	$(".cat_item__carousel_wrap").mCustomScrollbar({
        axis: "x",
        theme: "dark-thin",
        autoExpandScrollbar: !0,
        advanced: {
            autoExpandHorizontalScroll: !0
        }
    })

});


$(function(){
	var $info = $(".sanknizka_calc__price"),
		$offset = $info.offset();
		

	if ($offset) {
		$(window).scroll(function(){
			var page_w = $("html").width();

			//if ( page_w > 979) {
				var $height = $info.height(),
					$cart_wrap = $(".sanknizka_calc"),
					$cart_height = $cart_wrap.height();
				
				if ( $(window).scrollTop() > $offset.top - 10){
					$info.css('top', $(window).scrollTop() - $offset.top + 10 )
				} 
				if ( $(window).scrollTop() < $offset.top){
					$info.css('top', 0)
				} 
				if ( $(window).scrollTop() > $offset.top + $cart_height - $height - 230){
					$info.css('top', $cart_height - $height - 220 )
				} 
			//}
		});
	}
		
});