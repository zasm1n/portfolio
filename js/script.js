$(function () {
    $('header .h_left .fa-bars').click(function () {
        $('header').hide()
        $('.menu').animate({ left: '0px' }, 300)
        $('.md-background').fadeIn(300)
    })

    $('.menu .fa-x').click(function () {
        $('header').show()
        $('.menu').animate({ left: '-250px' }, 300)
        $('.md-background').fadeOut(300)
    })
    $('.md-background').click(function () {
        $('header').show()
        $('.menu').animate({ left: '-250px' }, 300)
        $('.md-background').fadeOut(300)
    })

    $('.top_btn').hide()

    $('.top_btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    })

    $(window).scroll(function () {
        var sc_top = $(window).scrollTop()
        if (sc_top > 1) {
            $('.top_btn').fadeIn('fast')
        } else {
            $('.top_btn').fadeOut('fast')
        }
    })
})