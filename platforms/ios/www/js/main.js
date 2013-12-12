document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$("#instaLink").on("click", newFn);
	
}; // phonegap deviceready

	var newFn = function(){
		console.log("Firing!");
		var url = "https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351&access_token=37026479.f59def8.473e0665cc5b469e9d492070a0fd1da8";
	      $.getJSON (url, newPage);
	      };     // end of function            

	    var newPage = function (info) {
	        
	        alert("Instagram Works!!");
			console.log(info);
	        
	        $.each(info.data, function (index, photo) {
	               var pic = "<li><img src='" + photo.images.standard_resolution.url + "'alt='" + photo.user.id +"' /><h4>" + " <em>" + photo.user.username +"</em></h4></li>";
	               
	            $("#page2li").append(pic);
	         }); // end of each
	     };  
	
   
	   
	                   
  