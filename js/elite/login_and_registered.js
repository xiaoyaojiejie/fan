$(function(){
//	登陆与注册tab切换
	for (var i=0;i<$(".btn_box>a").length;i++) {
		$(".btn_box>a").on("click",function(){
			$(this).addClass("a_btn_active").siblings().removeClass("a_btn_active")
			$(".input_box>div").eq($(this).index()).show().siblings().hide()
		})
	}
	
	var checkbox_booleans = false;
	$(".login>form>.checkbox").on("click",function(){
		if (checkbox_booleans == false) {
			$(".login>form>.checkbox").addClass("checkbox_active");
			checkbox_booleans = true;
		}else{
			$(".login>form>.checkbox").removeClass("checkbox_active");
			checkbox_booleans = false;
		}
	})
	
//	登陆的正则与js判断
	var reg = /^\d{11}$/
	$(".login>form>div:nth-of-type(1)>input").blur(function(){
		if (!reg.test($(".login>form>div:nth-of-type(1)>input").val())) {
			$(".login>form>.error_tel").show();
		}else{
			$(".login>form>.error_tel").hide();
		}
		if ($(".login>form>div:nth-of-type(1)>input").val()=="") {
			$(".login>form>.null_tel").show();
			$(".login>form>.error_tel").hide();
		}else{
			$(".login>form>.null_tel").hide();
		}
	})
	$(".login>form>div:nth-of-type(2)>input").blur(function(){
		if ($(".login>form>div:nth-of-type(2)>input").val()=="") {
			$(".login>form>.null_password").show();
		}else{
			$(".login>form>.null_password").hide();
		}
	})
	$(".login>form>div:nth-of-type(3)>div>input").blur(function(){
		if ($(".login>form>div:nth-of-type(3)>div>input").val()=="") {
			$(".login>form>.null_code").show();
		}else{
			$(".login>form>.null_code").hide();
		}
	})
//	注册正则与js判断

	//判断手机号码是否为空与正则
	$(".registered>form>div:nth-of-type(1)>input").blur(function(){
		if (!reg.test($(".registered>form>div:nth-of-type(1)>input").val())) {
			$(".registered>form>.error_tel").show();
		}else{
			$(".registered>form>.error_tel").hide();
		}
		if ($(".registered>form>div:nth-of-type(1)>input").val()=="") {
			$(".registered>form>.null_tel").show();
			$(".registered>form>.error_tel").hide();
		}else{
			$(".registered>form>.null_tel").hide();
		}
	})
//	判断验证码是否为空
	$(".registered>form>div:nth-of-type(2)>div>input").blur(function(){
		if ($(".registered>form>div:nth-of-type(2)>div>input").val()=="") {
			$(".registered>form>.null_code").show();
		}else{
			$(".registered>form>.null_code").hide();
		}
	})
//	判断密码是否为空
	$(".registered>form>div:nth-of-type(3)>input").blur(function(){
		if ($(".registered>form>div:nth-of-type(3)>input").val()=="") {
			$(".registered>form>.null_password").show();
		}else{
			$(".registered>form>.null_password").hide();
		}
	})
	//判断二次密码是否和上面一样和是否空
	$(".registered>form>div:nth-of-type(4)>input").blur(function(){
		if ($(".registered>form>div:nth-of-type(4)>input").val()=="") {
			$(".registered>form>.repeat_password").show();
		}else{
			$(".registered>form>.repeat_password").hide();
		}
		if ($(".registered>form>div:nth-of-type(4)>input").val()!=$(".registered>form>div:nth-of-type(3)>input").val()) {
			$(".registered>form>.not_same").show();
		}else{
			$(".registered>form>.not_same").hide();
		}
	})
	//发送验证码到手机后有60秒的倒计时后才能再次发送
	$(".get_code").on("click",function(){
		$(".get_code").hide();
		$(".Countdown").show();
		var t = 60;
		var timer = setInterval(function(){
			t--;
			$(".Countdown").html(t+"秒");
			if(t == 0){
				$(".Countdown").hide();
				$(".get_code").show();
				clearInterval(timer)
			}
		},1000)
	})
	var label_booleans = false;
	$(".registered>form>label>input").on("click",function(){
		if (label_booleans == false) {
			$(".registered>form>label>input").addClass("checkbox_active");
			label_booleans = true;
		}else{
			$(".registered>form>label>input").removeClass("checkbox_active");
			label_booleans = false;
		}
	})
})