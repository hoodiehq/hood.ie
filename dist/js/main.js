$(function() {
//    $('#logo-animation').delay(5000).addClass('animate');

var header = $('header');
event.preventDefault();

    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".content").position();

        if (scroll > (topDist.top + 60)) {
            header.css({"position":"relative","top": scroll}).animate({'height':'20'}, 400).addClass('close');
        } else {
            header.css({"position":"static","top":"auto"}).removeClass('close');
        }


    });

    $('header').on('click', function(eve){
        if(header.hasClass('close')) {
            alert('Hello! Mach mich auf! Gruß, Navigation <3');
        }
    });

});
