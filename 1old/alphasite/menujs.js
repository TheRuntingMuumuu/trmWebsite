function responsiveMenuBar() {
  var x = document.getElementById("menuBarResponsive");
  if (x.className === "menuBar") {
    x.className += " Responsive";
  } else {
    x.className = "menuBar";
  }
}
