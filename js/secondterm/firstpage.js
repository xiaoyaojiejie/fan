window.onload = function() {
	var container = document.querySelector(".container");	
	var xhr = new XMLHttpRequest();
	var url = "../secondterm/transfer.php";
	xhr.open("get",url,true);
	xhr.send(null);
	xhr.onload = function() {
		var index = xhr.responseText.indexOf("<script type=");
		var result = xhr.responseText.substring(0,index);
		result = JSON.parse(result);
		console.log(result);
		for (var t = 0; t < 3; t++) {
			
			var content = '<a href="'+result[t].link+'">'+
							'<img src="'+result[t].img+'" alt="" />'+
						'</a>';
					
			container.innerHTML += content;
		}
		var imglist = document.querySelectorAll(".container img");
		var a = document.createElement("a");
		var cloneFirst = imglist[0].cloneNode();
		a.href = "javascript:void(0);";
		a.appendChild(cloneFirst);
		container.appendChild(a);
	}

	var spanlist = document.querySelectorAll("#pagination span");
	var wrapper = document.querySelector(".wrapper");
//	轮播图
	
	var perWidth = 980;

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
		longe.style.left = oleft + 165 + "px";
	}
	

}





























