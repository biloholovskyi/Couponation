//anhors 
$('.anhors').on('click', function (event) {
  event.preventDefault();
  let id = $(this).attr('href'),
    top = $(id).offset().top - 150;

  $('body, html').animate({scrollTop: top}, 800);
  
});




