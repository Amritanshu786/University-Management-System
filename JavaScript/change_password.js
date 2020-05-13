function changepassword() {
var x = document.forms["myForm"]["oldpassword"].value;
var y = document.forms["myForm"]["newpassword"].value;
var z = document.forms["myForm"]["cnfpassword"].value;
if (x == "amrit" && y== z ) {
    window.location = "../Login_Page.html";
}
else {
  alert("Wrong password Try Again!");
  return false;
}
}
function home(){
  window.location = "Home_Page.html";
}
