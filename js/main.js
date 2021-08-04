//Hamburger Menu
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


// Accordion menu
// https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// Light Swith effect
// Turns the lights on/off for left aside element to reveal/conceal the
// Infographic
// Code source: http://net-informations.com/jq/iq/hide.htm
$('#reveal').click(function(){
  $('#black').toggle();
});
