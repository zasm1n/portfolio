$(function () {
    $('.background .fa-angle-down').click(function () {
        var background = $('.latest').offset().top
        var headerH = $('header').height()
        $('html, body').animate({ scrollTop: (background - headerH) }, 500)
    })

    $(window).scroll(function () {
        var sc_top = $(window).scrollTop()
        if (sc_top > 1) {
            $('header').css({ 'background': '#222' })
        } else {
            $('header').css({ 'background': 'transparent' })
        }
    })

    if ($(window).scrollTop() > 1) {
        $('header').css({ 'background': '#222' })
    } else {
        $('header').css({ 'background': 'transparent' })
    }

    $('.con section div .img_box a:nth-of-type(1)').on('mouseover',function(){
        $(this).stop().animate({opacity:1},300)
    })
    $('.con section div .img_box a:nth-of-type(1)').on('mouseout',function(){
        $(this).stop().animate({opacity:0},300)
    })
})