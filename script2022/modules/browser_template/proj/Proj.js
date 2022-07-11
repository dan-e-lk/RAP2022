console.log("connected")


//menu button events
$(".menu").click(function(){
	$(this).addClass("selected")
	$(".menu").not(this).removeClass("selected")
})


$("#proj_map").on("click", function(){
	$(".tab").hide()
	$(".proj_map").fadeIn(200)
})

$("#summary").on("click", function(){
	$(".tab").hide()
	$(".summary").fadeIn(200)
})

$("#processed_data").on("click", function(){
	$(".tab").hide()
	$(".processed_data").fadeIn(200)
})


$("#pictures").on("click", function(){
	$(".tab").hide()
	$(".pictures").fadeIn(200)
})

$(".sfl").find("th").css({"background-color":"#654321"});

// Leaflet scripts

/*L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);*/

L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Google © <a href="https://www.google.com/maps">Google Maps</a>',
	subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mymap);
