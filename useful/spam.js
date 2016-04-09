function spam(message,num,delay) {
  var number = 0;
  var sp = setInterval(function(){
    $('#input').val(message);
    $('#sayit-button').click();
    setInterval(function(){
      $('i:first').find('a:first').click();
    },0)
    if (++number === num) {
      window.clearInterval(sp);
    }
  },delay);
}
