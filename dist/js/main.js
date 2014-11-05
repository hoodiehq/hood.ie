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


/*
// @desc: shows responsive navigation below 1024px.
*/

    // caculate width of window on load and on resize
    // calls fcn to set mobile-class
    var w = window.innerWidth;
    checkMobileView(w);

    $(window).on('resize', function(){
        var w = window.innerWidth;
        checkMobileView(w);
    });

    function checkMobileView(w){
        if (w < 1024 && !$('body').hasClass('mobile')){
            $('body').addClass('mobile');
        } else if (w > 1024 && $('body').hasClass('mobile')) {
            $('body').removeClass('mobile');
        }

    }

    // bind to navigation of functionality for responsive navigation
    // just fires when width of page is below 1024.
    $('header').on('click', function(eve){

        if (eve.target == 'a') {
        } else {
            if ($('body').hasClass('mobile')) {
                $('header section.nav').toggleClass('is-active');
            }

        }
    });

});
