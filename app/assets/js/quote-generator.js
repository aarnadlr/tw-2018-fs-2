/*!
 * Tradewind Markets
 * Tradewind Markets: Creating a simple, secure and efficient physical gold market
 * https://tradewindmarkets.com
 * @author Aaron Adler
 * @version 1.0.0
 * Copyright 2018. none licensed.
 */
console.log('yep');


var quotes = [
  '"The Way To Get Started Is To Quit Talking And Begin Doing."',
  '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
  '"Don&rsquo;t Let Yesterday Take Up Too Much Of Today."',
  '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
  '"It&rsquo;s Not Whether You Get Knocked Down, It&rsquo;s Whether You Get Up."'
];


var quoteDiv = document.getElementById('quoteDiv');


function newQuote() {
  var randomNum = Math.floor(Math.random()*(quotes.length));
  document.getElementById('quoteDiv').innerHTML = quotes[randomNum];
}

// NOT USING BECAUSE IT HAS A WEIRD JANK AT THE BEGINING
// function unfade(element) {
//   var op = 0.1;  // initial opacity
//   element.style.display = 'block';
//   var timer = setInterval(function () {
//       if (op >= 1){
//           clearInterval(timer);
//       }
//       element.style.opacity = op;
//       element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//       op += op * 0.1;
//   }, 10);
// }

// unfade(quoteDiv);
// newQuote();

//////

$("#quoteDiv").hide();
newQuote();
$("#quoteDiv").fadeIn(1500);

///////

// ON WINDOW LOAD #1:
// document.addEventListener("DOMContentLoaded", someFunction);

// ON WINDOW LOAD #2:
// window.onload = function() {
//   alert('Page loaded');

//   // image is loaded at this time
//   alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
// };





// (function($) {
//     $.fn.invisible = function() {
//         return this.each(function() {
//             $(this).css("visibility", "hidden");
//         });
//     };
//     $.fn.visible = function() {
//         return this.each(function() {
//             $(this).css("visibility", "visible");
//         });
//     };
// }(jQuery));

// $("#quoteDiv").invisible();
// $("#quoteDiv").visible();





// $.fn.visibilityToggle = function() {
//   return this.css('visibility', function(i, visibility) {
//       return (visibility == 'visible') ? 'hidden' : 'visible';
//   });
// };