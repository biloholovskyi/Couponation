import 'normalize.css';
import { smallFormInput} from "./smallForm";
import './accordion';
import { switchTab } from "./tabs";

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

  $('.small-form__form input,.small-form__form textarea').on('input', (e) => smallFormInput(e));
  

// map modal
$('.contact-page .contact-info .map-block .icon').on('click', function(){
  $('.maps').toggleClass('active');
});
$('.close-map').on('click', function(){
  $('.maps').toggleClass('active');
});

// admin modal
$('.addNewCoupon').on('click', function(){
  $('.admin__modal--overlay').css({'display': 'flex'});
  $('body').css({
    'overflow': 'hidden',
    'position': 'relative',
    'height': '100vh'
  });
});

$('.change_shop').on('click', function(){
  $('.shop__modal--overlay').css({'display': 'flex'});
  $('body').css({
    'overflow': 'hidden',
    'position': 'relative',
    'height': '100vh'
  });
});

//admin modal close
$('.adm__modal--close').on('click', function(){
  $('.admin__modal--overlay').css({'display': 'none'});
  $('.shop__modal--overlay').css({'display': 'none'});
  $('body').css({
    'overflow': 'visible',
    'position': 'relative',
    'height': '100%'
  });
});

// block user on instagram page
$('.block').on('click', function(){
  $(this).hide();
  $(this).parent('.coupon__btn--section').find('.unblock').show(); 
});

$('.unblock').on('click', function(){
  $(this).hide();
  $(this).parent('.coupon__btn--section').find('.block').show();
});


$('.adm-tab__head .tabs .tab').on('click', (e) => {
  switchTab(e)
});

});





$(document).on('click', function(e){
  let modal = $('.admin__modal, .shop__modal');
  let Btn = $('.addNewCoupon, .change_shop');


  if(!Btn.is(e.target) && Btn.has(e.target).length === 0) {
    if(!modal.is(e.target) && modal.has(e.target).length === 0){
      $('.admin__modal--overlay').css({'display': 'none'});
      $('.shop__modal--overlay').css({'display': 'none'});
      $('body').css({
        'overflow': 'visible',
        'position': 'relative',
        'height': '100%'
      });
    }
  }
});





$(window).resize(() => {


});