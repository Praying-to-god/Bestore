$(function(){
var num=0;
    $.ajax({
        url:"../data/nuts.json",
        type:"get",
        cache:false,
        dataType:"json",
        success:function(data){
            var results="";
            $.each(data,function(idex,item){
                results +=`<div class="productTitle"><a href=""><img src="${item.imgurl}" alt="${item.imgalt}"></a><p>${item.name}</p></div>`
            })
            if(data.length>4){
                results +=`<div class="productTitle"><a href=""><img src="${data[0].imgurl}" alt="${data[0].imgalt}"></a><p>${data[0].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[1].imgurl}" alt="${data[1].imgalt}"></a><p>${data[1].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[2].imgurl}" alt="${data[2].imgalt}"></a><p>${data[2].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[3].imgurl}" alt="${data[3].imgalt}"></a><p>${data[3].name}</p></div>`
            }
            $(".NutsProduct").html(results);
            if($(".NutsProduct div").length>=5){
                slid($(".NutsProduct"),1000);
                }
        }
    });

    $.ajax({
        url:"../data/seafood.json",
        type:"get",
        cache:false,
        dataType:"json",
        success:function(data){
            var results="";
            $.each(data,function(idex,item){
                results +=`<div class="productTitle"><a href=""><img src="${item.imgurl}" alt="${item.imgalt}"></a><p>${item.name}</p></div>`
            })
            if(data.length>4){
                results +=`<div class="productTitle"><a href=""><img src="${data[0].imgurl}" alt="${data[0].imgalt}"></a><p>${data[0].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[1].imgurl}" alt="${data[1].imgalt}"></a><p>${data[1].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[2].imgurl}" alt="${data[2].imgalt}"></a><p>${data[2].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[3].imgurl}" alt="${data[3].imgalt}"></a><p>${data[3].name}</p></div>`
            }
            $(".SeafoodProduct").html(results);
            if($(".SeafoodProduct div").length>=5){
                slid($(".SeafoodProduct"),1000);
            }
        }
    });

    $.ajax({
        url:"../data/meat.json",
        type:"get",
        cache:false,
        dataType:"json",
        success:function(data){
            var results="";
            $.each(data,function(idex,item){
                results +=`<div class="productTitle"><a href=""><img src="${item.imgurl}" alt="${item.imgalt}"></a><p>${item.name}</p></div>`
            })
            if(data.length>4){
                results +=`<div class="productTitle"><a href=""><img src="${data[0].imgurl}" alt="${data[0].imgalt}"></a><p>${data[0].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[1].imgurl}" alt="${data[1].imgalt}"></a><p>${data[1].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[2].imgurl}" alt="${data[2].imgalt}"></a><p>${data[2].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[3].imgurl}" alt="${data[3].imgalt}"></a><p>${data[3].name}</p></div>`
            }
            $(".MeatProduct").html(results);
            if($(".MeatProduct div").length>=5){
                slid($(".MeatProduct"),1000);
            }
        }
    });

    $.ajax({
        url:"../data/roasted.json",
        type:"get",
        cache:false,
        dataType:"json",
        success:function(data){
            var results="";
            $.each(data,function(idex,item){
                results +=`<div class="productTitle"><a href=""><img src="${item.imgurl}" alt="${item.imgalt}"></a><p>${item.name}</p></div>`
            })
            if(data.length>4){
                results +=`<div class="productTitle"><a href=""><img src="${data[0].imgurl}" alt="${data[0].imgalt}"></a><p>${data[0].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[1].imgurl}" alt="${data[1].imgalt}"></a><p>${data[1].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[2].imgurl}" alt="${data[2].imgalt}"></a><p>${data[2].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[3].imgurl}" alt="${data[3].imgalt}"></a><p>${data[3].name}</p></div>`
            }
            $(".RoastedProduct").html(results);
            if($(".RoastedProduct div").length>=5){
                slid($(".RoastedProduct"),1000);
            }
        }
    });

    $.ajax({
        url:"../data/red.json",
        type:"get",
        cache:false,
        dataType:"json",
        success:function(data){
            var results="";
            $.each(data,function(idex,item){
                results +=`<div class="productTitle"><a href=""><img src="${item.imgurl}" alt="${item.imgalt}"></a><p>${item.name}</p></div>`
            })
            if(data.length>4){
                results +=`<div class="productTitle"><a href=""><img src="${data[0].imgurl}" alt="${data[0].imgalt}"></a><p>${data[0].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[1].imgurl}" alt="${data[1].imgalt}"></a><p>${data[1].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[2].imgurl}" alt="${data[2].imgalt}"></a><p>${data[2].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[3].imgurl}" alt="${data[3].imgalt}"></a><p>${data[3].name}</p></div>`
            }
            $(".RedProduct").html(results);     
            if($(".RedProduct div").length>=5){
            slid($(".RedProduct"),1000);
        }
        }
    });

    $.ajax({
        url:"../data/preserved.json",
        type:"get",
        cache:false,
        dataType:"json",
        success:function(data){
            var results="";
            $.each(data,function(idex,item){
                results +=`<div class="productTitle"><a href=""><img src="${item.imgurl}" alt="${item.imgalt}"></a><p>${item.name}</p></div>`
            })
            if(data.length>4){
                results +=`<div class="productTitle"><a href=""><img src="${data[0].imgurl}" alt="${data[0].imgalt}"></a><p>${data[0].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[1].imgurl}" alt="${data[1].imgalt}"></a><p>${data[1].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[2].imgurl}" alt="${data[2].imgalt}"></a><p>${data[2].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[3].imgurl}" alt="${data[3].imgalt}"></a><p>${data[3].name}</p></div>`
            }
            $(".PreservedProduct").html(results);
            if($(".PreservedProduct div").length>=5){
                slid($(".PreservedProduct"),1000);
            }
        }
    });


    $.ajax({
        url:"../data/instant.json",
        type:"get",
        cache:false,
        dataType:"json",
        success:function(data){
            var results="";
            $.each(data,function(idex,item){
                results +=`<div class="productTitle"><a href=""><img src="${item.imgurl}" alt="${item.imgalt}"></a><p>${item.name}</p></div>`
            })
            if(data.length>4){
                results +=`<div class="productTitle"><a href=""><img src="${data[0].imgurl}" alt="${data[0].imgalt}"></a><p>${data[0].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[1].imgurl}" alt="${data[1].imgalt}"></a><p>${data[1].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[2].imgurl}" alt="${data[2].imgalt}"></a><p>${data[2].name}</p></div>`
                results +=`<div class="productTitle"><a href=""><img src="${data[3].imgurl}" alt="${data[3].imgalt}"></a><p>${data[3].name}</p></div>`
            }
            $(".InstantProduct").html(results);
            if($(".InstantProduct div").length>=5){
                slid($(".InstantProduct"),1000);
            }    
        }
    });


console.log(document.body.offsetWidth);
$(".selected1").eq(num).css("color","#e1251b");
$('body').mousewheel(function(event, delta) {
var dir = delta > 0 ? 'Up' : 'Down';
if (dir == 'Up') {
    console.log('向上滚动');
    num--;
    if(num<=0){
        num=0;
        // $(".selected1").css("display","none");
        // $(".selected2").css("display","none");
        // $(".selected1").eq(num).css("display","block");
        $(".selected1").eq(num).css("color","#e1251b");
        $(".selected2").eq(num+1).stop(true).animate({
            top:500
        },500);
        $(".selected1").eq(num+1).css("color","#80807e");
    }else{
        // $(".selected1").css("display","none");
        // $(".selected2").css("display","none");
        $(".selected2").eq(num).stop(true).animate({
            top:180
        },500);
        $(".selected2").eq(num+1).stop(true).animate({
            top:500
        },500);
        $(".selected1").eq(num+1).css("color","#80807e");
        $(".selected1").eq(num).css("color","#e1251b");
    }
} else {
    console.log('向下滚动');
    num++;
    if(num>6){
        num=6;
        // $(".selected1").css("display","none");
        // $(".selected2").css("display","none");
        $(".selected2").eq(num).stop(true).animate({
            top:180
        },500);
        $(".selected2").eq(num-1).stop(true).animate({
            top:90
        },500);
        $(".selected1").eq(num).css("color","#e1251b");
        $(".selected1").eq(num-1).css("color","#80807e");
    }else{
        // $(".selected1").css("display","none");
        // $(".selected2").css("display","none");
        $(".selected2").eq(num).stop(true).animate({
            top:180
        },500);
        $(".selected2").eq(num-1).stop(true).animate({
            top:90
        },500);
        $(".selected1").eq(num).css("color","#e1251b");
        $(".selected1").eq(num-1).css("color","#80807e");
    }
}
return false;
});

//     var nutstimer=setInterval(nutsplayGame,2000);
//     var nutsnum=$(".NutsProduct div").length-5;
//     var nutsIndex=0;
//     function nutsplayGame(){
//         if(nutsIndex==nutsnum){
//             nutsIndex=1;
//             $(".NutsProduct").css("left",0);
//         }else{
//             nutsIndex++
//         }
//         $(".NutsProduct").animate({
//             left:-318*nutsIndex,
//         },1000);
//     }

//     $(".NutsProduct div img").mouseover(function(){
//         clearInterval(nutstimer);
//     });
//     $(".NutsProduct div img").mouseout(function(){
//         nutstimer=setInterval(nutsplayGame,2000);
//     });
//     $(".NutsProduct").mousedown(function(e){
//         e.preventDefault();
//         var mouseleft=e.clientX;
//         var thisleft=$(this).css("left");
//         var $this=$(this);
//         $(document).on("mousemove",function(e){
//             var left=e.clientX-mouseleft+parseInt(thisleft);
//                 $this.css("left",left+"px");
//         })

//         $(document).mouseup(function(){
//             console.log(parseInt(thisleft));
//             $(document).off("mousemove");
//     });

// });



function slid(ele,speedTime){
var timer=setInterval(playGame,2000);
var num=ele.find("div").length-4;
var index=0;
function playGame(){
    if(index==num){
        index=1;
        ele.css("left",0);
    }else{
        index++
    }
    ele.animate({
        left:-318*index,
    },speedTime);
}

ele.find("div").find("img").mouseover(function(){
    clearInterval(timer);
});
ele.find("div").find("img").mouseout(function(){
    timer=setInterval(playGame,2000);
});
ele.mousedown(function(e){
    e.preventDefault();
    var mouseleft=e.clientX;
    var thisleft=$(this).css("left");
    var $this=$(this);
    $(document).on("mousemove",function(e){
        var left=e.clientX-mouseleft+parseInt(thisleft);
            $this.css("left",left+"px");
    })

    $(document).mouseup(function(){
        console.log(parseInt(thisleft));
        $(document).off("mousemove");
});

});
}




})