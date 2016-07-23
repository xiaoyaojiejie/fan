$(function(){
	for (var i = 0;i < $("#menu li").length;i++) {
		$("#menu li").on("click",function(){
			$(this).addClass("menu_active").siblings().removeClass("menu_active");
			$(".main_body>div").eq($(this).index()).show().siblings().hide()
		})
	}
	
	for (var i = 0; i < $(".learning_curve_bottom>.course_btn_box>a").length) {
		
	}
})