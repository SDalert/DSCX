$('.myorder .myorder-ul li:first').click(function(){
	$('.myordershp').css('display','block')
	$('.myordershp2').css('display','none')
})
$('.myorder .myorder-ul li:last').click(function(){
	$('.myordershp').css('display','none')
	$('.myordershp2').css('display','block')
})