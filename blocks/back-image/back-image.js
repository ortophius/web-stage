$(document).on('DOMContentLoaded', () => {
  var images = [];
  $('.back-image').each((index, item) => {
    var img = new Image();
    img.src = $(item).attr('data-img');
    img.onload = () => {
      $(item).css('background-image', 'url('+img.src+')');
      if (!$(item).hasClass('back-image_hidden')) $(item).css('opacity', '1');
    }
  });
})