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