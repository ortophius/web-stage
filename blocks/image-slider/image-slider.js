$('.image-slider__nav-button').click(function(e){
  var currentIndex = 0;
  var nextIndex = 0;
  var direction = 1;
  var slides = $(e.target).parents('.image-slider').find('.image-slider__slide');
  
  if ($(e.currentTarget).hasClass('image-slider__nav-button_direction_back')) direction = -1;
  
  slides.each(function(index, elem){
    if ($(elem).hasClass('image-slider__slide_active')) currentIndex = index;
  });
  
  if ((currentIndex + direction > slides.length - 1 ) || (currentIndex + direction < 0)) {
    if (direction == 1) nextIndex = 0;
    else nextIndex = slides.length - 1;
  }
  
  else nextIndex = currentIndex + direction;
  
  $(slides[currentIndex]).removeClass('image-slider__slide_active');
  $(slides[nextIndex]).addClass('image-slider__slide_active');
});