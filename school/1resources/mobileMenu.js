function myFunction() {
  var x = document.getElementById("schoolNavBar");
  if (x.className === "menuBar") {
    x.className += " responsive";
  } else {
    x.className = "menuBar";
  }
}
