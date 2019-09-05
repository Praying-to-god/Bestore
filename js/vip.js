$(function() {
    $('.vip-footer-ul li').on("mouseenter", function() {
        var index = $(this).index();
        $('.vip-footer-item-bg').eq(index).stop().animate({
            opacity: '1'
        }, 100);
        $('.vip-footer-item').eq(index).css('color', '#fff').find('span').css('color', '#fff');
    })
    $('.vip-footer-ul li').on("mouseleave", function() {
        var index = $(this).index();
        $('.vip-footer-item-bg').eq(index).stop().animate({
            opacity: '0'
        });
        $('.vip-footer-item').eq(index).css('color', 'gray').find('span').css('color', '#808080');
    })


    animate1();

    var see = document.getElementsByClassName("see");
    var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
    window.onscroll = function() {
        var seeHeight = document.documentElement.clientHeight-200;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log(seeHeight,scrollTop)
        for (var i = n; i < see.length; i++) {
            if (see[i].offsetTop < seeHeight + scrollTop) {
                n = i + 1;
                switch (n) {
                    case n = 1:
                        animate1()
                        break
                    case n = 2:
                        animate2()
                        break
                    case n = 3:
                        animate3()
                        break
                }
            }
        }
    };
    
    function animate1() {
        //头部
        $('.vip-head-box-one').animate({
            opacity: '1',
            top: '100px'
        });
        $('.vip-head-list li').eq(0).animate({
            opacity: '1',
            top: '270px'
        }, function() {
            $('.vip-head-list li').eq(1).animate({
                opacity: '1',
                top: '270px'
            }, function() {
                $('.vip-head-list li').eq(2).animate({
                    opacity: '1',
                    top: '270px'
                }, function() {})
            })
        })
    }
    
    function animate2() {
        //中间
        $('.vip-head-beizhu').animate({
            opacity: '1',
            top: '700px'
        });
    
        $('.vip-head-box-two').animate({
            opacity: '1',
            top: '100px'
        }, 1000);
        $('.vip-mid-box').animate({
            opacity: '1',
            top: '300px'
        }, 1000);
        $('.vip-mid-tip').animate({
            opacity: '1',
            top: '980px'
        }, 1000);
    }
    
    function animate3() {
        //底部
        $('.vip-head-box-three').animate({
            opacity: '1',
            top: '100px'
        }, 1000);
        $('.vip-footer-title').animate({
            opacity: '1',
            left: '60px'
        }, 1000);
        $('.vip-footer-title').animate({
            opacity: '1',
            left: '60px'
        }, 1000);
        $('.vip-rule-item').eq(0).animate({
            opacity: '1',
            top: '320px'
        }, function() {
            $('.vip-rule-item').eq(1).animate({
                opacity: '1',
                top: '320px'
            }, function() {
                $('.vip-rule-item').eq(2).animate({
                    opacity: '1',
                    top: '320px'
                }, function() {
                    $('.vip-rule-item').eq(3).animate({
                        opacity: '1',
                        top: '320px'
                    }, function() {})
                })
            })
        })
    
        $('.vip-footer-title-two').animate({
            opacity: '1',
            left: '60px'
        }, 1000);
        $('.vip-footer-ul li').eq(0).animate({
            opacity: '1',
            top: '450px'
        }, function() {
            $('.vip-footer-ul li').eq(1).animate({
                opacity: '1',
                top: '450px'
            }, function() {
                $('.vip-footer-ul li').eq(2).animate({
                    opacity: '1',
                    top: '450px'
                }, function() {
    
                })
            })
        })
        $('.vip-footer-tip').animate({
            opacity: '1',
            top: '950px'
        }, 1000)
    }
})

