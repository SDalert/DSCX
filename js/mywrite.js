$('.myorder-ul li:first').click(function(){
	$('.mywrite-sp').css('opacity','1')
	$('.mywrite-sp1').css('opacity','0')
})
$('.myorder-ul li:last').click(function(){
	$('.mywrite-sp').css('opacity','0')
	$('.mywrite-sp1').css('opacity','1')
})