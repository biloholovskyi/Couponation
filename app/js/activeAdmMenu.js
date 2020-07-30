// active link menu
$(document).ready(function(){

  $(function () {
    let location = window.location.href;
    $('.admin__link--bar a,.admin__link--bar2 a').each(function () {
        let link = $(this).attr('href');
          if (location.indexOf(link) !== -1){
            $(this).addClass('current');
            }
        });
    });

   
     

});





