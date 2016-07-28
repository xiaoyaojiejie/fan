window.onload = function() {
	var container = document.querySelector(".container");
	var imglist = document.querySelectorAll(".container img");
	var spanlist = document.querySelectorAll("#pagination span");
	var wrapper = document.querySelector(".wrapper");
	var lunbo1 = document.getElementById("lunbo1");
	var lunbo2 = document.getElementById("lunbo2");
	var lunbo3 = document.getElementById("lunbo3");
	
	//轮播图
	var a = document.createElement("a");
	var cloneFirst = imglist[0].cloneNode();
	a.href = "javascript:void(0);";
	a.appendChild(cloneFirst);
	container.appendChild(a);
	var perWidth = imglist[0].offsetWidth;
	
//	轮播图
	var clickFlag = true;
	var timer = 0;
	function autoGo() {
		var begin = container.offsetLeft;
		var end = -index * perWidth;
		var change = end - begin;
		var t = 0;
		var maxT = 20;
		clearInterval(timer);
		timer = setInterval(function() {
			t++;
			if (t>=maxT) {
				clearInterval(timer);
				clickFlag = true;
			}
			container.style.left = change/maxT * t + begin + "px";
			if (index == spanlist.length && t>=maxT) {
				container.style.left = 0;
				index = 0;
			}
		},30)
		for (var j = 0;j<spanlist.length;j++) {
			spanlist[j].className = "";
		}
		if (index == spanlist.length) {
			spanlist[0].className = "active";
		}else {
			spanlist[index].className = "active";
		}
	}

	function next() {
		index++;
		if(index>spanlist.length) {
			index = 0;
		}
		autoGo();
	}
	function prev() {
		index--;
		if (index<0) {
			container.style.left = -perWidth * spanlist.length + "px";
			index = spanlist.length - 1;
		}
	}
	
	for (var i = 0;i<spanlist.length;i++) {
		spanlist[i].index = i;
		spanlist[i].onclick = function() {
			index = this.index;
			autoGo();
		}
	}
	
	var index = 0;
	var autoTimer = setInterval(next,3000);
	
	wrapper.onmouseover = function() {
		clearInterval(autoTimer);
	}
	wrapper.onmouseout = function() {
		autoTimer = setInterval(next,3000);
	}
	
	
//	返回顶部
	var img4 = document.querySelector(".img4");
	var sooner = 0;
	var aside = document.querySelector(".aside");
	var section = document.querySelector(".section");
	
	img4.onclick = function() {
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var end = 0;
		var change = end - scrollTop;
		var t = 0;
		var maxT = 30;
		sooner = setInterval(function() {
			t++;
			if (t>=maxT) {
				clearInterval(sooner);
			}
//			document.body.scrollTop = change/maxT * t + scrollTop + "px";
//			document.documentElement.scrollTop = change/maxT * t + scrollTop + "px";
			document.body.scrollTop = Tween.Linear(t,scrollTop,change,maxT);
			document.documentElement.scrollTop = Tween.Linear(t,scrollTop,change,maxT);
		},17)
	}

	aside.style.left = section.offsetWidth + section.offsetLeft + 20 + "px";

//合作机构
	var goleft = document.getElementById("goleft");
	var goright = document.getElementById("goright");
	var longe = document.querySelector(".long");
	var oleft = longe.offsetLeft;
	
	goleft.onclick = function() {
		longe.style.left = -oleft + 165 + "px";
	}
	
	var xhr = new XMLHttpRequest();
	var x = location.search;
	var reg1 = /\?/g;
	x = x.replace(reg1,"");
	var t = x;
	var url = "../secondterm/transfer.php";
	xhr.open("get",url);
	xhr.responseType = "json";
	xhr.send(null);
	
//	xhr.onload = function() {
//		lunbo1.src = 
//	}
}





























