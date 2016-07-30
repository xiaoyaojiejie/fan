var topList = document.querySelectorAll(".top li");
var bottomList = document.querySelectorAll(".bottom li");
var validateList = document.querySelectorAll(".validate li");
var colorBlock = document.getElementById("colorblock");
var lPerwidth = validateList[0].offsetWidth;
var pageList = document.querySelectorAll(".pages li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var video = document.querySelector(".video");
var sumcount = document.getElementById("sumcount");
var u1 = document.getElementById("u1");
var u2 = document.getElementById("u2");
var u3 = document.getElementById("u3");
var u4 = document.getElementById("u4");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");

var xhr = new XMLHttpRequest();
var url = "../secondterm/list.php";
	xhr.open("get",url);
			xhr.send(null);
			xhr.onload = function() {
				var index = xhr.responseText.indexOf("<script type=");
				var result = xhr.responseText.substring(0,index);
				result = JSON.parse(result);
				console.log(result);
				sumcount.innerHTML = result.length;
				for (var i = 0; i < result.length; i++) {
					var li = document.createElement("li");
					var content = '<a href="../secondterm/detail.php?id='+(i+1)+'">'+
										'<img id="wrapperimg" src="'+result[i].img+'" alt="" />'+
										'<div>'+
											'<p class="loc1">'+result[i].title+'</p>'+
											'<p class="loc2">'+result[i].subscribe+'</p>'+
										'	<span class="loc3">&yen;</span>'+
											'<span class="loc4" id="price">'+result[i].price+'</span>'+
											'<del class="loc5">&yen;'+result[i].deleprice+'</del>'+
											'<span class="hassold">已售</span>'+
											'<span class="loc6" id="sellcount">'+result[i].sellcount+'</span>'+
										'</div>'+
									'</a>';
					li.innerHTML += content;
					li.className = "vid"+ (i+1);
					video.appendChild(li);
				}
			
			}
			
			
for (var k = 0; k < topList.length; k++) {
	topList[k].index = k;
	if (k != 0 && k != 1) {
		topList[k].onclick = function() {
			for (var j = 0; j < topList.length; j++) {
				topList[j].className = "";
			}
			this.className = "active";
			var xhr = new XMLHttpRequest();
			var url = "";
			switch(this.index) {
				case 3:
					video.innerHTML = "";
				 	url = "../secondterm/u3d.php";
				 	break;
				 case 4:
					video.innerHTML = "";
				 	url = "../secondterm/ios.php";
				 	break;
				 case 5:
					video.innerHTML = "";
				 	url = "../secondterm/android.php";
				 	break;
				 case 6:
					video.innerHTML = "";
				 	url = "../secondterm/Html5.php";
				 	break;
				 default:
				 	video.innerHTML = "";
					url = "../secondterm/list.php";
			}
			xhr.open("get",url);
			xhr.send(null);
			xhr.onload = function() {
				var index = xhr.responseText.indexOf("<script type=");
				var result = xhr.responseText.substring(0,index);
				result = JSON.parse(result);
				console.log(result);
				sumcount.innerHTML = result.length;
				for (var i = 0; i < result.length; i++) {
					var li = document.createElement("li");
					var content = '<a href="../secondterm/detail.php?id='+(i+1)+'">'+
										'<img id="wrapperimg" src="'+result[i].img+'" alt="" />'+
										'<div>'+
											'<p class="loc1">'+result[i].title+'</p>'+
											'<p class="loc2">'+result[i].subscribe+'</p>'+
										'	<span class="loc3">&yen;</span>'+
											'<span class="loc4" id="price">'+result[i].price+'</span>'+
											'<del class="loc5">&yen;'+result[i].deleprice+'</del>'+
											'<span class="hassold">已售</span>'+
											'<span class="loc6" id="sellcount">'+result[i].sellcount+'</span>'+
										'</div>'+
									'</a>';
					li.innerHTML += content;
					li.className = "vid"+ (i+1);
					video.appendChild(li);
				}
			
			}
					
		}
	}
}
for (var k = 0; k < bottomList.length; k++) {
	bottomList[k].index = k;
	if (k != 0 && k != 1) {
		bottomList[k].onclick = function() {
			for (var j = 0; j < bottomList.length; j++) {
				bottomList[j].className = "";
			}
			this.className = "active";
			var xhr = new XMLHttpRequest();
			var url = "";
			switch(this.index) {
				case 3:
					video.innerHTML = "";
				 	url = "../secondterm/chaoyang.php";
				 	break;
				 case 4:
					video.innerHTML = "";
				 	url = "../secondterm/haidian.php";
				 	break;
				 case 5:
					video.innerHTML = "";
				 	url = "../secondterm/xicheng.php";
				 	break;
				 case 6:
					video.innerHTML = "";
				 	url = "../secondterm/dongcheng.php";
				 	break;
				 default:
				 	video.innerHTML = "";
					url = "../secondterm/list.php";
			}
			xhr.open("get",url);
			xhr.send(null);
			xhr.onload = function() {
				var index = xhr.responseText.indexOf("<script type=");
				var result = xhr.responseText.substring(0,index);
				result = JSON.parse(result);
				console.log(result);
				sumcount.innerHTML = result.length;
				for (var i = 0; i < result.length; i++) {
					var li = document.createElement("li");
					var content = '<a href="../secondterm/detail.php?id='+(i+1)+'">'+
										'<img id="wrapperimg" src="'+result[i].img+'" alt="" />'+
										'<div>'+
											'<p class="loc1">'+result[i].title+'</p>'+
											'<p class="loc2">'+result[i].subscribe+'</p>'+
										'	<span class="loc3">&yen;</span>'+
											'<span class="loc4" id="price">'+result[i].price+'</span>'+
											'<del class="loc5">&yen;'+result[i].deleprice+'</del>'+
											'<span class="hassold">已售</span>'+
											'<span class="loc6" id="sellcount">'+result[i].sellcount+'</span>'+
										'</div>'+
									'</a>';
					li.innerHTML += content;
					li.className = "vid"+ (i+1);
					video.appendChild(li);
				}
			
			}
		}
	}
}
for (var i = 0; i < validateList.length; i++) {
	validateList[i].index = i;
	validateList[i].onclick = function() {
		for (var j = 0; j < validateList.length; j++) {
			validateList[j].style.color = "#666";
		}
		this.style.color = "#29b572";
		colorBlock.style.left = this.index * lPerwidth + "px";
	}
}
for (var i = 0; i < pageList.length; i++) {
	pageList[i].index = i;
	if (i != 9) {
		pageList[i].onclick = function() {
			for (var j = 0; j < pageList.length; j++) {
				pageList[j].className = "";
			}
			this.className = "selected";
		}
	}
}


//	后台引用数据



























