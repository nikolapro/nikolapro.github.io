$(function () {
    function changeImg() {
        bottom.css('background-image', 'url("' + imagesArray[index] + '")');
        setTimeout(function () {
            top.hide();
            index++;
            if (index >= imagesArray.length) index = 0;
            top.css('background-image', 'url("' + imagesArray[index] + '")');
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
    bottom.css('background-image', 'url("' + imagesArray[index] + '")');
    setInterval(changeImg, 5000);
});
