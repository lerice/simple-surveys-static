/* 
  onload.js
	Javascript for dynamically loading global components of my website
*/

function addFooter() {
	document.write("<div id = 'footer'>");
	document.write("<p>&copy; 20925931 <a href = 'mailto:20925931@student.uwa.edu.au'>Eric (Jun) Tan</a> 2013 - Created for CITS3403 Project Stage I - Group 6");
	document.write("<a href = 'http://validator.w3.org/check?uri=referer'><img src = 'images/valid-xhtml11.png' alt='Valid XHTML 1.1' class = 'validlogo'/></a>");
	document.write("<a href = 'http://jigsaw.w3.org/css-validator/check/referer'><img src = 'images/vcss.gif' alt = 'Valid CSS!' class = 'validlogo'/></a></p>");
	document.write("</div>");
	return true;
}	