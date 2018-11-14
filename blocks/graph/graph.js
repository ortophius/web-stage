
(function($){
  $.fn.animateGraph = function(time) {
    var timers = [];
    this.each(function(index, elem){
      var value = $(elem).find('.graph__line').attr('data-value');
      var interval = time / value;
      timers[index] = [];
      timers[index]['value'] = 0;
      timers[index]['timer'] = setInterval(function(){
        $(elem).find('.graph__value').html(++timers[index]['value'] + '%');
        if (timers[index]['value'] >= value) clearInterval(timers[index]['timer']);
      }, interval);
      $(elem).find('.graph__line').css('width', value + '%');
    });
  }
})(jQuery)

$('.graph').animateGraph(600);