$(document).ready(function() {

    // Event listener to resize when screen changes styles
    $(window).resize(function() {
        calculateHeight();
    });

    /**
     * Function to calculate height of the parallax scene
     * and error message
     */
    function calculateHeight() {
        // Getting the height and width value of the browser window
        var height = window.innerHeight,
            width = window.innerWidth;

        // Setting the height and width of the main element
        $('.scene').height(height)
            .width(width);

        // Setting height and width of error message
        $('.error-message').height(height)
            .width(width);
    }

    calculateHeight();

    // turn off parallax if it is firefox because of lag
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if (is_firefox) {
        $('.layer').data('depth', 0);
    }

    // Starting up parallax.js
    var $scene = $('.scene').parallax();

    // Starting up snowfall
    $('.scene').snowfall({
        flakeCount: 150,
        maxSpeed: 8,
        maxSize: 11,
        round: true
    });

    // Start music
    var audio = new Audio('sound/theme.mp3');
    audio.play();

    // Set name
    if (window.location.href.indexOf('?') > -1) {
        var name = window.location.href.slice(window.location.href.indexOf('?') + 1);

        $('.name').text(name);
    }
});
