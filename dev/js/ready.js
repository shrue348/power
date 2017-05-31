'use strict';

$(function(){

	baguetteBox.run('.baguetteBox');

	$('select').selectbox();


	$(".cat_item__carousel_wrap").mCustomScrollbar({
        axis: "x",
        theme: "dark-thin",
        autoExpandScrollbar: !0,
        advanced: {
            autoExpandHorizontalScroll: !0
        }
    })

	$(document).mouseup(function (e){
		var div = $(".header_reg_dropdown, .header_search__form, .header_cart_dropdown, .header_search__dropdown");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.fadeOut();
		}
	});
});

