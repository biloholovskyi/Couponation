import 'normalize.css';
import { smallFormInput} from "./smallForm";
import './accordion';
import { switchTab, switchTabGrf } from "./tabs";
import './stickyHeader';

$(document).ready((e) => {

  // main slider
  $('.main-slider__body').owlCarousel({ 
    loop: false,
    nav: true,
    navText: '',
    dots: false,
    autoplay: false,
    margin: 10,
    items: 5,
    responsive: {
      0: {
        items: 2
      },
      575: {
        items: 3
      },
      767: {
        items: 4
      },
      991: {
        items: 5
      }
    }

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


// GET code modal
$('.getCode').on('click', function(){
  $('.getCode__modal--overlay').css({'display': 'flex'}); 
  $('body').css({
    'overflow': 'hidden',
    'position': 'relative',
    'height': '100vh'
  });
});

$('.getCode__modal--close').on('click', function(){
  $('.getCode__modal--overlay').css({'display': 'none'});
  $('body').css({
    'overflow': 'visible',
    'position': 'relative',
    'height': '100%'
  });
});

// change shop modal on admin page
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

$('.grf-tab__head .tabs .tab').on('click', (e) => {
  switchTabGrf(e) 
});


// open droplist in header

$('.header__drop--btn').on('click', function(){
  $('.header__modal--wrap').toggleClass('active');
});

// add active class 0n healtcare pages


$(function () {
  let location = window.location.href;
  $('.top-category__body .categoryItem').each(function () { 
      let link = $(this).attr('href');
        if (location.indexOf(link) !== -1){
          $(this).addClass('active');
          }
      });
  });


});


$(document).mouseup(function(e){
  let div = $('.header__drop--btn, .header__modal--wrap');
  if(!div.is(e.target)
  && div.has(e.target).length === 0) {
    div.removeClass('active'); 
    $('.header__modal--wrap').removeClass('active');
  }
});


$(document).on('click', function(e){
  let modal = $('.admin__modal, .shop__modal, .getCode__modal');
  let Btn = $('.addNewCoupon, .change_shop, .getCode');


  if(!Btn.is(e.target) && Btn.has(e.target).length === 0) {
    if(!modal.is(e.target) && modal.has(e.target).length === 0){
      $('.admin__modal--overlay').css({'display': 'none'});
      $('.shop__modal--overlay').css({'display': 'none'});
      $('.getCode__modal--overlay').css({'display': 'none'});
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