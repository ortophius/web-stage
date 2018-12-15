$(document).on('click', function(e){
  var target = $(e.target);
  var bar = $('.left-bar');
  
  if (target.hasClass('left-bar__toggle')){
    bar.addClass('left-bar_active');
    $('.logo-m').addClass('logo-m_hidden');
  }
  else if (!target.parents('.left-bar').length && !target.hasClass('left-bar') && bar.hasClass('left-bar_active')){
    bar.removeClass('left-bar_active');
    $('.logo-m').removeClass('logo-m_hidden');
  }
});