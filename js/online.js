$(function(){
// var arr=["../img/tmlgd.png","../img/tblgd.png","../img/jdlgd.png","../img/ddlgd.png","../img/lplgd.png"];
var height=$(window).height();
var url=""
$('.main ul li').on('mouseover','img',function(){
    url=$(this).attr("src");
    $(this).attr("src","../img/selected.png");
});

$('.main ul').on('mouseout','img',function(){
    $(this).attr("src",url);
});

if($("html,body").scrollTop()<500){
    setTimeout(function(){
        $(".empty").css("display","none");
        $(".zhuti").css("display","block");
    },200);
    
}

if($("html,body").scrollTop()>50){
    for(i=0,len=$(".main ul li").length;i<len;i++){
        active($(".main ul li").eq(i),i*200);
    }
}


$(window).scroll(function(){ 
    if($("html,body").scrollTop()>50){
            for(i=0,len=$(".main ul li").length;i<len;i++){
                active($(".main ul li").eq(i),i*200);
            }
    }
    if($("html,body").scrollTop()<500){
        setTimeout(function(){
            $(".empty").css("display","none");
            $(".zhuti").css("display","block");
        },200);
    }
    
})

function active(ele,speedTime){
    setTimeout(function(){
        ele.css("display","block");
    },speedTime);
}


})


