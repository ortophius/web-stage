$(document).on('click', function(e){
  var target = $(e.target);
  var bar = $('.left-bar');
  if (target.parent('.left-bar__label').length){
    bar.addClass('left-bar_active');
  }
  else if (!target.parents('.left-bar').length && !target.hasClass('left-bar') && bar.hasClass('left-bar_active')) bar.removeClass('left-bar_active');
});