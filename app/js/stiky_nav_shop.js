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
      $('.header').removeClass('active');
    }
  
    if (scrollTop < topOffset){
      obj.removeClass('shadows');
      obj.css({
        marginTop: 0,
        position: 'relative',
        top: 0,
      
        
      });
     $('.mobile__nav').find('.firstAnhors').addClass('active').siblings().removeClass('active');
    }
  });
});
