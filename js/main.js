// https://codepen.io/g13nn/pen/eHGEF


$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
$( ".menu" ).slideToggle( "slow", function() {
});
});

$( ".cross" ).click(function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
$( ".menu" ).slideToggle( "slow", function() {
});
});

});
