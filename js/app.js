$(document).ready(function() {

	var height = window.innerHeight,
	    width = window.innerWidth;

	$('#scene').height(height)
		.width(width);
	
	$('#scene').parallax();

	console.log(height, width);
	console.log($('#scene'));
});
