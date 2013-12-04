document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
	$("#nav-camera").on("click", cameraFn);
	$("#nav-instagram").on("click", instagramFn);
	$("#instaCam").on("click",newCamFn);

}; // phonegap deviceready
var cameraFn = function() {
	//load camera immediately? load buttons first?
	console.log("here");
}; // end cameraFn
var instagramFn = function() {
	//check for connection? load data?
};// end instagramFn
	
	
var newCamFn = function(){
	
	


};

