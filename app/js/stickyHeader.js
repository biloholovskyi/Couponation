let scrolled;

window.onscroll = function() {
  scrolled = window.pageYOffset || document.createElement.scrollTop;
  if( scrolled > 80 ) {
    $('.header').addClass('active')
  }

  if( 80 >scrolled ) {
    $('.header').removeClass('active')  
  }
}