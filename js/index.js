
$( document ).ready(function() {
    $('.illo-wrapper').tilt({
    maxTilt:        20,
perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
scale:          .9,      // 2 = 200%, 1.5 = 150%, etc..
speed:          1000,    // Speed of the enter/exit transition.
transition:     true,   // Set a transition on enter/exit.
disableAxis:    null,   // What axis should be disabled. Can be X or Y.
reset:          true,   // If the tilt effect has to be reset on exit.
glare:          false,  // Enables glare effect
maxGlare:       1       // From 0 - 1.
    })
});