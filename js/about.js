$(function(){
	//封装轮播动画

	function animate(ele,attr,target,timeSpeed){
		clearInterval(ele.timer);
		ele.timer = setInterval(function(){
			var speed = (target - parseInt(getStyle(ele,attr)))/10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(parseInt(getStyle(ele,attr)) == target){
				clearInterval(ele.timer);
			}else{
				ele.style[attr] = parseInt(getStyle(ele,attr)) + speed + "px";
			}
		},timeSpeed);
	}
	function getStyle(ele,attr){
		return window.getComputedStyle ? window.getComputedStyle(ele,null)[attr] : ele.currentStyle[attr];
	};
	
	var box = document.getElementById("slick-history");
	var index = 0;
	
	
	// 右按钮事件
	$('.toRight').click  (function() {
		if (index == 3) {//6
			index = -1; 
			box.style.left = 0 + "px"; 
		}
		index++; 
		animate(box, "left", -1272 * index, 10); 
	});
	//左按钮事件
	$('.toLeft').click(function() {
		if (index == 0) {
			index = 4; 
			box.style.left = -4*1272 + "px"; 
		}
		index--; 
		animate(box, "left", -1272 * index, 10); 
	});

	
	//鼠标移入事件
	$('.history-item').hover(
		function(){
		
			$(this).children(0).removeClass('contentSty').addClass("new-liContent");
			$(this).find('h3').removeClass('h3Sty').addClass("new-h3Sty").css('color','#e1251b');
			$(this).children(0).children(0).children(1).removeClass('img-box').addClass("new-img-box");
		},
		function(){
			$('.liContent').removeClass('new-liContent ').addClass("contentSty");
			$(this).find('h3').removeClass('new-h3Sty').addClass("h3Sty").css('color','#b2b2b2');
			$(this).children(0).children(0).children(1).removeClass('new-img-box').addClass("img-box");
		}
	);

	//点击li的内容 显示隐藏内容
	$('.liContent').toggle(function (){
		//遍历清除其他
		$('.liContent').each(function(index,item){
			$(item).find('.history-item__desc').css('height',45).next().children(0).addClass('js-history-plus')
			.closest('.liContent').find('.history-item__circle ').css( 'background','#b2b2b2');	
		});
		$(this).find('.history-item__desc').css('height','auto').next().children(0).removeClass('js-history-plus')
		.closest('.liContent').find('.history-item__circle ').css( 'background','url(../img/bg_02.svg) #e1251b center no-repeat').css('background-size','60% auto');	
	},function (){
		$(this).find('.history-item__desc').css('height',45).next().children(0).addClass('js-history-plus')
		.closest('.liContent').find('.history-item__circle ').css( 'background','#b2b2b2');	
	});


	//拖拽 轮播图滚动
	$.fn.extend({
		drag: function (){
			$(this).mousedown(function (e){
				var toLeft = e.clientX - $(this).offset().left;
				var $this = $(this);
				$(document).bind('mousemove',function (e){
					var left = e.clientX - toLeft;
					if(left > 0 || left < -3180){
						return;
					}
					$this.css({
						left: left,
					});
				})
				$(document).mouseup(function (){
					$(document).unbind('mousemove');
				})
				return false;
			})
		},
	});
	$('.slick-history').drag();
	

	//屏幕滚动到当前距离执行动画
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
	});
	$('.introduceTitle-anima').anima('animated fadeInLeft');
	$('.about1Right-anima img').anima('animated fadeInRight');
	$('.introduceBody-anima').anima('animated fadeInUpSmall',0.2);
	$('.intro-header').anima('animated fadeInLeft');
	

	$('.history-item').each(function(index,item){
		$(item).anima('animated fadeInUpSmall',0.4*index);
	});


	//about2
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
	

		$('.about2-intro-title').anima('animated fadeInLeft');
		$('.phi-item-animated').anima('animated fadeInUpSmall',0.4);
	
	
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

		//about1-ajax
		$('.history-ajax').on('click','h3',function(){
			var code = $(this).parent().attr('code');
			if(localStorage.getItem('years')){
				var codeArr = JSON.parse(localStorage.getItem('years')).code;
			}else{
				var codeArr = [];
			}
			codeArr.push(code);
			var noRepeat = new Set(codeArr);  //得到对象
			var noRepeatArr =  Array.from(noRepeat);  //转为数组
			var jsonStr = JSON.stringify({"code":noRepeatArr});
			localStorage.setItem('years',jsonStr);
			alert('关注成功');
		});



})