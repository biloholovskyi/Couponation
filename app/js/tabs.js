const switchTab = (e) => {
  const tabs = $('.adm-tab__head .tabs .tab');
  const current = $(e.currentTarget);
  tabs.removeClass('active');
  current.addClass('active');
  const id = current.attr('id').split('tab-')[1];
  $('.adm-tab__body').removeClass('show');
  $('#body-' + id).addClass('show');
}

const switchTabGrf = (e) => {
  const tabs = $('.grf-tab__head .tabs .tab');
  const current = $(e.currentTarget);
  tabs.removeClass('active');
  current.addClass('active');
  const id = current.attr('id').split('tab-')[1];
  $('.grf-tab__body').removeClass('show');
  $('#body-' + id).addClass('show');
}

export { switchTab, switchTabGrf }   