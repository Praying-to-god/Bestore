$(function(){

    if(localStorage.getItem('years')){
        var codeArrr = JSON.parse(localStorage.getItem('years')).code;
        if(codeArrr.length == 0){
            return false;
        }
        $.ajax({
            url:'../data/physical.json',
			type:'get',
			cache:false,
			dataType:'json',
			success:function(data){
                // console.log(data)
                var results = '';
                $.each(codeArrr,function(i,item){
                    $.each(data,function(index,obj){
                        if(item == obj.code){
                            results += `<li code="${obj.code}"><img src="${obj.img}" alt=""><h4>${obj.year}</h4>${obj.content}<span>取消关注</span></li>`;
                        }
                    });
                });
				$('.list').html(results);
			}
		});

        //删除
        $('.list').on('click','li span',function(){
            $(this).parent().remove();
            var code = $(this).parent().attr('code');
            $.each(codeArrr,function(index,item){
                if(code == item){
                    codeArrr.splice(index,1);
                }
            });
            var jsonStr = JSON.stringify({"code":codeArrr});
            localStorage.setItem('years',jsonStr);
            alert('取消关注成功');
            if(codeArrr.length == 0){
                $('.list').html('<li class="tips">无关注历史!</li>');
            }
        })   
    }
})