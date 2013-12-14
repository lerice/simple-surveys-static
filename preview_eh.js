/* 
  preview_eh.js
	Register the event handlers for account.html
*/

document.getElementById("previewForm").onsubmit = displayError;

function displayError() {
	alert("Sorry, Simple Surveys is still under construction!");
	return false;
}