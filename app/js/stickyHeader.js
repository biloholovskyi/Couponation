let scrolled;

window.onscroll = function() {
  scrolled = window.pageYOffset || document.createElement.scrollTop;
  if( scrolled > 80 ) {
    $('.header').addClass('active') 
    $('.alphabet-single-wrap').addClass('active') 
    $('.mobile-menu').addClass('shadow') 
  }

  if( 80 >scrolled ) {
    $('.header').removeClass('active') 
    $('.alphabet-single-wrap').removeClass('active')   
    $('.mobile-menu').removeClass('shadow') 
  }
}





  