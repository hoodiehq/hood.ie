$(function() {
    if(window.localStorage && window.localStorage['hasSeenIntro']){
        $('.animated-logo').remove();
    } else {
        $('.content').addClass('during-intro');
        setTimeout(function(){
            $('.animated-logo .animation').addClass('animate');
            setTimeout(function(){
                $('.animated-logo .animation').addClass('slideUp');
            }, 3000);
            setTimeout(function(){
                $('.content').removeClass('during-intro');
            }, 3500);
            window.localStorage['hasSeenIntro'] = 'true';
        }, 2500);
    }
/*
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

// 1024 - x
    });*/

    console.log(window.innerWidth);

    $('header').on('click', function(eve){
        console.log(eve.target);

        if (eve.target == 'a') {
            console.log('LINK!');
        } else {
            $('header section.nav').toggleClass('is-active');
        }
    });

});
