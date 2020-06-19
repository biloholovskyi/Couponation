import 'normalize.css';
import { smallFormInput } from "./smallForm";

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

  $('.small-form__form input').on('input', (e) => smallFormInput(e));
});

$(window).resize(() => {

});



