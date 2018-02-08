/*!
 * fresh-build
 * fresh-build
 * https://aaronadler.com
 * @author Aaron Adler
 * @version 1.0.0
 * Copyright 2018. MIT licensed.
 */
// (function ($, window, document, undefined) {

//   'use strict';

//   $(function () {
//     // fresh-build
//   });

// })(jQuery, window, document);


var masterTl = new TimelineMax(
  {paused: false,
  // repeat:-1, //looping
  repeat:0,
  delay: 0,
  onComplete: function() {}
  }
).timeScale(1.25);

var masterTl2 = new TimelineMax(
  {paused: false,
  // repeat:-1, //looping
  repeat:0,
  delay: 0,
  onComplete: function() {}
  }
).timeScale(1.25);

// var allCubes = document.getElementById('allCubes');
// allCubes.style.fill = "white";

var svgLogo = document.getElementById('svgLogo');
var svgLogo2 = document.getElementById('svgLogo2');
svgLogo.style.fill = "white";
svgLogo2.style.fill = "white";


// FROM animation = SET UP THE STARTING POINT (USUALLY INVISIBLE, to animate INTO visibility)
masterTl
.staggerFromTo(
["#cube1", "#cube2", "#cube3", "#cube4", "#cube5"],
0.25,                             // DURATION OF ANIMATION (OPACITY FADE)
{autoAlpha: 0},{autoAlpha: 1}, // POSITION
0.15                             //**STAGGERDELAY
)

.to(["#cube1", "#cube2", "#cube3", "#cube4", "#cube5"], 1, {x:'-=355',ease:Expo.easeInOut} )

.staggerFromTo(
["#T", "#R", "#A", "#D1", "#E", "#W", "#I", "#N", "#D2"],
0.5,                             // DURATION OF ANIMATION (OPACITY FADE)
{autoAlpha: 0},{autoAlpha: 1}, // POSITION
.05                             //**STAGGERDELAY
);


masterTl2
.staggerFromTo(
["#cube1-footer", "#cube2-footer", "#cube3-footer", "#cube4-footer", "#cube5-footer"],
0.25,                             // DURATION OF ANIMATION (OPACITY FADE)
{autoAlpha: 0},{autoAlpha: 1}, // POSITION
0.15                             //**STAGGERDELAY
)

.to(["#cube1-footer", "#cube2-footer", "#cube3-footer", "#cube4-footer", "#cube5-footer"], 1, {x:'-=355',ease:Expo.easeInOut} )

.staggerFromTo(
["#T-footer", "#R-footer", "#A-footer", "#D1-footer", "#E-footer", "#W-footer", "#I-footer", "#N-footer", "#D2-footer"],
0.5,                             // DURATION OF ANIMATION (OPACITY FADE)
{autoAlpha: 0},{autoAlpha: 1}, // POSITION
.05                             //**STAGGERDELAY
);








// CSS-STYLE HOVER EFFECT in GSAP:

// var svgLogo  = document.querySelector('#svgLogo');

svgLogo.addEventListener("mouseenter", function() {
TweenMax.to(svgLogo, 0.1, {fill: "#1A9AFC", ease: Linear.easeNone});
});

svgLogo.addEventListener("mouseleave", function() {
TweenMax.to(svgLogo, 0.1, {fill: "white", ease: Linear.easeNone});
});



//Pull in buttom

// Wire up button with onclick (button-->onclick-->animation)
svgLogo.onclick = function(){
// On click, RESTART
masterTl.restart();
//*THEN* PLAY
masterTl.play();
};

svgLogo2.onclick = function(){
// On click, RESTART
masterTl2.restart();
//*THEN* PLAY
masterTl2.play();
};




//Pull in button
// var animBtn = document.getElementById("animBtn");

// *** HERE'S WORKING VERSION 1: uses 'onclick' method
// animBtn.onclick = function(){
// masterTl.restart();
// // masterTl.play(); NOT NEEDED
// };

//Place GSAP in a function
// function play2(){
// masterTl.restart();
// };


// *** HERE'S WORKING VERSION 2: BETTER because it uses 'addEventListener'!!!
//     Add a listener, an event, the GSAP function
// animBtn.addEventListener("click", play2);

// CHECKLIST:
// CHECKLIST:
// CHECKLIST:
// 1. GSAP TIMELINE Animation
// 2. Pulled-in button/trigger element (by class/id/tag)
// 3. Wrap the GSAP in a named function
// 4. addEventListener, event, function 