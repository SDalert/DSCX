nav_chengchow


$('#nav_chengchow').hover(function () {
    $('#nav_chengchowbox').css({ display: 'block' });
    $('this').css({backgroundColor:'#fff'});
}, function () {
    $('#nav_chengchowbox').css({ display: 'none' });
    $('this').css({backgroundColor:'#ccc'});
});


$('#nav_ulbox2').hover(function () {
    $('this').css({color:'#ccc'});
    $('#nav_ulnav').css({ display: 'block' });
}, function () {
    $('#nav_ulnav').css({ display: 'none' });
});


// 点击事件
$('#nav_del').click(function () {
    $('#nav_ing').css({ display: 'none' })
});