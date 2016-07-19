
	var oDiv = document.getElementById("div");
	var aImg = oDiv.getElementsByTagName("img");
	for (var i = 0; i < aImg.length; i++) {
		aImg[i].style.height = aImg[i].offsetWidth*257/318+"px"; 
	}
