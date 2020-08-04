$(document).ready(function(){
  $('.Drop').on('click', function(){
    $(this).children('.dropdown-menu').toggleClass('active');
    $(this).toggleClass('active');
    $(this).children('button').find('.plus').toggleClass('active');
    $(this).children('button').find('.minus').toggleClass('active');
  });

//droplist on network page

$('.newtwork__droplist').on('click', function(){
  $(this).toggleClass('show');
  $(this).children('.network_arrow').toggleClass('active');
  $('.network__page .admin__content .drop-info').toggleClass('network-hidden'); 
});


});





