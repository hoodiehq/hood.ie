$(function() {
    if(window.localStorage && window.localStorage['hasSeenIntro']){
        $('.animated-logo').remove();
    } else {
        $('.content, header').addClass('during-intro');
        setTimeout(function(){
            $('.animated-logo .animation').addClass('animate');
            setTimeout(function(){
                $('.animated-logo .animation').addClass('colorise');
            }, 3000);
            setTimeout(function(){
                $('.animated-logo .animation').addClass('slideUp');
            }, 5000);
            setTimeout(function(){
                $('.content, header').removeClass('during-intro');
            }, 5500);
            window.localStorage['hasSeenIntro'] = 'true';
        }, 500);
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
//    event.preventDefault();

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
            $('body').removeClass('mobile no_scroll');
            $('.nav').removeClass('is-active');
            $('.menu-button').removeClass('is-active');
            $('.hid').removeClass('is-fixed');
            $('header').removeClass('is-active');
        } else if (w > 1024) {
            $('body header').removeClass('is-active');
        }
    }

    // bind to navigation of functionality for responsive navigation
    // just fires when width of page is below 1024.
    $('.menu-button').on('click', function(event){
        event.preventDefault();
        if ($('body').hasClass('mobile')) {
            $('header, header section.nav, .menu-button').toggleClass('is-active');
            $('header section.hid').toggleClass('is-fixed');
            // Lock scrolling if the mobile fullscreen nav is on
            if($('header section.hid').hasClass('is-fixed')){
                // iOS Safari
                document.ontouchmove = function(e){ e.preventDefault(); }
                window.setTimeout(function(){$('body').addClass('no_scroll');}, 200); // Firefox hack. Hides scrollbar as soon as menu animation is done
            } else {
                // iOS Safari
                document.ontouchmove = function(e){ return true; }
                window.setTimeout(function(){$('body').removeClass('no_scroll');}, 10); // allow animations to start before removing class (Firefox)
            }
        }
    });

    var previousScroll = 0, // previous scroll position
        menuOffset = 102, // height of menu (once scroll passed it, menu is hidden)
        detachPoint = 650, // point of detach (after scroll passed it, menu is fixed)
        hideShowOffset = 6; // scrolling value after which triggers hide/show menu
    // on scroll hide/show menu
    $(window).scroll(function() {
        if (!$('header').hasClass('expanded')) {
            var currentScroll = $(this).scrollTop(), // gets current scroll position
            scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling
            // if scrolled past menu
            if (currentScroll > menuOffset) {
                // if scrolled past detach point add class to fix menu
                if (currentScroll > detachPoint) {
                    if (!$('header').hasClass('detached'))
                        $('header').addClass('detached');
                }
                // if scrolling faster than hideShowOffset hide/show menu
                if (scrollDifference >= hideShowOffset) {
                    if (currentScroll > previousScroll) {
                        // scrolling down; hide menu
                        if (!$('header').hasClass('invisible'))
                            $('header').addClass('invisible');
                    } else {
                        // scrolling up; show menu
                        if ($('header').hasClass('invisible'))
                            $('header').removeClass('invisible');
                    }
                }
            } else {
                // only remove “detached” class if user is at the top of document (menu jump fix)
                if (currentScroll <= 0){
                    $('header').removeClass();
                }
            }
            // if user is at the bottom of document show menu
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                $('header').removeClass('invisible');
            }
            // replace previous scroll position with new one
            previousScroll = currentScroll;
        }
    });
});
