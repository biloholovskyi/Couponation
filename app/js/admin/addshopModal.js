
$('#addSHopBtn').on('click', function(){
  $('.addShops__modal--overlay').addClass('active');
  $('body').css({
    'overflow': 'hidden',
    'position': 'relative',
    'height': '100vh'
  });
});


$('.shops__modal--close').on('click', function(){
  $('.addShops__modal--overlay').removeClass('active');
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