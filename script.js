function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
function productWindow() {
	var x = document.getElementById("product");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var counter = 1;

setInterval(function(){
	document.getElementById("radio" + counter).checked = true;
	counter++;
	if(counter > 3){
		counter = 1;
	}
}, 7000);