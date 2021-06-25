function myFunction() {
  var x = document.getElementById("generalNavBar");
  if (x.className === "menuBar") {
    x.className += " responsive";
  } else {
    x.className = "menuBar";
  }
}
