function mainButton() {
  hideAll(); $('.mainWindow').show(); //To hide all the windows and then to show the one selected
  CurrentIframeThingy = 1; //For the reload button, the 1 makes it so it will not work (no iframe to reload)
  $('.reload').hide(); //hide the reload button for this window (since it will not work)
  currentWindow = "main"; //For the future (identifies all windows, no use case yet, but maybe useful in future???)
  document.getElementById("windowSpecificMenu").innerHTML = "";//This text will appear at the left of the screen. IDK What I will add here, but it will be something.
}

function securityButton() {
  hideAll(); $('.securityWindow').show();
  CurrentIframeThingy = "security";
  $('.reload').show(); //Show the reload button for this window (since it will work)
  currentWindow = "security";
}

function todoButton() {
  hideAll(); $('.todoWindow').show();
  CurrentIframeThingy = 'todoi';
  $('.reload').show(); //Show the reload button for this window (since it will work)
  currentWindow = "todo";
}

function qrScanButton() {
  hideAll(); $('.qrScanWindow').show();
  CurrentIframeThingy = 1;
  $('.reload').hide(); //hide the reload button for this window (since it will not work)
  currentWindow = "qrscan";
}

function qrMakeButton() {
  hideAll(); $('.qrCodeWindow').show();
  CurrentIframeThingy = 1;
  $('.reload').hide(); //hide the reload button for this window (since it will not work)
  currentWindow = "qrmake";
}

function linksButton() {
  hideAll(); $('.linksWindow').show();
  CurrentIframeThingy = 1;
  $('.reload').hide(); //hide the reload button for this window (since it will not work)
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
