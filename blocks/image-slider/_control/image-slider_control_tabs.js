$('.image-slider').each(function(index, slider){
  
  var firstTab = true;
  var tabs = document.createElement('div');
  $(tabs).addClass('image-slider__tabs');
  
  $(slider).append(tabs);
  
  $(slider).find('.image-slider__slide').each(function(slideIndex, slide){
    var tab = document.createElement('div');
    
    $(tab).addClass('image-slider__tab');
    if (firstTab) {
      $(tab).addClass('image-slider__tab_active'); 
      firstTab = false;
    }
    
    $(slider).find('.image-slider__tabs').append(tab);
  });
  
  $('.image-slider__tabs').on('click', '.image-slider__tab', function(e){
    var tabs = $(e.delegateTarget).children();
    var index = (tabs.index(e.target));
    var slides = $(e.delegateTarget).parent().find('.image-slider__slide');
    var len = slides.length;
    
    if ((index >= 0) && (index + 1 <= len)){
      slides.removeClass('image-slider__slide_active');
      console.log(slides[index]);
      $(slides[index]).addClass('image-slider__slide_active');
      tabs.removeClass('image-slider__tab_active');
      $(tabs[index]).addClass('image-slider__tab_active');
    }
  })
})