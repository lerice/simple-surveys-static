/* 
  createasurvey2.js
	Javascript for creating my survey page
*/

var nQ = location.search.substring(1).split("=")[1];

function makeForm() {
	document.write("<input type = 'hidden' name = 'nQ' value = '" + nQ + "' />");

	for (var i = 1; i <= nQ; i++) {
		document.write("<p style = 'font-size: 18px'>Question " + i + "</p>");
		document.write("<p>Question: <textarea name = 'q" + i + "' rows = '4' cols = '34' style = 'resize: none; font-size: 14px; font-family: Arial; margin-left: 33px; vertical-align: top'></textarea></p>");
		for (var j = 1; j <= 5; j++) {
			document.write("<p>Answer " + j + ": <input type = 'text' name = 'a" + i + "-" + j + "' size = '38' style = 'margin-left: 30px'/></p>");
		}
		document.write("<br />");
	}
	return true;
}	