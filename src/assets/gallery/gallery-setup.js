(function($) {
    "use strict";
    $('.payloan-product-big-img').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.payloan-product-small-img'
    });
    $('.payloan-product-small-img').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.payloan-product-big-img',
          dots: true,
          arrows: false,
          focusOnSelect: true,
          centerMode: true,
          centerPadding: '60px',
    });
      $('.payloan-spimg').magnificPopup({
        delegate: 'a', 
        type: 'image',
        mainClass: 'mfp-zoom-out', // this class is for CSS animation below
        gallery:{enabled:true},
        zoom: {
          enabled: true, 
          duration: 300,
          easing: 'ease-in-out',
          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
}(jQuery))