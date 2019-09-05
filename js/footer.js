$(function(){
    $(".gotop").click(function(){
        $("html,body").animate({scrollTop:0},50);
    });


    $("footer a").mouseover(function(){
        $(this).css("color","#999999");
    });

    $("footer a").mouseout(function(){
        $(this).css("color","#ffffff");
    });
  
});