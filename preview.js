/* 
  preview.js
	Javascript for creating my survey page
*/

var parameters = location.search.substring(1).split("&"); 
var nQ = parameters[0].split("=")[1];
var count = 1;
	
function makeForm() {
	for (var i = 1; i <= nQ; i++) {
		document.write("<p style = 'font-size: 12px; text-align: right'><i>Question " + i + "</i></p>");
		
		var temp = unescape(parameters[count].split("=")[1]);
		temp = temp.split("+");
		temp = temp.join(" ");
		document.write("<p><b>" + temp + "</b></p>");
		count++;
		
		for (var j = 1; j <= 5; j++) {
			temp = unescape(parameters[count].split("=")[1]);
			temp = temp.split("+");
			temp = temp.join(" ");
			if (temp != "") {
				document.write("<p><input type = 'radio' name = 'q" + i + "' value = 'a" + i + "-" + j + "' /> " + temp + "</p>");
			}
			count++;
		}
	}
	return true;
}	