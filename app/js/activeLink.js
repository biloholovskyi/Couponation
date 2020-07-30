const switchLink = (e) => {
  if(!$(e.currentTarget).hasClass('active')){
    $(e.currentTarget).siblings().removeClass('active');
    $(e.currentTarget).addClass('active');
  }
}

export {switchLink} 