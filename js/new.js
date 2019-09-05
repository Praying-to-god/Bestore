$(function () {
  //鼠标进入事件
  $('.new-item-box').on("mouseenter", function () {
    var index = $(this).index();
    var num = $(this).parent().index();
    $('.new-tj').eq(num).find('.new-item-box a').eq(index).stop().css('z-index', 1);
    $('.new-tj').eq(num).find('.new-item-bg').eq(index).stop().animate({
      opacity: '1'
    });
    $('.new-tj').eq(num).find('.new-item-imgbox img').eq(index).stop().animate({
      width: '110%',
      height: '110%'
    });
    $('.new-tj').eq(num).find('.new-item-data').eq(index).css('color', '#fff');
    $('.new-tj').eq(num).find('.new-item-title').eq(index).css('color', '#fff');
  });
console.log($(window).width());


  //鼠标离开事件
  $('.new-item-box').on("mouseleave", function () {
    var index = $(this).index();
    var num = $(this).parent().index();
    $('.new-tj').eq(num).find('.new-item-bg').eq(index).stop().animate({
      opacity: '0'
    });
    $('.new-tj').eq(num).find('.new-item-data').eq(index).css('color', 'gray');
    $('.new-tj').eq(num).find('.new-item-title').eq(index).css('color', 'gray');
    $('.new-tj').eq(num).find('.new-item-imgbox img').eq(index).stop().animate({
      width: '100%',
      height: '100%'
    });
  });

  animate1();
  var see = document.getElementsByClassName("new-tj");
  var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
  window.onscroll = function () {
    var seeHeight = document.documentElement.clientHeight - 300;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(seeHeight, scrollTop)
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
          case n = 4:
            animate4()
            break
          case n = 5:
            animate5()
            break
          case n = 6:
            animate6()
            break
          case n = 7:
            animate7()
            break
          case n = 8:
            animate8()
            break
        }
      }
    }
  };
  
  function animate1() {
    $('.new-item-box a').eq(0).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(1).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(2).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(3).animate({
            opacity: '1'
          });
        })
      })
    })
  
  
  }
  
  function animate2() {
    $('.new-item-box a').eq(4).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(5).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(6).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(7).animate({
            opacity: '1'
          });
        })
      })
    })
  }
  
  function animate3() {
    $('.new-item-box a').eq(8).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(9).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(10).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(11).animate({
            opacity: '1'
          });
        })
      })
    })
  }
  
  function animate4() {
    $('.new-item-box a').eq(12).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(13).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(14).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(15).animate({
            opacity: '1'
          });
        })
      })
    })
  }
  
  function animate5() {
    $('.new-item-box a').eq(16).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(17).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(18).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(19).animate({
            opacity: '1'
          });
        })
      })
    })
  }
  
  function animate6() {
    $('.new-item-box a').eq(20).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(21).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(22).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(23).animate({
            opacity: '1'
          });
        })
      })
    })
  }
  
  function animate7() {
    $('.new-item-box a').eq(24).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(25).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(26).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(27).animate({
            opacity: '1'
          });
        })
      })
    })
  }
  
  function animate8() {
    $('.new-item-box a').eq(28).animate({
      opacity: '1'
    }, function () {
      $('.new-item-box a').eq(29).animate({
        opacity: '1'
      }, function () {
        $('.new-item-box a').eq(30).animate({
          opacity: '1'
        }, function () {
          $('.new-item-box a').eq(31).animate({
            opacity: '1'
          });
        })
      })
    })
  }

})

