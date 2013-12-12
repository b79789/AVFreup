/*  Name: Brian Stacks
	Date:11-27-13
	Class: AVF
	Instructor: McCarrick
*/


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
	$("#nav-camera").on("click", cameraFn);
	$("#nav-instagram").on("click", instagramFn);
	$("#instaCam").on("click",newCamFn);

}; // phonegap deviceready
var cameraFn = function() {
	//load camera immediately? load buttons first?

}; // end cameraFn
var instagramFn = function() {
	//check for connection? load data?
};// end instagramFn
	
	
var newCamFn = function(){
	
	


};

$(function(){
	var tag = "maps";
	var url = "https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=37026479.f59def8.473e0665cc5b469e9d492070a0fd1da8";
	$.getJSON(url, newPage);
});     // end of function


/* tried twitter api with no avail

$(function(){
	var url2 = "http://api.twitter.com/1.1/geo/reverse_geocode.json?lat=37.76893497&long=-122.42284884";
	$.getJSON(url2, newPage2);
});     // end of function
*/

var create = function(){

};
var newPage = function(info){
	alert("You're here!");
	console.log(info);
	$("#instaLink").on("click", create);
	
	
	$.each(info.data, function(index, photo){
		var pic = "<li><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id +"' /><h4>" + " <em>" + photo.user.username +"</em></h4></li>";
		
		$("#page2li").append(pic);
	}); // end of each
	
}; // end of newPage fn

// Enable the visual refresh
google.maps.visualRefresh = true;

var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(35.662875,-81.223297)
  };
  map = new google.maps.Map($("#googleMaps"),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("googleMap");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}

/* code that failed

var create2 = function(){
	$("#page3").html("<h2>Results: </h2>");
};
	
var newPage2 = function(info){
	alert("You're here too!");
	console.log(info);
	$("#twitLink").on("click", create2);
	
	
	$.each(info.data, function(index, photo){
		var pic = "<li><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id +"' /><h4>" + " <em>" + photo.user.username +"</em></h4></li>";
		
		$("#page2li").append(pic);
	}); // end of each
	
}; // end of newPage fn*/
$(function(){
	var geoUrl = "http://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=true";
	$.getJSON(geoUrl, newPage3);
});

var create3 = function(){
	$("h1p3").append('<h1>Google Geo Cords</h1>');
};
var newPage3 = function(data){
	alert("You're GEO!");
	console.log(data);
	$("#twitLink").on("click", create3);
	
	
	$.each(data.results, function(index, address){
		var pic3 = "<li><h4>" + " <em>" + address.address_components[1].long_name +"</em></h4></li>";
		
		$("#page3li").append(pic3);
	}); // end of each
	
}; // end of newPage3 fn