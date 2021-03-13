console.log("windows");
function ReloadFrameEh(currentId) {
	if (currentId == 1) {
		alert("You're not in an iframe!");return false}
	document.getElementById(currentId).src = document.getElementById(currentId).src; //won't work if it has a hash in it. https://stackoverflow.com/questions/86428/what-s-the-best-way-to-reload-refresh-an-iframe
	console.log("finished windows");}
