var Interval = setInterval(function(){addClass()},500)
function addClass(){
    error = document.getElementById("error").classList.toggle("newError");
}
function check(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");

    if (email.length < 5 || email.indexOf("@") === -1){
        error.innerHTML = "Enter valid E-mail address! &#9940"
    } else if(password.length < 5){
        error.innerHTML = "Enter valid password! &#9940"
    } else {
        clearInterval(Interval)
        error.innerHTML = "";
        setTimeout(sentit, 1000);
        
    }
}
function sentit(){
    window.location.href = "../../cart.html";
}
function wait(){
    setTimeout(go, 1000);
}

function go(){
    window.location.href = "../index.html";
}