window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
$("#share").on("click",function(){
	$(".bdsharebuttonbox").toggle();
})

	$(".subject_details>ul>li>div").on("mouseenter",function(){
		$(this).children("span").hide();
		$(this).children("a").show();
	})
	$(".subject_details>ul>li>div").on("mouseleave",function(){
		$(this).children("span").show();
		$(this).children("a").hide();
	})