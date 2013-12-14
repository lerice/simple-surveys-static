/* 
  register.js
	The event handler function for checking all fields have correct input
	for register.html
*/

function checkForm() {
	var user = document.getElementById("username");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var cpassword = document.getElementById("confirmpassword");
	var fname = document.getElementById("firstname");
	var lname = document.getElementById("lastname");
	var day = document.getElementById("day");
	var month = document.getElementById("month");
	var year = document.getElementById("year");
	var registerForm = document.getElementById("registerForm");
	
	var unfilled = false;
	var unfilledMessage = "The following fields have not been completed:";

	if (user.value == "") {
		unfilled = true;
		unfilledMessage += "\n      - Username";
	}
	if (email.value == "") {
		unfilled = true;
		unfilledMessage += "\n      - Email";
	}
	if (password.value == "") {
		unfilled = true;
		unfilledMessage += "\n      - Password";
	}
	if (cpassword.value == "") {
		unfilled = true;
		unfilledMessage += "\n      - Confirm Password";
	}
	if (fname.value == "") {
		unfilled = true;
		unfilledMessage += "\n      - First Name";
	}
	if (lname.value == "") {
		unfilled = true;
		unfilledMessage += "\n      - Last Name";
	}
	if (day.value == "Day:" || month.value == "Month:" || year.value == "Year:") {
		unfilled = true;
		unfilledMessage += "\n      - Date of Birth";
	}
	if (!registerForm.sex[0].checked && !registerForm.sex[1].checked) {
		unfilled = true;
		unfilledMessage += "\n      - Sex";
	}
	
	//First, make sure all the fields are completed
	if (unfilled) {
		alert(unfilledMessage);
		return false;
	}
	
	//Check if email is proper
	var pos = email.value.search(/\S+@\S+\.\S+/);
	if (pos != 0) {
		alert("Please enter a valid email address (example@live.com).");
		return false;
	}
	
	//Check if passwords match
	if (password.value != cpassword.value) {
		alert("The confirming password does not match the original password.");
		return false;
	}
	
	//Lastly check if the date is valid
	if (day.value == "31") {
		if (month.value == "Feb" || month.value == "Apr" || month.value == "Jun" || month.value == "Sep" || month.value == "Nov") {
			alert("Please enter a valid date.");
			return false;
		}
	}
	if (month.value == "Feb") {
		if (day.value == "30" || day.value == "29" && parseInt(year.value) % 4 != 0) {
			alert("Please enter a valid date.");
			return false;
		}
	}
	
	return true;
}	