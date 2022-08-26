console.log("connected")


//menu button events
$(".menu").click(function(){
	$(this).addClass("selected")
	$(".menu").not(this).removeClass("selected")
})


$("#datamenu").on("click", function(){
	$(".tab").hide()
	$(".data").fadeIn(200)
})

$("#dashboardmenu").on("click", function(){
	$(".tab").hide()
	$(".dashboard").fadeIn(200)
})

$("#docmenu").on("click", function(){
	$(".tab").hide()
	$(".doc").fadeIn(200)
})





//Leaflet codes
var mymap = L.map('mapid', {scrollWheelZoom: false}).setView([47.85, -81.7241], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);

var greenIcon = new L.Icon({
  iconUrl: 'lib/marker-icon-2x-green.png',
  shadowUrl: 'lib/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var goldIcon = new L.Icon({
  iconUrl: 'lib/marker-icon-2x-gold.png',
  shadowUrl: 'lib/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'lib/marker-icon-2x-red.png',
  shadowUrl: 'lib/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

