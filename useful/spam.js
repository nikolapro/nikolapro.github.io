function spam(message,num,delay) {
  var delay = 6000;
  var sp = setInterval(function(){
    $('#input').val(message);
    $('#sayit-button').click();
    setInterval(function(){
      $('i:first').find('a:first').click();
    },0)
    if (++num === num) {
      window.clearInterval(sp);
    }
  },delay);
}
