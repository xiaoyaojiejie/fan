$(function(){
	for (var i = 0;i < $("#menu>li").length;i++) {
		$("#menu li").on("click",function(){
			$(this).addClass("menu_active").siblings().removeClass("menu_active");
			$(".body_content>div").eq($(this).index()).show().siblings().hide()
		})
	}
})
