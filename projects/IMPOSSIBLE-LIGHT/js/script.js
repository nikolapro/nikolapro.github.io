$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.header-background').css({
    'transform' : 'translate(0px, '+ wScroll /-70 + '%)'
    });

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /3 + '%)'
    });

});

(function () {
    $(window).scroll(function () {
        var oVal;
        oVal = $(window).scrollTop() / 1300;
        return $('.blur').css('opacity', oVal);
    });
}.call(this));


                      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       200,          // default
                      mobile:       true,       // default
                      live:         true,        // default
                    }
                    )
                    wow.init();
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});