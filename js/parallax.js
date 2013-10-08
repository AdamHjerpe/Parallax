$(document).ready(function() {
  $(window).bind('scroll', function(e) {
    parallax();
  });
});

function parallax() {
  var scrollPosition = $(window).scrollTop();
  $('#grid').css('top',(0 - (scrollPosition * 0.4))+'px' );
  // Targets #grid, manipulates css, attribute: value
}