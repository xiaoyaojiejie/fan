window.onload = function() {
	var container = document.querySelector(".container");
	var imglist = document.querySelectorAll(".container img");
	var spanlist = document.querySelectorAll("#pagination span");
	var wrapper = document.querySelector(".wrapper");
	
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
	var aside = document.querySelector("aside");
	var section = document.querySelector("section");
	
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
//	var comList = document.querySelectorAll(".com > a");
//	var longList = document.querySelectorAll(".long li");
//	var longe = document.querySelector(".long");
//	var clone = longList[0].cloneNode();
//	longe.appendChild(clone);
//	var iconPerwidth = longList[0].offsetWidth;
//	var finder = 0;
//	var uLeft = longe.offsetLeft;
//	for (var i =0;i<comList.length;i++) {
//		comList[i].index = i;
//		if (index == 0) {
//			this.onclick = function() {
//					uLeft = uLeft + iconPerwidth ;
//			
//			}
//	}
//}
}





























