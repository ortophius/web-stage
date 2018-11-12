var graphs = $('.graph__bar');

$.fn.animateNum = function(to, time) {
  var interval;
  var val;
  
  interval = time / to;
  val = 0;
  elem = this;
  console.log(elem);
  console.log(interval);
  var update = setInterval(function(){
    $(elem).html(val);
    if (val++ >= to) clearInterval(update);
  }, interval)
}