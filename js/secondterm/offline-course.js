var topList = document.querySelectorAll(".top li");
var bottomList = document.querySelectorAll(".bottom li");
var validateList = document.querySelectorAll(".validate li");
var colorBlock = document.getElementById("colorblock");
var lPerwidth = validateList[0].offsetWidth;
var pageList = document.querySelectorAll(".pages li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

for (var i = 0; i < topList.length; i++) {
	topList[i].index = i;
	if (i != 0 && i != 1) {
		topList[i].onclick = function() {
			for (var j = 0; j < topList.length; j++) {
				topList[j].className = "";
			}
			this.className = "active";
		}
	}
}
for (var i = 0; i < bottomList.length; i++) {
	bottomList[i].index = i;
	if (i != 0 && i != 1) {
		bottomList[i].onclick = function() {
			for (var j = 0; j < bottomList.length; j++) {
				bottomList[j].className = "";
			}
			this.className = "active";
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
























