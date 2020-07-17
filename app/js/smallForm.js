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
 
// const adminFormInput = (e) => {  
//   const input = $(e.currentTarget);
//   if(input.val() === '') {
//     input.parent('.input-item').removeClass('input');
//   } else {
//     input.parent('.input-item').addClass('input'); 
//   }
// }





export { smallFormInput}