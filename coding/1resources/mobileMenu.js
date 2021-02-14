function myFunction() {
  var x = document.getElementById("codingNavBar");
  if (x.className === "menuBar") {
    x.className += " responsive";
  } else {
    x.className = "menuBar";
  }
}
