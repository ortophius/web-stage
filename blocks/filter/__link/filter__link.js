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