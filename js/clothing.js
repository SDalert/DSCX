/*
作者：李志
ps:本案例可用于商业用途，望添加作者信息

*/
$(function(){
	/*======右按钮======*/
	$(".you").click(function(){
		nextscroll();
	});
	function nextscroll(){
		var vcon = $(".v_cont");
		var offset = ($(".v_cont li").width())*-1;
		vcon.stop().animate({marginLeft:offset},"slow",function(){
			var firstItem = $(".v_cont ul li").first();
			vcon.find(".flder").append(firstItem);
			$(this).css("margin-left","0px");
		});
	};
	/*========左按钮=========*/
	$(".zuo").click(function(){
		var vcon = $(".v_cont");
		var offset = ($(".v_cont li").width()*-1);
		var lastItem = $(".v_cont ul li").last();
		vcon.find(".flder").prepend(lastItem);
		vcon.css("margin-left",offset);
		vcon.animate({marginLeft:"0px"},"slow")
	});
});
// 跳楼效果
 // scroll
        // scrollTop

        //  $(window).height() + scrollTop - floor.offset().top >  $(window).height()/2
        $(function () {
            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop()
                if (scrollTop > 300) {
                    $(".headerc").fadeIn()
                    $(".aside").fadeIn()
                } else {
                    $(".headerc").fadeOut()
                    $(".aside").fadeOut()
                }

                $(".dorp").each(function (index) {

                    // 浏览器的可视高度 + 文档被卷去的距离 - 楼层距离文档顶部的距离  >  浏览器高度的一半
                    if ($(window).height() + scrollTop - $(this).offset().top > $(window).height() / 2) {
                        $(".aside li").eq($(this).index()-1).addClass("active").siblings().removeClass("active")
                    }
                })
            })
		})

        $(".aside li").click(function () {
            $(this).addClass("active").siblings().removeClass("active")
            $("body,html").animate({
                scrollTop: $(".dorp").eq($(this).index()).offset().top - 100
			})
        })

        $(".gotop").click(function () {
            $("body,html").animate({
                scrollTop: 0
            })
        })
