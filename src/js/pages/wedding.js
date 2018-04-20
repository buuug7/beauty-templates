import '../setup.js';

import '../../scss/wedding.scss';


// import slick-carousel
import 'slick-carousel';


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
    slidesToShow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    easing:'ease-in'
  });


});
