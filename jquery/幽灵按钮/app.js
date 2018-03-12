$(function(){
	$('.link .button').hover(function(){
		//attr() 方法设置或返回被选元素的属性值。
		var title=$(this).attr('data-title');
		$('.tip em').text(title);
		var pos=$(this).offset().left;
		var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l=pos-dis;
		$('.tip').css({'left':l+'px'}).animate({'top':180,'opacity':1},300);
	},function(){//鼠标移开回调函数操作 清除动画
		$('.tip').stop(true).animate({'top':160,'opacity':0},300);
	})
})