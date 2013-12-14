/* 
  contactus.js
	The event handler function for checking all fields have correct input
	for register.html
*/

function checkForm() {
	//Check if email is proper
	var pos = document.getElementById("email").value.search(/\S+@\S+\.\S+/);
	if (pos != 0) {
		alert("Please enter a valid email address (example@live.com).");
		return false;
	}
	alert("Thank you for reaching out to us!\n\nIf your message collects sufficient kudos, we'll be sure to email you back!");
	return true;
}	