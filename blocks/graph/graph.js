
(function( $ ){
  $.fn.animateGraph = function(time) {
    var timers = [];
    this.each(function(index, elem){
      var value = $(elem).find('.graph__line').attr('data-value');
      var interval = time / value;
      var timers[index]['value'] = 0;
      var timers[index]['timer'] = setInterval(function(){
        $(elem).find('graph__value').html(++timers[index]['value']);
        if (timers[index]['value'] >= $(elem).find('.graph__line').attr('data-value')) clearInterval(timers[index]['timer']);
      }, interval);
    });
  }
})(jQuery)