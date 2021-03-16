//DashBoard
//https://flaviocopes.com/how-to-create-multiline-string-javascript/
var Misc = `<p>You are the misc person, you have nothing special to do! Just do what is needed.<br>Current Project: <b>Securing the base</b></p>`;
var Secu = `<p>Your project is <a href="#se">Security</a>. Work on it!<br>Or maybe work on the NPA website.`;

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


