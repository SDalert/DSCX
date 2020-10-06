//热门推荐
$('.extra  li').hover(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('.ulitem').eq($(this).index()).addClass('ulitem1').siblings().removeClass('ulitem1')
    })
    //大家电
$('.extra1 li').hover(function() {
        $(this).addClass('on1').siblings().removeClass('on1');
        $('.right').eq($(this).index()).addClass('right1').siblings().removeClass('right1')

    })
    //生活电器
$('.extra2 li').hover(function() {
    $(this).addClass('on2').siblings().removeClass('on2');
    $('.right-1').eq($(this).index()).addClass('right-2').siblings().removeClass('right-2')

})

// 厨房电器
$('.extra3 li').hover(function() {
        $(this).addClass('one3').siblings().removeClass('one3');
        $('.right-3').eq($(this).index()).addClass('right-4').siblings().removeClass('right-4')
    })
    //个护健康
$('.extra4 li').hover(function() {
        $(this).addClass('one4').siblings().removeClass('one4');
        $('.right-5').eq($(this).index()).addClass('right-6').siblings().removeClass('right-6')
    })
    // 五金家具
$('.extra5 li').hover(function() {
        $(this).addClass('one5').siblings().removeClass('one5');
        $('.right-7').eq($(this).index()).addClass('right-8').siblings().removeClass('right-8')
    })
    //随手购
    // 左右按钮显示隐藏
$('.awg-bd').hover(function() {
        $('.prev').css('display', 'block');
        $('.next').css('display', 'block');
    }, function() {
        $('.prev').css('display', 'none');
        $('.next').css('display', 'none');
    })
    //焦点
$('.awg-bd .hd li').hover(function() {
    $(this).addClass('color-red').siblings().removeClass('color-red');

})
var li1 = document.querySelectorAll('.li1');
var ul1 = document.querySelector('.ul1');
for (var i = 0; i < li1.length; i++) {
    li1[i].index = i;
    li1[i].onmouseover = function() {
        var target = this.index * -1200;
        yidong(ul1, target);
    }
}

function yidong(ele, target) {
    clearInterval(ele.interId);
    ele.interId = setInterval(function() {
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
        } else {
            var setp = (target - ele.offsetLeft) / 100;
            setp = setp > 0 ? Math.ceil(setp) : Math.floor(setp);
            ele.style.left = ele.offsetLeft + setp + 'px';
        }
    }, 1)
}
//左边按钮
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var flag = 0;
next.onclick = function() {
    flag++;
    if (flag == 3) {
        flag = 2;
    }
    for (var i = 0; i < li1.length; i++) {
        li1[i].className = "li1"
    }
    li1[flag].className = 'color-red';
    var target1 = flag * -1200;
    yidong(ul1, target1);
}
prev.onclick = function() {
    flag--;
    if (flag == -1) {
        flag = 0;
    }
    for (var i = 0; i < li1.length; i++) {
        li1[i].className = 'li1';
    }
    li1[flag].className = 'color-red';
    var target1 = flag * -1200;
    yidong(ul1, target1);
}