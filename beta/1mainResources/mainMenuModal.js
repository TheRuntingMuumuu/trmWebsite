var modal = document.getElementById("menuBoxModal");
var btn = document.getElementById("mainMenuModalButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
