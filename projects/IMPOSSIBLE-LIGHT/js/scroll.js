var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
$([window, document]).bind(mousewheelevt, function (e) {
    var evt = window.event || e;
    evt = evt.originalEvent ? evt.originalEvent : evt;
    var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
    if (delta > 0) {
        if ($(window).scrollTop() === $(window).height()) {
            $(document.body).stop();
            e.preventDefault();
            $(document.body).animate({scrollTop: 0});
        }
    }
    else {
        console.log($(window).scrollTop() > $(window).height() + 1);
        if ($(window).scrollTop() === 0) {
            $(document.body).stop();
            e.preventDefault();
            $(document.body).animate({scrollTop: $(window).height()});
        }
    }
});