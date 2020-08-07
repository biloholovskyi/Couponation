const smallFormInput = (e) => {
  const input = $(e.currentTarget);
  if(input.val() === '') {
    input.parent('form').removeClass('input');
    input.parent('.input-item').removeClass('input');
    
  } else {
    input.parent('form').addClass('input');
    input.parent('.input-item').addClass('input'); 
  }
}
 
const searchInput = (e) => {  
  const input = $(e.currentTarget);
  if(input.val() === '') {
    input.parent('.admin__search').removeClass('active__search');
    input.parent('.admin__search').children('.search__modal').css('display', 'none');
  } else {
    input.parent('.admin__search').addClass('active__search'); 
    input.parent('.admin__search').children('.search__modal').css('display', 'flex');
  }
}





export { smallFormInput, searchInput}