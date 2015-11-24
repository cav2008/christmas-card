$(document).ready(function() {

    // Getting the height and width value of the browser window
    var height = window.innerHeight,
        width = window.innerWidth;

    // Setting the height and width of the main element
    $('.scene').height(height)
        .width(width);

    // turn off parallax if it is firefox because of lag
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (is_firefox) {
        console.log('firefox true');
        $('.layer').data('depth', 0);
    }

    // Starting up parallax.js
    var $scene = $('.scene').parallax();

    console.log(height, width);

    // Starting up snowfall
    $('.scene').snowfall({
        flakeCount: 100,
        maxSpeed: 10,
        maxSize: 8,
        round: true
    });

    // Start music
    var audio = new Audio('sound/theme.mp3');
    audio.play();

    // Set name
    var name = window.location.href.slice(window.location.href.indexOf('?') + 1);
    console.log(name);

    $('.name').text(name);

});
