var lines = document.getElementById("lines");
var sideNav = document.getElementById("sideNav");
var ul = document.getElementById("ul");

var move = document.getElementById("move");
var move1 = document.getElementById("move1");
var move2 = document.getElementById("move2");
var move3 = document.getElementById("move3");
var move4 = document.getElementById("move4");
var move5 = document.getElementById("move5");
var move6 = document.getElementById("move6");

var inputbtnDown = document.getElementById("inputbtnDown")

function openClose() {

    if (sideNav.style.width != "250px") {
        sideNav.style.width = "250px";
        sideNav.style.transition = "all 0.5s"
        lines.innerHTML = "&#9747";
        lines.style.backgroundColor = "crimson";
        lines.style.transition = "all 2s"

        inputbtnDown.style.width = "125px"

        move.style.marginLeft = "250px"
        move.style.transition = "0.5s"
        move1.style.marginLeft = "250px"
        move1.style.transition = "0.5s"
        move2.style.marginLeft = "250px"
        move2.style.transition = "0.5s"
        move3.style.marginLeft = "250px"
        move3.style.transition = "0.5s"
        move4.style.marginLeft = "250px"
        move4.style.transition = "0.5s"
        move5.style.marginLeft = "250px"
        move5.style.transition = "0.5s"
        

    } else {

        sideNav.style.width = "0px";
        lines.innerHTML = "&#9776";
        lines.style.backgroundColor = "green";
        lines.style.transition = "all 2s"

        inputbtnDown.style.width = "163px"
        inputbtnDown.style.transition = "all 0.5s"

        move.style.marginLeft = "0px"
        move.style.transition = "0.5s"
        move1.style.marginLeft = "0px"
        move1.style.transition = "0.5s"
        move2.style.marginLeft = "0px"
        move2.style.transition = "0.5s"
        move3.style.marginLeft = "0px"
        move3.style.transition = "0.5s"
        move4.style.marginLeft = "0px"
        move4.style.transition = "0.5s"
        move5.style.marginLeft = "0px"
        move5.style.transition = "0.5s"
       
    }
}



var topName = document.getElementById("top-name");
var about = document.getElementById("about");
var backgroundColor = document.getElementById("background-color");

var sideNav = document.getElementById("sideNav");

function change() {
    var moonsun = document.getElementById("moonsun");

    if (moonsun.className === "fas fa-moon") {
        moonsun.classList.remove("fa-moon")
        moonsun.classList.add("fa-sun")
        document.body.classList.add("change-display")
        document.body.style.transition = "1s"

        sideNav.style.backgroundColor = "black";

        topName.style.color = "white"
        topName.style.borderColor = "white"
        backgroundColor.style.backgroundColor = "black"
        about.style.color = "black"
    } else {
        moonsun.classList.remove("fa-sun")
        moonsun.classList.add("fa-moon")
        document.body.classList.remove("change-display");
        document.body.style.transition = "1s"

        sideNav.style.backgroundColor = "#7971ea";
        

        topName.style.color = "black"
        topName.style.borderColor = "black"
        backgroundColor.style.backgroundColor = "#f8f9fa"
    }
}


