$(function () {
    //顶部-------------FLLOW us动画----------------------------------->
    $('.header_share').mouseenter(function () {
        $('.header_share .subMenu_ul').stop().slideDown();
    }).mouseleave(function () {
        $('.header_share .subMenu_ul').stop().slideUp();
    });
    $('.wc_dh').mouseenter(function () {
        $('.qrcode_img img').stop().fadeIn();
    }).mouseleave(function () {
        $('.qrcode_img img').stop().fadeOut();
    });
    //顶部-------------中部导航动画----------------------------------->

    $('.menu_item').mouseenter(function () {
        num = $(this).index();
        $('.menu_item').eq(num).find('ul').stop().fadeIn();
        $('.menu_item').eq(num).find('img').stop().fadeIn();

    }).mouseleave(function () {
        $('.menu_item').find('ul').stop().fadeOut();
        $('.menu_item').eq(num).find('img').stop().fadeOut();
    });

    //page1 轮播图--------------------------------------------------->
    var mySwiper = new Swiper('.myswiper1', {
        // 轮播图的方向，也可以是vertical方向
        direction: 'horizontal',
        // 自动播放时间
        autoplay: true,
        // 播放的速度
        loop: true,
    });

    //mainpage2 动画效果--------------------------------------------------->

    var page2_dh = function () {
    // 左侧部分
    $('.ibrand_red1').css('display',"block").addClass('animated slideInLeft');
    $('.ibrand_link').addClass('animated slideInLeft');
    $('.img-box1 img').css('display',"block").addClass('animated slideInLeft');
    $('.ibrand-slogan1').children().eq(0).addClass('animated fadeInRight');
    $('.ibrand-slogan1').children().eq(1).addClass('animated fadeInRight');
    $('.ibrand-slogan1').children().eq(2).addClass('animated fadeInRight');
    $('.ibrand-top1').find('h2').addClass('animated fadeInUp');
    $('.ibrand-top1').find('p').addClass('animated fadeInUp');
    //图片放大效果
    $('.img-box1 img').mouseenter(function () {
            //图片放大效果
            var $width = $(this).width();
            var nwidth = $width * 1.05;
            var $height = $(this).height();
            var nheight = $height * 1.05;
            var nleft = parseInt($(this).css('left')) - (nwidth - $width) / 2;
            var ntop = parseInt($(this).css('top')) - (nheight - $height) / 2;
            // console.log(ntop)
            $('.img-box1 img').stop().animate({
                'width': nwidth,
                'height': nheight,
                'left': nleft,
                'top': ntop
            }, 1000);
        })
        .mouseleave(function () {
            $('.img-box1 img').stop().animate({
                'width': 440,
                'height': 386.21,
                'left': 0,
                'top': 0
            }, 1000);
        })
    // 右侧部分
    $('.ibrand_red2').css('display',"block").addClass('animated slideInRight');
    $('.ibrand_link2').addClass('animated slideInRight');
    $('.img-box2 img').css('display',"block").addClass('animated slideInRight');
    $('.ibrand-slogan2').children().eq(0).addClass('animated fadeInLeft');
    $('.ibrand-slogan2').children().eq(1).addClass('animated fadeInLeft');
    $('.ibrand-slogan2').children().eq(2).addClass('animated fadeInLeft');
    $('.ibrand-top2').find('h2').addClass('animated fadeInUp');
    $('.ibrand-top2').find('p').addClass('animated fadeInUp');
    //图片放大效果
    $('.img-box2 img').mouseenter(function () {
            //图片放大效果
            var $width = $(this).width();
            var nwidth = $width * 1.05;
            var $height = $(this).height();
            var nheight = $height * 1.05;
            var nleft = parseInt($(this).css('left')) - (nwidth - $width) / 2;
            var ntop = parseInt($(this).css('top')) - (nheight - $height) / 2;
            $('.img-box2 img').stop().animate({
                'width': nwidth,
                'height': nheight,
                'left': nleft,
                'top': ntop
            }, 1000);
        })
        .mouseleave(function () {
            $('.img-box2 img').stop().animate({
                'width': 440,
                'height': 386.21,
                'left': 0,
                'top': 0
            }, 1000);
        })
    }

    // page3轮播图--------------------------------------------------->
    var mySwiper = new Swiper('#myswiper2', {
        // 轮播图的方向，也可以是vertical方向
        direction: 'horizontal',
        // 自动播放时间
        // autoplay: true,
        // 播放的速度
        loop: true,
        // observeSlideChildren:true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //mainpage3 零食王国鼠标移入事件动画--------------------------------------------------->
    $('.snack_listbox').mouseenter(function () {
            num2 = $(this).index();
            // num3 = $(this).parent().attr('data-swiper-slide-index');真实索引
            num3 = $(this).parent().index();
            // console.log(num2 + '***span');
            // console.log(num3 + '###div');
            $('.snack_item_img').eq(num3).find('.snack_listbox').eq(num2).find('span').stop().animate({
                'opacity': "1"
            })
            //图片放大效果
            var $width = $('.snack_item_img').eq(num3).find('.snack_listbox').eq(num2).find('img').width();
            var nwidth = $width * 1.05;
            var $height = $('.snack_item_img').eq(num3).find('.snack_listbox').eq(num2).find('img').height();
            var nheight = $height * 1.05;
            var nleft = parseInt($('.snack_item_img').eq(num3).find('.snack_listbox').eq(num2).find('img').css('left')) - (nwidth - $width) / 2;
            var ntop = parseInt($('.snack_item_img').eq(num3).find('.snack_listbox').eq(num2).find('img').css('top')) - (nheight - $height) / 2;
            $('.snack_item_img').eq(num3).find('.snack_listbox').eq(num2).find('img').stop().animate({
                'width': nwidth,
                'height': nheight,
                'left': nleft,
                'top': ntop
            });
        })
        .mouseleave(function () {
            $('.active_bg').stop().animate({
                'opacity': "0"
            });
            $('.snack_item_img').eq(num3).find('.snack_listbox').eq(num2).find('img').stop().animate({
                'width': '100%',
                'height': 371.41,
                'left': 0,
                'top': 0,
            });
        })

    // page3 轮播图动态加载--------------------------------------------------->
    var dtjz2 = function (name) {
        $('.fp_tablecell').css('display', 'block').addClass('animated fadeInUp');
        $(name).eq(0).children().fadeIn(500, function () {
            $(name).eq(1).children().fadeIn(500, function () {
                $(name).eq(2).children().fadeIn(500, function () {
                    $(name).eq(3).children().fadeIn(500);
                    // console.log('page3')
                    $('.snack_listbox').find('p').removeClass('snack_dh');
                })
            })
        })
    };

    //mainpage4动画---鼠标移入事件--------------------------------------------------->
    $('.list_join li').mouseenter(function () {
        num = $(this).index();
        $('.list_join li').eq(num).find('.join_wrap').children().css('color', 'white');
        $('.list_join li').eq(num).find('.join_item').css('background', 'white');
        $('.list_join li').eq(num).find('.join_item_bg').stop().fadeIn();
    }).mouseleave(function () {
        $('.list_join li').find('.join_wrap').children().css('color', '#808080');
        $('.list_join li').eq(num).find('.join_item').css('background', '#eee');
        $('.list_join li').eq(num).find('.join_item_bg').stop().fadeOut();
    })
    //mainpage4动画---动态加载--------------------------------------------------->

    var dtjz1 = function (name) {
        $(name).eq(0).fadeIn(300, function () {
            $(name).eq(1).fadeIn(300, function () {
                $(name).eq(2).fadeIn(300, function () {
                    $(name).eq(3).fadeIn(300)
                })
            })
        })
    }

    //换页------------------------------------------------------------>
    $('#fullpage').fullpage({
        navigation: 'true',
        afterLoad: function (anchorLink, index) {
            if (index.index == 3) {
                dtjz1('.list_join li');
                $('#page4').css('height','calc(100vh + 75px)')
            }else if(index.index == 2){
                dtjz2('.snack_dhw');
            }else if(index.index == 1){
                page2_dh();
            }
        }
    });
    $('.gotop').click(function () {
        $.fn.fullpage.moveTo(1);
    })
console.log()
// $(window).height()  706
//$(window).width()   1536

})