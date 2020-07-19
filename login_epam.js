var email_id=document.forms["myform2"]["email"];
var password=document.forms["myform2"]["password"];
var email_err=document.getElementById("email_error");
var password_err=document.getElementById("password_error");
function login_validate(){
    if(email_id.value!="xyz@gmail.com"){
        email_err.textContent="valid email xyz@gmail.com ";
        email_id.focus()
        return false;
    }
    if(password.value!="password123"){
        password_err.textContent="password123 is valid";
        password.focus()
        return false;
    }
    return true;
}
function login_success(){
    alert("Login succesfull");
}