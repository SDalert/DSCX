$('.myorder-ul li').click(function(){
	$(this).addClass('myorder-ul-li').siblings().removeClass('myorder-ul-li')
	console.log($(this));
})