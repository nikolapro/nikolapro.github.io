$(function () {
    function changeImg() {
        bottom.attr('src', imagesArray[index]);
        setTimeout(function () {
            top.hide();
            index++;
            if (index >= imagesArray.length) index = 0;
            top.attr('src', imagesArray[index]);
            top.fadeIn(400);
            bottom.fadeOut(800);
        }, 2000);
    }

    var imagesArray = [
            'images/slides/slide1.jpg',
            'images/slides/slide2.jpg',
            'images/slides/slide3.jpg',
            'images/slides/slide4.jpg',
            'images/slides/slide5.jpg'
        ],
        index = 1,
        top = $('#site-menu-background-container-top'),
        bottom = $('#site-menu-background-container-bottom');
    bottom.attr('src', imagesArray[index]);
    bottom.attr('width', $(window).width());
    top.attr('width', $(window).width());
    top.attr('height', $(window).height());
    bottom.attr('height', $(window).height());
    setInterval(changeImg, 5000);
});