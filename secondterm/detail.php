<?php
	header("Access-Control-Allow-Origin");
	header("Content-Type:text/html,charset=utf8");
	include_once("conn3.php");
	$id = $_GET["id"];
	$sql2 = "select * from `detail`where `id` = $id";
	$result2 = mysql_query($sql2);
	$classlist2 = array();
	if(mysql_affected_rows()>0) {
		while($row=mysql_fetch_assoc($result2)) {
			array_push($classlist2,$row);
		}
	}
//	 echo json_encode($classlist2);
	$content = json_decode(json_encode($classlist2));
//	 mysql_free_result($result2);
//	 mysql_close($conn);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title>locate</title>
		<link rel="stylesheet" href="../css/base.css" />
		<link rel="stylesheet" href="../css/header-footer.css" />
		<link rel="stylesheet" href="../css/secondterm/locate.css" />
	</head>
	<body>
		<div class="mask"></div>
		<div class="header">
			<div class="nav">
				<ul class="tab">
					<li>
						<a href="firstpage.html">
							首页
						</a>
					</li>
					<li>
						<a href="offline-course.html">
							线下课程
						</a>
					</li>
					<li>
						<a href="../elite/course_list.html">
							在线课程
						</a>
					</li>
					<li>
						<a href="offlineSchool.html">
							学校
						</a>
					</li>
					<li>
						<a href="../elite/novice.html">
							互联网头条
						</a>
					</li>
					<li class="tab6">
						<a href="javascript:void(0);">
							<span></span>
							提问
						</a>
					</li>
				</ul>
				<div class="sign">
					<a href="../elite/login_and_registered.html" class="signin">登录</a>
					<a href="../elite/login_and_registered.html" class="signup">注册</a>
				</div>
			</div>
		</div>

		<div class="section clearfix">
			<div class="intro clearfix">
				<div class="bigpic">
					<img id="showpic" src="<?php echo $content[0] -> bigimg?>" alt="" />
					<ul class="list clearfix">
						<li class="lis1"><img src="<?php echo $content[0]-> smallimg1?>" alt="" /></li>
						<li><img src="<?php echo $content[0] -> smallimg2?>" alt="" /></li>
						<li><img src="<?php echo $content[0] -> smallimg3?>" alt="" /></li>
						<li><img src="<?php echo $content[0] -> smallimg4?>" alt="" /></li>
					</ul>
				</div>
				<div class="text">
					<p class="vip"><?php echo $content[0] -> title?></p>
					<div class="locatetext">
						<span class="loc1"></span>
						<p class="p1"><?php echo $content[0] -> subscribe?><a href="javascript:void(0);">[公司详情]</a></p>
						<br />
						<span class="loc2"></span>
						<p><?php echo $content[0] -> address?></p>
					</div>
					<div class="allure">
						<div class="money clearfix">
							<em class="mon1">&yen;</em>
							<span class="mon2"><?php echo $content[0] -> price?></span>
							<del class="mon3">&yen;<?php echo $content[0] -> deleprice?></del>
							<span class="mon4">&yen;<?php echo $content[0] -> deposit?></span>
							<span class="mon5">报名定金</span>
						</div>
						<div class="person">
							<p class="per1">已售<span id="num"><?php echo $content[0] -> sold?></span></p>
							<p class="per2">评分<span id="score"><?php echo $content[0] -> score?></span></p>
							<p class="per3">评价<span id="evalute"><?php echo $content[0] -> evaluate?></span>人</p>
						</div>
					</div>
					<a href="evaluationRefund.html">
						<p class="buynow noted">立即购买</p>
					</a>
					<p class="appointment">预约咨询</p>
				</div>
			</div>
			<div class="tab2">
				<ul class="tabswitch clearfix">
					<li class="showtime">
						课程详情	
					</li>
					<li>
						其他课程	
					</li>
					<li>
						用户评价
					</li>
				</ul>
				<span id="upblock"></span>
				<!--课程详情-->
				<div class="yes">
					<div class="detail clearfix">
						<div>
							<span>课程类型： </span>
							<p><?php echo $content[0] -> lessontype?></p>
						</div>
						<div>
							<span>上课人数： </span>
							<p><?php echo $content[0] -> student?>人</p>
						</div>
						<div>
							<span>课程周期： </span>
							<p><?php echo $content[0] -> term?>个月</p>
						</div>
						<div>
							<span>课程价格： </span>
							<p><?php echo $content[0] -> price?>元</p>
						</div>
						<div>
							<span>学校地址： </span>
							<p><?php echo $content[0] -> address?></p>
						</div>
						<em></em>
						<div>
							<span>适合人群： </span>
							<p><?php echo $content[0] -> people?></p>
						</div>
						<div>
							<span>教学内容： </span>
							<p><?php echo $content[0] -> content?></p>
						</div>
						<div>
							<span>学习目标： </span>
							<p><?php echo $content[0] -> target?></p>
						</div>
						<div>
							<span>使用教材： </span>
							<p><?php echo $content[0] -> book?></p>
						</div>
					</div>
					<!--其他课程-->
					<div class="other">
						<ul>
							<li>
								<a class="linkdle" href="javascript:void(0);">
									<div class="top1 clearfix">
										<h2 id="change">一年会员-购买专用链接(仅用于购买用)-中艺摄影网校</h2>
										<p><span id="yuan">&yen;</span>1288</p>
									</div>
									<div class="top2 clearfix">
										<span class="s1"></span>
										<span class="s2">蓝欧教育科技有限公司</span>
										<span class="s3"></span>
										<span class="s4">120天</span>
										<p class="p1">已售<span class="s5">1200</span></p>
										<p class="p2">评分<span class="s6">8.9</span>分</p>
										<p class="p3">价值：<del>5000</del></p>
									</div>
								</a>
							</li>
							<li>
								<a class="linkdle" href="javascript:void(0);">
									<div class="top1 clearfix">
										<h2 id="change">一年会员-购买专用链接(仅用于购买用)-中艺摄影网校</h2>
										<p><span id="yuan">&yen;</span>1288</p>
									</div>
									<div class="top2 clearfix">
										<span class="s1"></span>
										<span class="s2">蓝欧教育科技有限公司</span>
										<span class="s3"></span>
										<span class="s4">120天</span>
										<p class="p1">已售<span class="s5">1200</span></p>
										<p class="p2">评分<span class="s6">8.9</span>分</p>
										<p class="p3">价值：<del>5000</del></p>
									</div>
								</a>
							</li>
							<li>
								<a class="linkdle" href="javascript:void(0);">
									<div class="top1 clearfix">
										<h2 id="change">一年会员-购买专用链接(仅用于购买用)-中艺摄影网校</h2>
										<p><span id="yuan">&yen;</span>1288</p>
									</div>
									<div class="top2 clearfix">
										<span class="s1"></span>
										<span class="s2">蓝欧教育科技有限公司</span>
										<span class="s3"></span>
										<span class="s4">120天</span>
										<p class="p1">已售<span class="s5">1200</span></p>
										<p class="p2">评分<span class="s6">8.9</span>分</p>
										<p class="p3">价值：<del>5000</del></p>
									</div>
								</a>
							</li>
							<li>
								<a class="linkdle" href="javascript:void(0);">
									<div class="top1 clearfix">
										<h2 id="change">一年会员-购买专用链接(仅用于购买用)-中艺摄影网校</h2>
										<p><span id="yuan">&yen;</span>1288</p>
									</div>
									<div class="top2 clearfix">
										<span class="s1"></span>
										<span class="s2">蓝欧教育科技有限公司</span>
										<span class="s3"></span>
										<span class="s4">120天</span>
										<p class="p1">已售<span class="s5">1200</span></p>
										<p class="p2">评分<span class="s6">8.9</span>分</p>
										<p class="p3">价值：<del>5000</del></p>
									</div>
								</a>
							</li>
							<li>
								<a class="linkdle" href="javascript:void(0);">
									<div class="top1 clearfix">
										<h2 id="change">一年会员-购买专用链接(仅用于购买用)-中艺摄影网校</h2>
										<p><span id="yuan">&yen;</span>1288</p>
									</div>
									<div class="top2 clearfix">
										<span class="s1"></span>
										<span class="s2">蓝欧教育科技有限公司</span>
										<span class="s3"></span>
										<span class="s4">120天</span>
										<p class="p1">已售<span class="s5">1200</span></p>
										<p class="p2">评分<span class="s6">8.9</span>分</p>
										<p class="p3">价值：<del>5000</del></p>
									</div>
								</a>
							</li>
							<li>
								<a class="linkdle" href="javascript:void(0);">
									<div class="top1 clearfix">
										<h2 id="change">一年会员-购买专用链接(仅用于购买用)-中艺摄影网校</h2>
										<p><span id="yuan">&yen;</span>1288</p>
									</div>
									<div class="top2 clearfix">
										<span class="s1"></span>
										<span class="s2">蓝欧教育科技有限公司</span>
										<span class="s3"></span>
										<span class="s4">120天</span>
										<p class="p1">已售<span class="s5">1200</span></p>
										<p class="p2">评分<span class="s6">8.9</span>分</p>
										<p class="p3">价值：<del>5000</del></p>
									</div>
								</a>
							</li>
							<li>
								<a class="linkdle" href="javascript:void(0);">
									<div class="top1 clearfix">
										<h2 id="change">一年会员-购买专用链接(仅用于购买用)-中艺摄影网校</h2>
										<p><span id="yuan">&yen;</span>1288</p>
									</div>
									<div class="top2 clearfix">
										<span class="s1"></span>
										<span class="s2">蓝欧教育科技有限公司</span>
										<span class="s3"></span>
										<span class="s4">120天</span>
										<p class="p1">已售<span class="s5">1200</span></p>
										<p class="p2">评分<span class="s6">8.9</span>分</p>
										<p class="p3">价值：<del>5000</del></p>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="usereva">
						<div class="center clearfix">
							<div class="bigscore">
								<p class="big1">5.2</p>
								<img src="../img/secondterm/star.png" alt="" />
								<p class="big3">该课程共<span>56</span>人评论</p>
							</div>
							<em></em>
							<ul class="charts">
								<li class="evalu clearfix">
									<span class="evl1">好评</span>
									<div class="back">
										<div class="colorchart"></div>
									</div>
									<p class="countnum"><span id="ago">12315</span>人</p>
								</li>
								<li class="evalu clearfix">
									<span class="evl1">中评</span>
									<div class="back">
										<div class="colorchart colorchart1"></div>
									</div>
									<p class="countnum"><span id="ago">1532</span>人</p>
								</li>
								<li class="evalu clearfix">
									<span class="evl1">差评</span>
									<div class="back">
										<div class="colorchart colorchart2"></div>
									</div>
									<p class="countnum"><span id="ago">800</span>人</p>
								</li>
							</ul>
						</div>
						<div class="impress">
							<div class="people clearfix">
								<span>大家印象:</span>
								<ul class="ad clearfix">
									<li>交通便利(323)</li>
									<li>学习气氛浓厚(1200)</li>
									<li>交通便利(323)</li>
									<li>学习气氛浓厚(1200)</li>
									<li>交通便利(323)</li>
									<li>学习气氛浓厚(1200)</li>
									<li>学习气氛浓厚(1200)</li>
									<li>交通便利(323)</li>
									<li class="li9">学习气氛浓厚(1200)</li>
									<li class="li10">交通便利(323)</li>
								</ul>
							</div>
						</div>
						<!--用户评价内容-->
						<div class="evacontent">
							<p>评价内容(134)</p>
							<ul class="noname">
								<li>
									<div class="topcontent class="clearfix"">
										<img id="star" src="../img/secondterm/star.png" alt="" />
										<span id="username">刘峰</span>
										<span id="date">2015-01-28</span>
									</div>
									<p class="realcontent">
										很满意特别划算 真不错    很详细 有耐心。很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心
									</p>
								</li>
								<li>
									<div class="topcontent class="clearfix"">
										<img id="star" src="../img/secondterm/star.png" alt="" />
										<span id="username">刘峰</span>
										<span id="date">2015-01-28</span>
									</div>
									<p class="realcontent">
										很满意特别划算 真不错    很详细 有耐心。很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心
									</p>
								</li>
								<li class="non3">
									<div class="topcontent class="clearfix"">
										<img id="star" src="../img/secondterm/star.png" alt="" />
										<span id="username">刘峰</span>
										<span id="date">2015-01-28</span>
									</div>
									<p class="realcontent">
										很满意特别划算 真不错    很详细 有耐心。很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心很满意特别划算 真不错    很详细 有耐心
									</p>
								</li>
							</ul>
							<div class="pages clearfix">
								<a id="prev" href="javascript:history.go(-1)">上一页</a>
								<ul>
									<li class="selected">1</li>
									<li>2</li>
									<li>3</li>
									<li>4</li>
									<li>5</li>
									<li>6</li>
									<li>7</li>
									<li>8</li>
									<li>9</li>
									<li class="ted">...</li>
									<li>100</li>
								</ul>
								<a id="next" href="javascript:history.go(1)">下一页</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<ul class="aside">
				<li class="hotclass">
					<div class="hot clearfix">
						<span class="hot1"></span>
						<span class="hot2">热销课程</span>
						<a href="javascript:void(0);" class="hot3">更多</a>
					</div>
					<ul class="recommend">
						<li>
							<a href="javascript:void(0)" class="nono clearfix">
								<img src="../img/secondterm/video-wrapper.png" alt="" />
								<div class="textrecom">
									<p class="tex1">4个月IOS高薪就业班...</p>
									<p class="tex2">北京市海淀区清河中街金...</p>
									<span class="tex3">&yen;</span>
									<span class="tex4">1288</span>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0)" class="nono clearfix">
								<img src="../img/secondterm/video-wrapper.png" alt="" />
								<div class="textrecom">
									<p class="tex1">4个月IOS高薪就业班...</p>
									<p class="tex2">北京市海淀区清河中街金...</p>
									<span class="tex3">&yen;</span>
									<span class="tex4">1288</span>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0)" class="nono clearfix">
								<img src="../img/secondterm/video-wrapper.png" alt="" />
								<div class="textrecom">
									<p class="tex1">4个月IOS高薪就业班...</p>
									<p class="tex2">北京市海淀区清河中街金...</p>
									<span class="tex3">&yen;</span>
									<span class="tex4">1288</span>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0)" class="nono clearfix">
								<img src="../img/secondterm/video-wrapper.png" alt="" />
								<div class="textrecom">
									<p class="tex1">4个月IOS高薪就业班...</p>
									<p class="tex2">北京市海淀区清河中街金...</p>
									<span class="tex3">&yen;</span>
									<span class="tex4">1288</span>
								</div>
							</a>
						</li>
						<li>
							<a href="javascript:void(0)" class="nono clearfix">
								<img src="../img/secondterm/video-wrapper.png" alt="" />
								<div class="textrecom">
									<p class="tex1">4个月IOS高薪就业班...</p>
									<p class="tex2">北京市海淀区清河中街金...</p>
									<span class="tex3">&yen;</span>
									<span class="tex4">1288</span>
								</div>
							</a>
						</li>
					</ul>
				</li>
				<li class="question">
					<span class="que1"></span>
					<span class="que2">有疑问？</span>
					<p class="sale">
						<span class="sal1">A:</span>
						<span class="sal2">报名定金是什么鬼</span>
					</p>
					<p class="sell">
						<span class="sel1">B:</span>
						<span class="sel2">
							当年18户村民按下红手印，签订大包干契约情景。总书记感慨道：“当年贴着身家性命干的事，变成中国改革的一声惊雷，成为中国改革的标志。
						</span>
					</p>
					<p class="sale">
						<span class="sal1">A:</span>
						<span class="sal2">购买本VIP课程后请务必联系工作人员录播课程以及在架的</span>
					</p>
					<p class="sell">
						<span class="sel1">B:</span>
						<span class="sel2">
							当年18户村民按下红手印，签订大包干契约情景。总书记感慨道：“当年贴着身家性命干的事，变成中国改革的一声惊雷，成为中国改革的标志。
						</span>
					</p>
					<p class="sale">
						<span class="sal1">A:</span>
						<span class="sal2">报名定金是什么鬼</span>
					</p>
					<p class="sell">
						<span class="sel1">B:</span>
						<span class="sel2">
							当年18户村民按下红手印，签订大包干契约情景。总书记感慨道：“当年贴着身家性命干的事，变成中国改革的一声惊雷，成为中国改革的标志。
						</span>
					</p>
				</li>
			</ul>
			<div class="appoint">
				<p class="consu clearfix">
					<span class="con1">预约咨询</span>
					<span class="con2" id="close"></span>
				</p>
				<div class="consult">
					<p>请留下您的联系电话，我们会在第一时间和您取得联系</p>
					<label for="">
						您的姓名：
						<input type="text" id="atext"/>
					</label>
					<label for="">
						您的电话：
						<input type="tel	" id="atel" />
					</label>
					<span id="wish">意向课程：</span>
					<div class="dropbox">
						请选择意向课程
					</div>
					<ul class="dropbox-on">
						<li>iOS</li>
						<li>Android</li>
						<li>HTML5</li>
						<li>Unity-3D</li>
						<li>产品经理</li>
					</ul>
					<br />
					<a id="cancel">取消</a>
					<a id="confirm">确定</a>
				</div>
			</div>
		</div>
	
		<div class="footer">
			<ul class="friendlink clearfix">
				<li class="fri1">
						友情链接
				</li>
				<li class="fri2">
					<a href="http://www.immomo.com/">
						陌陌科技
					</a>
				</li>
				<li class="fri3">
					<a href="http://www.chukong-inc.com/">
						触控科技
					</a>
				</li>
				<li class="fri4">
					<a href="http://www.baike.com/">
						互动百科
					</a>
				</li>
				<li class="fri5">
					<a href="http://gz.sofang.com/">
						搜房网
					</a>
				</li>
				<li class="fri6">
					<a href="../elite/link.html">
						更多
						<span></span>
					</a>
				</li>
			</ul>
			<div class="link clearfix">
				<ul class="lab">
					<li class="lin1">
						我们的实验室
					</li>	
					<li>
						<a href="javascript:void(0);">在线编程</a>
					</li>
					<li>
						<a href="javascript:void(0);">奖学制度</a>
					</li>
					<li>
						<a href="javascript:void(0);">在线班级</a>
					</li>
					<li>
						<a href="javascript:void(0);">课后60分钟考试</a>
					</li>
				</ul>
				<ul class="aboutus">
					<li class="lin2">
						关于我们
					</li>	
					<li>
						<a href="javascript:void(0);">精英吧简介</a>
					</li>
					<li>
						<a href="javascript:void(0);">联系我们</a>
					</li>
					<li>
						<a href="javascript:void(0);">加入我们</a>
					</li>
				</ul>
				<ul class="lesson">
					<li class="lin3">
						现有课程
					</li>	
					<li>
						<a href="javascript:void(0);">IOS</a>
					</li>
					<li>
						<a href="javascript:void(0);">Android</a>
					</li>
					<li>
						<a href="javascript:void(0);">unity3D</a>
					</li>
					<li>
						<a href="javascript:void(0);">H5</a>
					</li>
				</ul>
				<ul class="help">
					<li class="lin4">
						帮助
					</li>	
					<li>
						<a href="javascript:void(0);">联系客服</a>
					</li>
					<li>
						<a href="javascript:void(0);">版权声明</a>
					</li>
					<li>
						<a href="javascript:void(0);">法律声明</a>
					</li>
					<li>
						<a href="javascript:void(0);">服务条款</a>
					</li>
				</ul>
				<ul class="feedback">
					<li class="lin5">
						反馈方式
					</li>	
					<li>
						<a href="javascript:void(0);">电子邮箱：help@xxxxx.com</a>
					</li>
					<li>
						<a href="javascript:void(0);">微信反馈：精英吧微信公众号</a>
					</li>
					<li>
						<img src="../img/secondterm/erweima_weixin.png" alt="" />
					</li>
				</ul>
				<ul class="app">
					<li class="app1">
						口袋精英app
					</li>
					<li>
						<img src="../img/secondterm/erweima_app.png" alt="" />
					</li>
					<li>
						(扫码下载)
					</li>
				</ul>
			</div>
			<p class="copyright">蓝鸥科技有限公司©1997-2016 | 北京市海淀区清河毛纺路路南甲36号金五星商业大厦5层</p>
		</div>

		<script src="../js/secondterm/locate.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
