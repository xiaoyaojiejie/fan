$(function(){
	//时间模拟
	$(".simulation_modify").on("click",function(){
		$("#modify").click()
	})
	for (var i = 0;i < $("#menu li").length;i++) {//左边菜单栏tab切换
		$("#menu li").on("click",function(){
			$(this).addClass("menu_active").siblings().removeClass("menu_active");
			$(".main_body>div").eq($(this).index()).show().siblings().hide()
		})
	}
	
	//我的学习曲线tab切换
	for (var i = 0; i < $(".learning_curve_top>.course_btn_box>a").length;i++) {
		$(".learning_curve_top>.course_btn_box>a").on("click",function(){
			$(this).addClass("course_btn_active").siblings().removeClass("course_btn_active");
			$(".learning_curve_top>.course_graph>div").eq($(this).index()).show().siblings().hide();
		})
	}	
	for (var i = 0; i < $(".learning_curve_bottom>.course_btn_box>a").length;i++) {
		$(".learning_curve_bottom>.course_btn_box>a").on("click",function(){
			$(this).addClass("course_btn_active").siblings().removeClass("course_btn_active");
			$(".learning_curve_bottom>.record>div").eq($(this).index()).show().siblings().hide();
		})
	}
	
	//我所在的班级
	for (var i = 0; i < $(".my_class_top>.course_btn_box>a").length;i++) {
		$(".my_class_top>.course_btn_box>a").on("click",function(){
			$(this).addClass("course_btn_active").siblings().removeClass("course_btn_active");
			$(".my_class_top>.histogram_graph>div").eq($(this).index()).show().siblings().hide();
		})
	}	
	for (var i = 0; i < $(".my_class_bottom>.course_btn_box>a").length;i++) {
		$(".my_class_bottom>.course_btn_box>a").on("click",function(){
			$(this).addClass("course_btn_active").siblings().removeClass("course_btn_active");
			$(".my_class_bottom>.record>div").eq($(this).index()).show().siblings().hide();
		})
	}
	//	我的作业
	for (var i = 0; i < $(".my_homework>.course_btn_box>a").length;i++) {
		$(".my_homework>.course_btn_box>a").on("click",function(){
			$(this).addClass("course_btn_active").siblings().removeClass("course_btn_active");
			$(".homework_title>div").eq($(this).index()).show().siblings().hide();
		})
	}
	
	//账号设置
	$(".fill_password>a").on("click",function(){
		if ($("#password").val()=="") {
			$(".old_password").css({
				display:" inline-block"
			})
		}
	})
	function password(){
		if ($("#password").val()!="") {
			$(".old_password").css({
				display:"none"
			})
			if ($("#new_password").val()!=$("#password").val()) {
				$(".correct_icon").css({
					display:"inline-block"
				})
				$(".new_password_prompt").css({
					display:"none"
				})
				$(".password_prompt").css({
					display:"none"
				})
			}else{
				$(".correct_icon").css({
					display:"none"
				})
				$(".new_password_prompt").css({
					display:"inline-block"
				})
				$(".password_prompt").css({
					display:"none"
				})
			}
			if ($("#new_password").val()=="") {
				$(".correct_icon").css({
					display:"none"
				})
				$(".new_password_prompt").css({
					display:"none"
				})
				$(".password_prompt").css({
					display:"inline-block"
				})
			}
		}
	}
	
	$("#new_password").blur(function(){
		password()
	})
	$("#password").blur(function(){
		password()
	})
	$("#repeat_password").blur(function(){
		if ($("#repeat_password").val()=="") {
			$(".repeat_password_prompt").css({
					display:"none"
			})
		}else{
			if($("#repeat_password").val() != $("#new_password").val()){
				$(".repeat_password_prompt").css({
					display:"inline-block"
				})
			}else{
				$(".repeat_password_prompt").css({
					display:"none"
				})
			}
		}
	})
})