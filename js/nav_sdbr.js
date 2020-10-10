
$('.nav_user').mouseover(function () {
    $('.nav_nva').css({ display: 'block' })
    $('.nav_users').css({ display: 'block' })
    $('.nav_user').css({ backgroundColor: 'red' })
});
$('.nav_user').mouseout(function () {
    $('.nav_nva').css({ display: 'none' })
    $('.nav_users').css({ display: 'none' });
    $('.nav_user').css({ backgroundColor: '#000' });
});

$('.nav_shopping').hover(function () {
    $('.nav_shopping').addClass('nav_shopactive');
    $('.nav_digit').addClass('nav_digactive');
}, function () {
    $('.nav_shopping').removeClass('nav_shopactive');
    $('.nav_digit').removeClass('nav_digactive');
})



$('.nav_ulli1').hover(function () {
    $('.nava_service').css({ display: 'block' })
    $('.nava_service').stop().animate({ right: '20px' });
}, function () {
    $('.nava_service').css({ display: 'none' })
    $('.nava_service').stop().animate({ right: '60px' });
})



$('.nav_li li').mouseover(function () {
    $(this).css({ backgroundColor: 'red' });
    $('.nav_flexible li').eq($(this).index()).css({ opacity: '1' });
    $('.nav_flexible li').eq($(this).index()).stop().animate({ left: '220px' });
})
$('.nav_li li').mouseout(function () {
    $('.nav_flexible li').eq($(this).index()).css({ opacity: '0' });
    $('.nav_flexible li').eq($(this).index()).stop().animate({ left: '180px' });
    $(this).css({ backgroundColor: '#000' });
});


$(".nav_shopping").click(function () {
    // 更改自定义属性
    if ($(".nav_entirety").attr('data-index') == 0) {
        $(".nav_entirety").attr('data-index', "1");
        $(".nav_entirety").animate({ right: '0' });
        $('.nav_shopping').css({ backgroundColor: 'red' });
        $('.nav_digit').css({ backgroundColor: '#fff', color: 'red' });

    } else if ($(".nav_entirety").attr('data-index') == 1) {
        $(".nav_entirety").animate({ right: '-296px' });
        $(".nav_entirety").attr('data-index', "0");
        $('.nav_shopping').css({ backgroundColor: '#000' });
    }
})



// 回到顶部
$(".nav_ulli2").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 500);
})



// 点击事件
$(".nav_del").click(function () {
    $(".nav_entirety").animate({ right: '-296px' });
    $(".nav_entirety").attr('data-index', "0");
    $('.nav_shopping').css({ backgroundColor: '#000' });
})