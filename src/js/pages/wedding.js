import '../setup.js';

import weddingTemplate from '../../html-template/wedding.html'

import '../../scss/wedding.scss';

// import slick-carousel
import 'slick-carousel';

document.title = 'Wedding';

$('body').prepend($(weddingTemplate));

$(document).ready(function () {

  // nav
  let $navbar = $('.navbar-wedding');

  document.addEventListener('scroll', function (e) {

    if ($navbar.offset().top > $navbar.height() * 1.5) {
      $navbar.addClass('bottom-shadow');
      $navbar.css({
        'padding':'0.5rem 1rem'
      })
    }else{
      $navbar.removeClass('bottom-shadow');
      $navbar.css({
        'padding':'1rem 1rem'
      })
    }
  });

  // baner slick
  $('.banner__slick').slick({
    slidesToShow: 2,
    arrows: false,
    dots: false,
    autoplay: true,
    easing:'ease-in',
    responsive:[{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        infinite: true
      }
    }]
  });


  // baner slick
  $('.posts__slick').slick({
    slidesToShow: 4,
    arrows: true,
    dots: false,
    //autoplay: true,
    easing:'ease-in',
    responsive:[{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
    },{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    },{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true
      }
    }]
  });

});


