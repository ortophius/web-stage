$('.filter__link').on('click', e => {
  if ($('.filter-menu').css('visibility') == 'hidden') {
    $('.filter-menu').css({
      'margin-top': '0px'
    })
    .delay(200)
    .queue(() => {
      $('.filter-menu').css({      
        'visibility': 'visible',
        'opacity': '1'
      })
      .dequeue();
    })
  }
  else {
    $('.filter-menu').css({
      'opacity': '0',
      'visibility': 'hidden'
    })
    .delay(200)
    .queue(()=> {
      $('.filter-menu').css({
        'margin-top': '-50%'
      })
      .dequeue();
    })
  }
});