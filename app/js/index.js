import 'normalize.css';
import { smallFormInput,adminFormInput } from "./smallForm";
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
  $('.small-form__form .double .input-item input').on('input', (e) => adminFormInput(e));
  

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