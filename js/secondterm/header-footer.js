window.onload = function() {
	var locate = document.getElementById("locate");
	var selectlocate = document.querySelector(".selectlocate");
	var liList = document.querySelectorAll(".selectlocate li");
	
	var flag = true;
	locate.addEventListener("click",function() {
		if (flag == true) {
			locate.style.borderBottomColor = "white";
			locate.style.zIndex = 200;
			locate.style.backgroundPosition = "36px -610px";
			selectlocate.style.display = "block";
			flag = false;
		}else {
			locate.style.borderBottomColor = "#e0e0e0";
			locate.style.backgroundPosition = "36px -593px";
			selectlocate.style.display = "none";
			flag = true;
		}
	},false)
	
	for (var i = 0;i<liList.length;i++) {
		liList[i].index = i;
		liList[i].onclick = function() {
			locate.innerHTML = this.innerText;
			locate.style.borderBottomColor = "#e0e0e0";
			locate.style.backgroundPosition = "36px -593px";
			selectlocate.style.display = "none";
			flag = true;
		}
	}
}
