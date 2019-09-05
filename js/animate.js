$(function(){
    //移入移出变化
    $('.phi-item').hover(
        function () {
            $('.phi-item-bg').css('opacity',1);
            $('.phi-item-txt').css('color','#fff');
            $('.phi-item-img').addClass('animated pulse').css('animation-duration','2s');
        },
        function () {
            $('.phi-item-bg').css('opacity',0)
            $('.phi-item-txt').css('color','gray');
            $('.phi-item-img').removeClass('animated pulse');
        }
     );
     $('.phi-item2').hover(
        function () {
            $('.phi-item-bg2').css('opacity',1);
            $('.phi-item-txt2').css('color','#fff');
            $('.phi-item-img2').addClass('animated pulse').css('animation-duration','2s');
        },
        function () {
            $('.phi-item-bg2').css('opacity',0)
            $('.phi-item-txt2').css('color','gray');
            $('.phi-item-img2').removeClass('animated pulse');
        }
     );


    
    $('.philosophy-bottom ul li').on('mouseenter', function(){
        $(this).css({color:'#fff','z-index':100}).find('.phi-item__info').slideDown('fast').parent().find('.phi-item_bg').css('opacity',1);
    });
    $('.philosophy-bottom ul li').on('mouseleave', function(){
        $(this).css('z-index','10');
        $(this).css({color:'gray','z-index':10}).find('.phi-item__info').slideUp('fast').parent().find('.phi-item_bg').css('opacity',0);
    });


    //屏幕滚动到当前执行动画
    $.fn.extend({
        anima:function(animatedName,s){//要执行的动画名 延迟时间
            var $this = $(this);
            $(window).scroll(function(){
                var scroll_h = $(window).scrollTop()+$(window).height();
                var self_top = $this.offset().top;
                if( (scroll_h > self_top) &&  ( $(window).scrollTop() < self_top) ){
                    $this.addClass(animatedName).css('animation-delay',s+'s');
                }
            })
        }
    })
    $('.about2-intro-title').anima('animated fadeInLeft');
    $('.phi-item-animated').anima('animated fadeInUpSmall',0.2);


    $('.philosophy-bottom ul li').each(function(index,item){
		$(item).anima('animated fadeInUpSmall',0.2*index);
	});
    
    $('.intro-header').anima('animated fadeInLeft');
    $('.story-intro-01__txt p').anima('animated fadeInUpSmall',0.4);
    $('.story-img').anima('animated fadeInRight');

    $('.story-middle-left').anima('animated fadeInLeftSmall');
    $('.story-middle-right').anima('animated fadeInRightSmall');
    $('.story-dream-title').anima('animated fadeInUpSmall');
    $('.story-dream-intro').anima('animated fadeInUpSmall',0.25);

    $('.story-dream-title2').anima('animated fadeInUpSmall');
    $('.story-intr').anima('animated fadeInUpSmall',0.2);
    $('.story-bottom-right').anima('animated fadeInRightSmall');
   
   
  
})

