$('.filter__link').on('click', e => {
  console.log($('.filter-menu').css('visibility'));
  if ($('.filter-menu').css('visibility') == 'hidden') {
    $('.filter-menu').css({
      'visibility': 'visible',
      'opacity': '1',
      'margin-top': '0px'
    })
  }
  else {
    $('.filter-menu').css({
      'opacity': '0',
      'margin-top': '-50%',
      'visibility': 'hidden'
    })
  }
});
$(document).on('DOMContentLoaded', () => {
  var images = [];
  $('.square-thumbs-item').each((index, item) => {
    var img = new Image();
    img.src = $(item).attr('data-img');
    img.onload = () => {
      $(item).css('background-image', 'url('+img.src+')');
      $(item).css('opacity', '1');
    }
  });
})