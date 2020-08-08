$('.aff_sec').on('click', function(){
  $('.program__item--one').css('display', 'flex');
  $('.program__item--two').css('display', 'none');
});

$('.custopm_sec').on('click', function(){
  $('.program__item--one').css('display', 'none');
  $('.program__item--two').css('display', 'flex');
});


$('.program__list').on('click', function(){
    $(this).children('img').toggleClass('active');
    $('.private__modal').toggleClass('active');
});

$('.private__modal .private__item').on('click', function(){
    let items = $(this).html();
    $(this).parents('.program__list').find('p').html(items);
});