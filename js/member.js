// 左侧底部导航栏点击张开合并
var flag = 0;
$('.spact').click(function(){
	if(flag == 0){
		// $(this).parents('.orderbox').css('height','30px')
		$(this).parents('.orderbox').get(0).style.height = '30px'
		$(this).get(0).className = 'spact iconfont icon-jia'
		flag = 1
	}else if(flag == 1){
		$(this).parents('.orderbox').css('height','100%')
		// $(this).parents('.orderbox').get(0).style.height = '161px'
		// $(this).parents('.orderbox').get(0).style.height =($(this).parents('.orderbox').children('ul').children('li').length+1)*21.82 + 'px'
		$(this).get(0).className = 'spact iconfont icon-jian'
		flag = 0
		console.log(($(this).parents('.orderbox').children('ul').children('li').length+1)*21.82);
	}
})
var arrcolor = ['#97D142','#45C9D3','#EE6CA5','#B262F6']
for(var i=0;i<$('.two-t-ul li div:nth-child(1)').length;i++){
	$('.two-t-ul li div:nth-child(1)')[i].style.backgroundColor = arrcolor[i]
}
for(var i=0;i<$('.two-t-ul li div:nth-child(2) p:nth-child(2)').length;i++){
	$('.two-t-ul li div:nth-child(2) p:nth-child(2)')[i].style.color = arrcolor[i]
}