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
}
