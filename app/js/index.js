import 'normalize.css';

$(document).ready((e) => {
  // main slider
  $('.main-slider__body').owlCarousel({
    loop: false,
    nav: true,
    navText: '',
    dots: false,
    autoplay: false,
    margin: 10,
    items: 5
  });
});

$(window).resize(() => {

});



