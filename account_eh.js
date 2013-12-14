/* 
  account_eh.js
	Register the event handlers for account.html
*/

document.getElementById("loginForm").onsubmit = displayError;

function displayError() {
	alert("Sorry, Simple Surveys is still under construction!");
	return false;
}