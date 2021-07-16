function myFunction() {
  var x = document.getElementById("esoNavBar");
  if (x.className === "menuBar") {
    x.className += " responsive";
  } else {
    x.className = "menuBar";
  }
}
