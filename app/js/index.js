import 'normalize.css';
import { smallFormInput, searchInput} from "./smallForm";
import './accordion';
import { switchTab, switchTabGrf, switchTabUser,switchTabStat, switchTabModer } from "./tabs";
import './stickyHeader';
import './anhors';
import {switchLink} from './activeLink';
import Catalogue from "./catalogue";
import './countInput';
import AdminDrop from "./admin/dropDown";
import './admin/addshopModal';
import './cheked_shop_page';

const catalogue = new Catalogue();
const adminDrop = new AdminDrop();


$(document).ready((e) => {
  // calendar
  adminDrop.calRender();
  document.querySelectorAll('.calendar-js').forEach(cal => {
    cal.addEventListener('click', (e) => adminDrop.calShow(e));
  })
  document.querySelectorAll('.calendar-js input').forEach(input => input.addEventListener('click', (e) => adminDrop.calSwitch(e)))

  document.querySelectorAll('.calendar-js .calendar-month, .calendar-js .calendar-year').forEach(select => {
    select.addEventListener('change', (e) => adminDrop.calcSwitchMonth(e))
  })

  document.querySelectorAll('.calendar-js .column .day').forEach(day => {
    day.addEventListener('click', (e) => adminDrop.calcSetDate(e))
  })
  
  // modal save succsefully
  $('#saveChange').on('click', function(){
    $('.shop_succefully').css('display', 'flex'); 
    setTimeout (() => {
      $('.shop_succefully').css('display', 'none'); 
    }, 3000);
  }); 

  $('#savePass').on('click', function(){
    $('.pass__succes').css('display', 'flex'); 
    setTimeout (() => {
      $('.pass__succes').css('display', 'none'); 
    }, 3000);
  });

  $('#createCoupon').on('click', function(){
    $(this).parents('.admin__modal--overlay').hide();
    $('.shop_succefully').css('display', 'flex'); 
    setTimeout (() => {
      $('.shop_succefully').css('display', 'none'); 
    }, 3000);
  });

  // invite new users
  $('.new_user').on('click', function(){
    $('.invite__user--overlay').css('display', 'flex');
    $('body').css({
      'overflow': 'hidden',
      'position': 'relative',  
      'height': '100vh'
    });
  });

  $('.invite__user--close').on('click', function(){
    $('.invite__user--overlay').css('display', 'none');
    $('.small-form__form input').val('');
    $('.small-form__form').removeClass('input');
    $('body').css({
      'overflow': 'visible',
      'position': 'relative',
      'height': '100%'
    });
  });
  // end modal new user
  // emoji selected modal
  $('.smile__block .smile').on('click', function(){
    $('.smile__block .smile').removeClass('active');
    $('.smile__block .smile .smile__selected').removeClass('active');
    $(this).children('.smile__selected').toggleClass('active');
    $(this).toggleClass('active'); 
  });

  $('#change-emoji').on('click', function(){
    $('.change__emoji--overlay').addClass('active');
    $('body').css({
      'overflow': 'hidden',
      'position': 'relative', 
      'height': '100vh'
    });
  });

  $('.change__emoji--close').on('click', function(){
    $('.change__emoji--overlay').removeClass('active');
    $('body').css({
      'overflow': 'visible',
      'position': 'relative',
      'height': '100%'
    });
  });

  // end emoji modal
  document.querySelectorAll('.api-sources__table .api-table__body tr td.name--width').forEach(item => {
    item.addEventListener('click', (e) => catalogue.show(e));
  });

  if(document.querySelector('.dashboard .admin__content .general__block .general__statistic p')) {
    document.querySelector('.dashboard .admin__content .general__block .general__statistic p').addEventListener('click', adminDrop.toggle);
  }

  if(document.querySelector('.adm-select-wrapp_bill .adm-select-item_bill')) {
    document.querySelector('.adm-select-wrapp_bill .adm-select-item_bill').addEventListener('click', adminDrop.toggle);
  }

  document.querySelectorAll('.type-select-js').forEach(select => {
    select.addEventListener('click', (e) => adminDrop.filterToggle(e))
  })

  // fix text area value
  document.querySelectorAll('textarea').forEach(area => {
    area.value = '';
  })
 
 
  $('.mobile__nav .shopLinks').on('click', (e) => switchLink(e));
  // show categories on categories page
  $('.categories-btn').on('click', function(){
    $(this).hide();
    $(this).parents('.categories-items').children('.hidden-category ').css('display', 'flex');
  });

  $('#coupon-slider').owlCarousel({ 
    loop: false,
    nav: true,
    navText: '',
    dots: false,
    autoplay: false,
    margin: 10,
    items: 5,
    responsive: {
      0: {
        items: 2,
        dots: true 
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
  $('.shop_detail .admin__content .shop__info--content .admin__search input').on('input', (e) => searchInput(e));
  $('.admin__modal .admin-form .double .admin__search input').on('input', (e) => searchInput(e)); 
  
  

 


// admin modal
$('.addNewCoupon').on('click', function(){
  $('.admin__modal--overlay').css({'display': 'flex'}); 
  $('body').css({
    'overflow': 'hidden',
    'position': 'relative',
    'height': '100vh'
  });
});

  $('#addNewCat').on('click', function(){
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
  $('input').val('');
  $('textarea').val('');
  $('.admin-form .double .input-item').removeClass('input');
  $('textarea').removeClass('input');
  $('#count').html('0');
  $('#counter').html('0');
  $('body').css({
    'overflow': 'visible',
    'position': 'relative',
    'height': '100%'
  });
});

// block user on instagram page
// $('.block').on('click', function(){
//   $(this).hide();
//   $(this).parent('.coupon__btn--section').find('.unblock').show();
// });
//
// $('.unblock').on('click', function(){
//   $(this).hide();
//   $(this).parent('.coupon__btn--section').find('.block').show();
// });


$('.adm-tab__head .tabs .tab').on('click', (e) => {
  switchTab(e)
});

$('.grf-tab__head .tabs .tab').on('click', (e) => {
  switchTabGrf(e) 
});

$('.user-tab__head .tabs .tab').on('click', (e) => {
  switchTabUser(e) 
});

$('.stat-tab__head .tabs .tab').on('click', (e) => {
  switchTabStat(e) 
});

$('.moder-tab__head .tabs .tab').on('click', (e) => {
  switchTabModer(e)  
});




// open responsive menu in header

$('.burder-btn').on('click', function(){
  $(this).toggleClass('active');
  $(this).parents('.header').children('.header__logo').toggleClass('active');
  $('.close-menu').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
  $('.header').css('border-bottom', 'none');
  $('.stikyAbc').css('z-index', '18');
  $('.mobile__nav').css('z-index', '18');

  if( $('.mobile-menu').hasClass('active')) {
    $('.header').css('box-shadow', 'none');
  }
});


$('.close-menu').on('click', function(){
  $(this).toggleClass('active');
  $(this).parents('.header').children('.header__logo').toggleClass('active');
  $('.burder-btn').toggleClass('active');
  $('.mobile-menu').toggleClass('active'); 
  $('.header').css('box-shadow', '0 6px 16px rgba(0,0,0,.12)');
  $('.header').css('border-bottom', '1px solid #ebebeb');
  $('.stikyAbc').css('z-index', '20');
  $('.mobile__nav').css('z-index', '20');
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


// subscribe modal

  $('.subscribe').on('click', function(){
      $('.subscribe__modal').css('display', 'flex');
      $('.getCode__modal--overlay').css('display', 'none');
      $('body').css({
        'overflow': 'visible',
        'position': 'relative',
        'height': '100%'
      });
    setTimeout(() => { $('.subscribe__modal').css('display', 'none'); }, 3000);
  });

  $('.publish').on('click', function(){
    $(this).toggleClass('active');
  });

  $('.select__big .hover-block .input__section input').on('click', function(){
    $(this).toggleClass('input').siblings().removeClass('input');
  });

  $('.category .category-btn .hover__btn').on('click', function(){
      $(this).parents('.category-btn').hide();
  });

});


// $(document).mouseup(function(e){
//   let div = $('.select__big .hover-block .input__section input');
//   if(!div.is(e.target)
//   && div.has(e.target).length === 0) {
//     div.removeClass('input');  
//     $('.select__big .hover-block .input__section input').removeClass('input');
//   }
// });


$(document).on('click', function(e){
  let modal = $('.admin__modal, .shop__modal, .getCode__modal, .change__emoji--modal, .invite__user--modal, .shops__modal, .input__section input');
  let Btn = $('.addNewCoupon, .change_shop, .getCode, #change-emoji,.new_user, #addSHopBtn,.admin__search input, #addNewCat');


  if(!Btn.is(e.target) && Btn.has(e.target).length === 0) {
    if(!modal.is(e.target) && modal.has(e.target).length === 0){
      $('.admin__modal--overlay').css({'display': 'none'});
      $('.shop__modal--overlay').css({'display': 'none'});
      $('.getCode__modal--overlay').css({'display': 'none'});
      $('.change__emoji--overlay').removeClass('active');
      $('.invite__user--overlay').css({'display': 'none'});
      $('.addShops__modal--overlay').removeClass('active');
      $('.input__section input').removeClass('input');
      // $('.admin__search').removeClass('active__search');
      // $('.search__modal').css('display', 'none');
      $('body').css({
        'overflow': 'visible',
        'position': 'relative',
        'height': '100%'
      });
    }
  }
}); 


const btn = document.querySelector('.publish');

if (btn !== null) {
  btn.addEventListener('click', function(){
    btn.innerHTML = (btn.innerHTML === 'unpublish') ? btn.innerHTML = 'publish' : btn.innerHTML = 'unpublish';  
  });
}






$(window).resize(() => {


});