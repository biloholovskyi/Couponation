import 'normalize.css';
import { smallFormInput } from "./smallForm";
import './accordion';

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

// map modal
$('.contact-page .contact-info .map-block .icon').on('click', function(){
  $('.maps').toggleClass('active');
});
$('.close-map').on('click', function(){
  $('.maps').toggleClass('active');
});

});

$(window).resize(() => {

});