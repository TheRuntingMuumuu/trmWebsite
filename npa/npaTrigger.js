// This document is the thing that will allow the NPA to be activated easily from the index, through a Konami code

// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  alert("Welcome to the NPA");
  window.open("npa/npalog.html",'_blank');
}

//THIS IS NOT MY CODE. IT WAS TAKEN FROM https://stackoverflow.com/a/31627191/9654083

function isTouchDevice() { return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);} //https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript#comment27386557_13470899

if (isTouchDevice()) {
$('.invisbutton').css('pointer-events', 'auto') //https://stackoverflow.com/a/5753780/9654083, requires jquery
}
