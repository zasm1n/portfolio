$(function () {
    $('div.tit section.con > i').click(function () {
        $(this).removeClass('on').siblings('i').addClass('on')
        if ($(this).parent().parent('div').hasClass('fromis')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wf').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wf').slideDown()
            }
        } else if ($(this).parent().parent('div').hasClass('keyboard')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wk').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wk').slideDown()
            }
        } else if ($(this).parent().parent('div').hasClass('library')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wl').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wl').slideDown()
            }
        } else if ($(this).parent().parent('div').hasClass('belle')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wb').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wb').slideDown()
            }
        }
    })

    var loce = $(location).attr('hash');
    if (loce == '#fromis') {
        $('div.wrap').css({ display: 'none' })
        var background = $('div.tf').offset().top
        var headerH = $('header').height()
        $('html, body').animate({ scrollTop: (background - headerH) }, 500)
        $('div.tf section.con > .fa-angle-down').removeClass('on').siblings('i').addClass('on')
        $('div.tk section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.tl section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.tb section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.wf').slideDown()
    } else if (loce == '#keyboard') {
        $('div.wrap').css({ display: 'none' })
        var background = $('div.tk').offset().top
        var headerH = $('header').height()
        $('html, body').animate({ scrollTop: (background - headerH) }, 500)
        $('div.tk section.con > .fa-angle-down').removeClass('on').siblings('i').addClass('on')
        $('div.tf section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.tl section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.tb section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.wk').slideDown()
    }

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