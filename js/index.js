// 轮播图
var ary = location.href.split("&");
jQuery(".slideBox").slide({ mainCell: ".bd ul", autoPlay: true, trigger: "click", delayTime: 1000 });