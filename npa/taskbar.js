function mainButton() {
  hideAll(); $('.mainWindow').show(); //To hide all the windows and then to show the one selected
  CurrentIframeThingy = 1; //For the reload button, the 1 makes it so it will not work (no iframe to reload)
  currentWindow = "main"; //For the future (identifies all windows, no use case yet, but maybe useful in future???)
  document.getElementById("windowSpecificMenu").innerHTML = "New text inside the text element!";
}

function securityButton() {
  hideAll(); $('.securityWindow').show();
  CurrentIframeThingy = "security";
  currentWindow = "security";
  document.getElementById("windowSpecificMenu").innerHTML = "Security <a class='linkCursorr' onclick=''>hi</a>";

}

function todoButton() {
  hideAll(); $('.todoWindow').show();
  CurrentIframeThingy = 'todoi';
  currentWindow = "todo";
}

function qrScanButton() {
  hideAll(); $('.qrScanWindow').show();
  CurrentIframeThingy = 1;
  currentWindow = "qrscan";
}

function qrMakeButton() {
  hideAll(); $('.qrCodeWindow').show();
  CurrentIframeThingy = 1;
  currentWindow = "qrmake";
}

function linksButton() {
  hideAll(); $('.linksWindow').show();
  CurrentIframeThingy = 1;
  currentWindow = "links";
}

function lockButton() {
  passMode = 'lock';
  $('.login').show();
}

function userPassButton() {
  passMode = 'full';
  $('.login').show();
}
