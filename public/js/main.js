$(document).ready(function () {
  const burger = $('#mobile-menu__burger');
  const navigation = $('#mobile-navigation');

  burger.on('click', () => {
    navigation.toggleClass('active');
  });

  const wow = new WOW({});

  wow.init();

  $.stellar({
    horizontalOffset: 50,
    verticalOffset: 400,
  });

  $('.owl-introduction').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('.owl-reviews').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: false,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });
});
