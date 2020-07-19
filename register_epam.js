var username=document.forms["myform"]["name"];
var email_id=document.forms["myform"]["email"];
var password=document.forms["myform"]["password"];
var contact=document.forms["myform"]["contact"];
var city=document.forms["myform"]["city"];
var address=document.forms["myform"]["address"];
var name_err=document.getElementById("name_error");
var email_err=document.getElementById("email_error");
var password_err=document.getElementById("password_error");
var contact_err=document.getElementById("contact_error");
var city_err=document.getElementById("city_error");
var address_err=document.getElementById("address_error");

function validate_entry(){
    if(username.value==""){
        name_err.textContent="User not valid";
        username.focus()
        return false;
    }
    if(email_id.value==""){
        email_err.textContent="email not valid";
        email.focus()
        return false;
    }
    if(password.value==""){
        password_err.textContent="password not valid";
        password.focus()
        return false;
    }
    if(contact.value==""){
        contact_err.textContent="contact not valid";
        contact.focus()
        return false;
    }
    if(city.value==""){
        city_err.textContent="city not valid";
        city.focus()
        return false;
    }
    if(address.value==""){
        address_err.textContent="address not valid";
        address.focus()
        return false;
    }
    return true;
}
function submit_success(){
    alert("Registered Successfully");
    window.open("file:///C:/Users/lenovo/OneDrive/Desktop/javascript_package/Login_epam.html",target="_self");
}