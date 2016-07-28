window.onload = function() {
	var showpic = document.getElementById("showpic");
	var uimgs = document.querySelectorAll(".list img");
	var tablist = document.querySelectorAll(".tabswitch li");
	var upblock = document.getElementById("upblock");
	var oneWidth = tablist[0].offsetWidth;
	var contentlist = document.querySelectorAll(".yes > div");
	var pageList = document.querySelectorAll(".pages li");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var dropbox = document.querySelector(".dropbox");
	var dropboxList = document.querySelectorAll(".dropbox-on li");
	var dropboxOn = document.querySelector(".dropbox-on");
	var close = document.getElementById("close");
	var appoint = document.querySelector(".appoint");
	var appointment = document.querySelector(".appointment");
	var mask = document.querySelector(".mask");
	var confirm = document.getElementById("confirm");
	var cancel = document.getElementById("cancel");
	
	for (var i = 0; i < uimgs.length; i++) {
		uimgs[i].index = i;
		uimgs[i].onclick = function() {
			showpic.src = this.src;
		}
	}
	
	for (var i = 0; i < tablist.length; i++) {
		tablist[i].index = i;
		tablist[i].onclick = function() {
			for (var j = 0;j<contentlist.length;j++) {
				tablist[j].className = "";
				contentlist[j].style.display = "none";
			}
			this.className = "showtime";
			contentlist[this.index].style.display = "block";
			upblock.style.left = this.index * oneWidth + "px";
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
	
	var flag = true;
	dropbox.onclick = function() {
		if (flag) {
			dropbox.style.backgroundPosition = "240px -582px";
			dropboxOn.style.display = "block";
			cancel.style.display = "none";
			confirm.style.display = "none";
			flag = false;
		}else {
			dropboxOn.style.display = "none";
			dropbox.style.backgroundPosition = "240px -564px";
			cancel.style.display = "block";
			confirm.style.display = "block";
			flag = true;
		}
		
	}
	
	for (var i = 0; i < dropboxList.length; i++) {
		dropboxList[i].index = i;
		dropboxList[i].onclick = function() {
			dropbox.innerHTML = this.innerHTML;
			dropboxOn.style.display = "none";
			dropbox.style.backgroundPosition = "240px -564px";
			cancel.style.display = "block";
			confirm.style.display = "block";
			flag = true;
		}
	}
	
	close.onclick = function() {
		appoint.style.display = "none";
		mask.style.display = "none";
	}
	
	appointment.onclick = function() {
		appoint.style.display = "block";
		mask.style.display = "block";
	}
	
	confirm.onclick = function() {
		appoint.style.display = "none";
		mask.style.display = "none";
	}
	
	cancel.onclick = function() {
		appoint.style.display = "none";
		mask.style.display = "none";
	}
}
