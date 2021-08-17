

 

var stopInterval = setInterval(function(){toggoli()},500);

function check(){
var firstname = document.getElementById("firstname").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var mobileNumber = document.getElementById("mN").value;
var errer = document.getElementById("errer");







if (firstname.length < 5){
    
   
    
   
   
    errer.innerHTML = "Your First Name Must more then 5 characters &#9940";
    document.getElementById("errer").classList.add("border-wrong");
} else if(email.indexOf("@") === -1 || email.length < 5){
    
    errer.innerHTML = "please Enter valid email &#9940";
    document.getElementById("errer").classList.add("border-wrong");
} else if(password.length < 5){
 
    errer.innerHTML = "please Enter valid password &#9940";
    document.getElementById("errer").classList.add("border-wrong");
} else if(isNaN(mobileNumber) || mobileNumber.length != 10){
    
    errer.innerHTML = "please Enter valid Mobile Number &#9940";
    document.getElementById("errer").classList.add("border-wrong");
} else {
    errer.innerHTML = "IT IS OK &#9989";
    errer.classList.remove("errer")
    errer.classList.add("correct")
    clearInterval(stopInterval)
    setTimeout(sendme,1000);
    
}

}
function sendme(){
    window.location.href = "signin/signin.html";
}
// function checki(){
//     errer.innerHTML = "IT IS OK YOU ARE REGISTERD !! "
//    clearInterval(myVar);
// }
// 

function toggoli(){
    errer.classList.toggle("errer")
}