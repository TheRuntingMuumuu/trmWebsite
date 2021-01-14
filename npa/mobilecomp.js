function isTouchDevice() { return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);} //https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript#comment27386557_13470899

if (isTouchDevice()) {
$('.invisbutton').css('pointer-events', 'auto') //https://stackoverflow.com/a/5753780/9654083, requires jquery
}
