document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$("#nav-camera").on("click", cameraFn);
	$("#nav-instagram").on("click", instagramFn);
	$("#nav-compass").on("click", compassFn);
	//etc...
}; // phonegap deviceready
var cameraFn = function() {
	//load camera immediately? load buttons first?
}; // end cameraFn
var instagramFn = function() {
	//check for connection? load data?
};// end instagramFn
var compassFn = function() {
	//do something
};// end compassFn