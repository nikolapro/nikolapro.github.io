$(function () {
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x
    var lastIsUp = true;
    $([window, document]).bind(mousewheelevt, function (e) {
        var evt = window.event || e;
        evt = evt.originalEvent ? evt.originalEvent : evt;
        var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
        if (delta > 0) {
            // Scroll up
            if ($(window).scrollTop() <= $(window).height()) {
                if (lastIsUp)
                    $('html, body').stop();
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 400);
            }
            lastIsUp = true;
        }
        else {
            // Scroll down
            if ($(window).scrollTop() < $(window).height()) {
                if (!lastIsUp)
                    $('html, body').stop();
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(window).height()
                }, 400);
                lastIsUp = false;
            }
        }
    });
});