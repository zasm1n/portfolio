$(function () {
    $('div.tit section.con > i').click(function () {
        $(this).removeClass('on').siblings('i').addClass('on')
        if ($(this).parent().parent('div').hasClass('music')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wm').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wm').slideDown()
            }
        } else if ($(this).parent().parent('div').hasClass('car')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wc').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wc').slideDown()
            }
        } else if ($(this).parent().parent('div').hasClass('ani')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wa').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wa').slideDown()
            }
        } else if ($(this).parent().parent('div').hasClass('app')) {
            if ($(this).hasClass('fa-angle-up')) {
                $('div.wp').slideUp()
            } else {
                var background = $(this).parent().parent('div').offset().top
                var headerH = $('header').height()
                $('html, body').animate({ scrollTop: (background - headerH) }, 500)
                $('div.wp').slideDown()
            }
        }
    })

    var loce = $(location).attr('hash');
    if (loce == '#music') {
        $('div.wrap').css({ display: 'none' })
        var background = $('div.tm').offset().top
        var headerH = $('header').height()
        $('html, body').animate({ scrollTop: (background - headerH) }, 500)
        $('div.tm section.con > .fa-angle-down').removeClass('on').siblings('i').addClass('on')
        $('div.tc section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.ta section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.tp section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.wm').slideDown()
    } else if (loce == '#car') {
        $('div.wrap').css({ display: 'none' })
        var background = $('div.tc').offset().top
        var headerH = $('header').height()
        $('html, body').animate({ scrollTop: (background - headerH) }, 500)
        $('div.tc section.con > .fa-angle-down').removeClass('on').siblings('i').addClass('on')
        $('div.tm section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.ta section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.tp section.con > .fa-angle-up').removeClass('on').siblings('i').addClass('on')
        $('div.wc').slideDown()
    }

    $('.home').click(function () {
        $('div.wp .img_box img:nth-of-type(1)').addClass('on').siblings('img').removeClass('on')
        $('.latest').show()
        $('.chart').show()
        $('#latest').show()
        $('#chart').show()
    })
    $('.latest').click(function () {
        $('div.wp .img_box img:nth-of-type(3)').addClass('on').siblings('img').removeClass('on')
        $('.latest').hide()
        $('.chart').hide()
        $('#latest').hide()
        $('#chart').hide()
    })
    $('.chart').click(function () {
        $('div.wp .img_box img:nth-of-type(2)').addClass('on').siblings('img').removeClass('on')
        $('.latest').hide()
        $('.chart').hide()
        $('#latest').hide()
        $('#chart').hide()
    })
    $('.feed').click(function () {
        $('div.wp .img_box img:nth-of-type(4)').addClass('on').siblings('img').removeClass('on')
        $('.latest').hide()
        $('.chart').hide()
        $('#latest').hide()
        $('#chart').hide()
    })
    $('.foru').click(function () {
        $('div.wp .img_box img:nth-of-type(5)').addClass('on').siblings('img').removeClass('on')
        $('.latest').hide()
        $('.chart').hide()
        $('#latest').hide()
        $('#chart').hide()
    })
    $('.search').click(function () {
        $('div.wp .img_box img:nth-of-type(6)').addClass('on').siblings('img').removeClass('on')
        $('.latest').hide()
        $('.chart').hide()
        $('#latest').hide()
        $('#chart').hide()
    })
    $('.library').click(function () {
        $('div.wp .img_box img:nth-of-type(7)').addClass('on').siblings('img').removeClass('on')
        $('.latest').hide()
        $('.chart').hide()
        $('#latest').hide()
        $('#chart').hide()
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



    var elem = document.getElementById("app_view");
    $('div.wp .img_box .fsbtnwrap').css({ display: 'none' })

    $('div.app .img_box img').click(openFullscreen)

    function openFullscreen() {
        if ($(window).width() >= 540) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { /* Safari */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE11 */
                elem.msRequestFullscreen();
            }
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    var cFs = true;

    $(window).resize(function () {
        if (cFs) {
            if ($(window).width() < 540) {
                closeFullscreen()
                cFs = false;
            }
        }
        if ($(this).width() >= 540) {
            cFs = true;
        }

        if (document.fullscreenElement) {
            $('div.app .img_box img').css({ height: 100 + 'vh', width: 'auto', border: 0 })
            $('div.wp .img_box .fsbtnwrap').css({ display: 'block' })
            $('div.wp .img_box .nsbtn').css({ display: 'none' })
            $('div.wp .img_box p').css({ display: 'none' })
            return true;
        } else {
            if ($(this).width() > 900) {
                $('div.app .img_box img').css({ height: 'auto', width: '80%', border: '2px solid #81662c' })
            } else {
                $('div.app .img_box img').css({ height: 'auto', width: '90%', margin: '5% 0', border: '2px solid #81662c' })
            }
            $('div.wp .img_box .fsbtnwrap').css({ display: 'none' })
            $('div.wp .img_box .nsbtn').css({ display: 'block' })
            $('div.wp .img_box p').css({ display: 'block' })
            return false;
        }
    });

    $('#home').click(function () {
        $('div.wp .img_box img:nth-of-type(1)').addClass('on').siblings('img').removeClass('on')
        $('#latest').show()
        $('#chart').show()
    })
    $('#latest').click(function () {
        $('div.wp .img_box img:nth-of-type(3)').addClass('on').siblings('img').removeClass('on')
        $('#latest').hide()
        $('#chart').hide()
    })
    $('#chart').click(function () {
        $('div.wp .img_box img:nth-of-type(2)').addClass('on').siblings('img').removeClass('on')
        $('#latest').hide()
        $('#chart').hide()
    })
    $('#feed').click(function () {
        $('div.wp .img_box img:nth-of-type(4)').addClass('on').siblings('img').removeClass('on')
        $('#latest').hide()
        $('#chart').hide()
    })
    $('#foru').click(function () {
        $('div.wp .img_box img:nth-of-type(5)').addClass('on').siblings('img').removeClass('on')
        $('#latest').hide()
        $('#chart').hide()
    })
    $('#search').click(function () {
        $('div.wp .img_box img:nth-of-type(6)').addClass('on').siblings('img').removeClass('on')
        $('#latest').hide()
        $('#chart').hide()
    })
    $('#library').click(function () {
        $('div.wp .img_box img:nth-of-type(7)').addClass('on').siblings('img').removeClass('on')
        $('#latest').hide()
        $('#chart').hide()
    })
})