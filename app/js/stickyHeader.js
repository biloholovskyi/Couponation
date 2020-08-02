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


$(document).ready(function(){
    let obj = $('#sticky');
    let offset = obj.offset();
    let topOffset = offset.top;
    let marginTop = obj.css("marginTop");

    $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    
      if (scrollTop >= topOffset){
        obj.addClass('shadows');
        obj.css({
          marginTop: 0,
          position: 'fixed', 
          top: 63,
       
        });
      }
    
      if (scrollTop < topOffset){
        obj.removeClass('shadows');
        obj.css({
          marginTop: 0,
          position: 'relative',
        
          
        });
      }
    });
  });

  $(document).ready(function(){
    let obj = $('#abc');
    let offset = obj.offset();
    let topOffset = offset.top;
    let marginTop = obj.css("marginTop");
  
    $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    
      if (scrollTop >= topOffset){
        obj.addClass('stikyAbc');
        obj.css({
          marginTop: 0,
          position: 'fixed', 
          top: 63,
       
        });
      }
    
      if (scrollTop < topOffset){
        obj.removeClass('stikyAbc');
        obj.css({
          marginTop: 0,
          position: 'relative',
          top: 0
          
        });
      }
    });
  });

  