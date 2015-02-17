$(document).ready(function() {

    // Getting the height and width value of the browser window
    var height = window.innerHeight,
        width = window.innerWidth;

    //Setting the height and width of the main element
    $('.scene').height(height)
        .width(width);

    // Starting up parallax.js
    $('.scene').parallax();

    console.log(height, width);
});
