console.log('yep');


// var quotes = [
//   '"The Way To Get Started Is To Quit Talking And Begin Doing."',
//   '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
//   '"Don&rsquo;t Let Yesterday Take Up Too Much Of Today."',
//   '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
//   '"It&rsquo;s Not Whether You Get Knocked Down, It&rsquo;s Whether You Get Up."'
// ];
var quotes = [
  '"A desire to be part of building a business that would be positioned to take advantage of a transformation in the financial services industry."',
  '"I joined TWM because I wanted to work on an innovative solution to a very challenging problem, with a small and highly skilled group of people."',
  '"I understand the value added by blockchains and saw an opportunity to bring it to realworld financial systems."',
  '"I joined TradeWind with the belief that technology will unlock huge, unrealized potential for Gold as a foundational asset in the global financial system!"',
  '"To expand my horizons. To learn and build new stuff."',
  '"The opportunity to combine creativity, technology, and domain expertise to shape part of the global financial market infrastructure."',
  '"Push myself out of comfort and content zone, and help a promising company set up financial system with my knowledge and experience."',
  '"To expand my horizons, collaborate from brilliant minds, and contribute to something truly innovative."',
  '"Really smart, motivated people working on a solid business model with cutting edge technology."',
  '"Opportunity to make an impact in an area that is professionally exciting for me, and do so on a high-performing, well resourced team with which I have shared values."'
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