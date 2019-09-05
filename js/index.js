$(function () {
    //顶部-------------FLLOW us动画----------------------------------->
    $('.header_share').mouseenter(function () {
        $('.header_share .subMenu_ul').stop().slideDown();
    }).mouseleave(function () {
        $('.header_share .subMenu_ul').stop().slideUp();
    });
    $('.wc_dh').mouseenter(function () {
        $('.qrcode_img img').fadeIn();
    }).mouseleave(function () {
        $('.qrcode_img img').fadeOut();
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

})