//DashBoard
//https://flaviocopes.com/how-to-create-multiline-string-javascript/
var Misc = `<p>You are the misc person, you have nothing special to do! Just do what is needed.<br>Current Project: <b>Securing the base</b></p>`;
var Secu = `<p>Your project is <a href="#se">Security</a>. Work on it!<br>Or maybe work on the NPA website.`;
var Defence = '<p>You are the defence person, your job is to defend the base from parents and intruders.</p>';

//Trash
function hideAll() {//Hides all Windows because they - especially 10 - NEED hiding
  $('.mainWindow').hide();
  $('.securityWindow').hide();
  $('.qrScanWindow').hide();
  $('.qrCodeWindow').hide();
  $('.todoWindow').hide();
  $('.linksWindow').hide();
}
function ReloadFrameEh(currentId) {
        if (currentId == 1) {
                alert("You're not in an iframe!");return false}
        document.getElementById(currentId).src = document.getElementById(currentId).src; //won't work if it has a hash in it. https://stackoverflow.com/questions/86428/what-s-the-best-way-to-reload-refresh-an-iframe
        console.log("finished windows");}

function loadFile(filePath) {//https://stackoverflow.com/a/41133213/9654083
  result = null;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
        if (result === null || xmlhttp.status != 200) {
                alert("Fatal error - aborting!");for (;;) {void(0)}}
  return result;
}
