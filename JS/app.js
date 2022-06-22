var firstP = "I really am afraid of JS";
var secP ="loving JS";

document.write("first string :"+firstP + "<br>")
document.write("Second string :"+secP + "<br><br>")
// using slice
document.write("using SLICE <br>");
var theirdP = firstP.slice(0 , 11);
theirdP = theirdP + " " + secP;
document.write(theirdP);

document.write("<br>");
document.write("<br>");

//using substring

document.write("using SUBSTRING <br>");
var text = "I really am afraid of JS";
var secText = "loving JS";
let thirdText = text.substring(0,12) + secText; 
document.write(thirdText);
