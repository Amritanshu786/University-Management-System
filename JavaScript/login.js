function abc() {
var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["Password"].value;
if (x == "1190" && y== "amrit") {
  window.location = "HTML/Home_Page.html";
}
else {
  alert("Wrong password Try Again!");
  return false;
}
}
