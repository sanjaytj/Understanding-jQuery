/*
$(document).ready(function() { // When the jQuery lib is reade then, the callback function is executed || Used when jQuery is in the head of HTML

    $("h1").css("color", "white");
});
*/

$("h1").css("color", "white"); //adding css property to Js using jQuery

$("h1").addClass("big-title margin-50") // adding 2 css clases 

$("h1").text("Bye") //changes the Text on h1

$("button").text("Don't Click") // changes text on all buttons 

$("button").html("<em>Hey</em>") //adding html using jQuery

console.log($("img").attr("src")); //used to GET the image attribute

$("a").attr("href", "http://www.github.com"); //SET a value to the href

console.log($("h1").attr('class')); // GET's the class associated with h1

$("button").click(function(){ //When clicked on a button
    $("h1").css('color', 'purple'); // Add EventListener to h1 on click
})
//simalarly in Vanilla Js
/* 
for(var i = 0; i < 5; i++){
    document.querySelectorAll('button').addEventListener('click', function() {
        document.querySelector('h1').style.color = "purple";
    });
}
*/ 
// Performs exactly the same as what the above jQuery performs

$('input').keypress(function(event) {
    console.log(event.key);
    $('h1').text(event.key); // add EventListner to change h1 on keypress
})

$('h1').on('mouseover', function() {
    $('h1').css('color', 'yellow') // on mouseover change color of h1
})

$('h1').before('<button>before</button>'); //add a new button before h1
$('h1').after('<button>After h1</button>'); //add a new button after h1
$('h1').prepend('<button>prepend</button>'); //new button right before h1
$('h1').append('<button>append</button>'); //new button right after h1

// $('button').remove(); // removes all buttons in the page

/* 
$('button').on('click', function() {
    $('h1').toggle(); // toggles between hide/show h1 on click
})
*/

/*
$('button').on('click', function() {
    $('h1').fadeToggle(); // toggles between fade hide/show h1 on click
}) //fadeOut and fadeIn
*/

/*
$('button').on('click', function() {
    $('h1').slideToggle(); // toggles between slide hide/show h1 on click
}) //slideUp and slideDown
*/

/*
$('button').on('click', function() {
    $('h1').animate({opacity: 0.5}); // adding custom animation
}) //have to stick to things which have a neumeric value
*/

$('button').on('click', function() {
    $('h1').slideUp().slideDown().animate({opacity: 0.5}); // toggles between slide hide/show h1 on click
}) 
//https://www.w3schools.com/jquery/jquery_ref_effects.asp