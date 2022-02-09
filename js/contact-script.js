$(function () {
    var clipboard = new ClipboardJS('.btn');

    $('.con2 .box i.email1').on('mouseover', function () {
        $(this).hide().siblings('.con2 .box i.email2').show()
    })
    $('.con2 .box i.email2').on('mouseout', function () {
        $(this).hide().siblings('.con2 .box i.email1').show()
    })
    $('.con2 .box i.email2').on('click', function () {
        $('.cp1').text('복사완료!')
        setTimeout(function () {
            $('.cp1').text('복사하기')
        }, 1000)
    })

    $('.con2 .box i.discord').on('click', function () {
        $('.cp2').text('복사완료!')
        setTimeout(function () {
            $('.cp2').text('복사하기')
        }, 1000)
    })

    var delta = 150;
    var timer;

    $(window).on('resize', function () {
        clearTimeout(timer)
        timer = setTimeout(resizeDone(), delta);
    })

    function resizeDone() {
        var winwidth = $(window).width()
        if (winwidth <= 575) {
            $('.con1 img').finish().css({ left: '-820px', opacity: 0 })
            $('.con1 img').animate({ left: '-420px', opacity: 0.3 }, 1000)
            var top_of_element = $(".viewcheck").offset().top;
            var bottom_of_element = $(".viewcheck").offset().top; + $(".viewcheck").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // the element is visible, do something
                $('.con2 img').finish().css({ right: '-600px', opacity: 0 })
                $('.con2 img').animate({ right: '-200px', opacity: 0.3 }, 1000)
            } else {
                $('.con2 img').finish().css({ right: '-600px', opacity: 0 })
                f = true;
            }
        } else if (winwidth > 575) {
            $('.con1 img').finish().css({ left: '-620px', opacity: 0 })
            $('.con1 img').animate({ left: '-220px', opacity: 0.3 }, 1000)
            var top_of_element = $(".viewcheck").offset().top;
            var bottom_of_element = $(".viewcheck").offset().top; + $(".viewcheck").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // the element is visible, do something
                $('.con2 img').finish().css({ right: '-400px', opacity: 0 })
                $('.con2 img').animate({ right: '0px', opacity: 0.3 }, 1000)
            } else {
                $('.con2 img').finish().css({ right: '-400px', opacity: 0 })
                f = true;
            }
        }
    }

    var winwidth = $(window).width()
    if (winwidth <= 575) {
        $('.con1 img').finish().css({ left: '-820px', opacity: 0 })
        $('.con1 img').animate({ left: '-420px', opacity: 0.3 }, 1000)
        /* $('.con2 img').finish().css({ right: '-600px', opacity: 0 })
        $('.con2 img').animate({ right: '-200px', opacity: 0.3 }, 1000) */
    } else if (winwidth > 575) {
        $('.con1 img').finish().css({ left: '-620px', opacity: 0 })
        $('.con1 img').animate({ left: '-220px', opacity: 0.3 }, 1000)
        /* $('.con2 img').finish().css({ right: '-400px', opacity: 0 })
        $('.con2 img').animate({ right: '0px', opacity: 0.3 }, 1000) */
    }

    var f = true;

    $(window).on('scroll', function () {
        if (f) {
            var winwidth = $(window).width()
            if (winwidth <= 575) {
                var top_of_element = $(".viewcheck").offset().top;
                var bottom_of_element = $(".viewcheck").offset().top; + $(".viewcheck").outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                    // the element is visible, do something
                    $('.con2 img').finish().css({ right: '-600px', opacity: 0 })
                    $('.con2 img').animate({ right: '-200px', opacity: 0.3 }, 1000)
                    f = false;
                }
            } else if (winwidth > 575) {
                var top_of_element = $(".viewcheck").offset().top;
                var bottom_of_element = $(".viewcheck").offset().top; + $(".viewcheck").outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                    // the element is visible, do something
                    $('.con2 img').finish().css({ right: '-400px', opacity: 0 })
                    $('.con2 img').animate({ right: '0px', opacity: 0.3 }, 1000)
                    f = false;
                }
            }
        }
    })

    $(window).scroll(function () {
        var sc_top = $(window).scrollTop()
        if (sc_top > 1) {
            $('header').css({ 'background': '#222' })
        } else {
            $('header').css({ 'background': '#999' })
        }
    })

    if ($(window).scrollTop() > 1) {
        $('header').css({ 'background': '#222' })
    } else {
        $('header').css({ 'background': '#999' })
    }
})