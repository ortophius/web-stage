$(document).on('DOMContentLoaded', () => {
  var images = [];
  $('.back-image').each((index, item) => {
    var img = new Image();
    img.src = $(item).attr('data-img');
    img.onload = () => {
      $(item).css('background-image', 'url('+img.src+')');
      $(item).css('opacity', '1');
    }
  });
})