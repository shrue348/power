'use strict';

$(function(){
	baguetteBox.run('.baguetteBox');

	$('select').selectbox();

	$('#slider').carousel()


	$(".carousel_wrap").mCustomScrollbar({
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

	$('.main_menu__toggle ').on('click', function(){
		$('.main_menu > ul').slideToggle();
	});

	$('.mobile_menu__toggle ').on('click', function(){
		$('.mobile_menu').addClass('open');
	});
	$('.mobile_menu__overlay ').on('click', function(){
		$('.mobile_menu').removeClass('open');
	})
});



$(function(){
	ymaps.ready(init);

	function init () {
		var myMap = new ymaps.Map('map', {
				center: [59.860437, 30.321560],
				controls: [],
				zoom: 14
			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				balloonContentHeader: 'OLBshop',
	            balloonContentBody: "Адрес",
	            balloonContentFooter: "8 800 500 63 24, пн-вс 10:00 - 20:00"
			}, {
				iconLayout: 'default#image',
				iconImageHref: '/img/map_baloon.png',
				iconImageSize: [34, 64],
				iconImageOffset: [-11, -64]
			});

		myMap.geoObjects.add(myPlacemark);
	};
})