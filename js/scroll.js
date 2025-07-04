//var elementVisible = 150;
//responWid();
//
//function reveal() {
//	var reveals = document.querySelectorAll(".reveal");
//
//	for (var i = 0; i < reveals.length; i++) {
//		var windowHeight = window.innerHeight;
//		var elementTop = reveals[i].getBoundingClientRect().top;
//		
//		if (elementTop < windowHeight - elementVisible) {
//			reveals[i].classList.add("active");
//		} 
//	}
//}
//
//window.addEventListener("scroll", reveal);
//window.addEventListener("load", reveal);
//
//$(window).resize(function() {
//	responWid();
//});
//
//function responWid() {
//	var windowWidth = $( window ).width();
//	if(windowWidth < 480) {
//		elementVisible = 50;
//	}else if(windowWidth >= 480 && windowWidth < 992) {
//		elementVisible = 100;
//	}else {
//		elementVisible = 150;
//	}
//}

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.reveal'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

