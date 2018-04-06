var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".randomColorButton");
var randomColor1 = document.querySelector(".color1");
var randomColor2 = document.querySelector(".color2");

function randomNumber(){
    return Math.floor((Math.random() * 257) + 0);
}
function getRandomColor() {
    randomColor1 = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    randomColor2 = "rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
    var randomGradient = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
    body.style.background = randomGradient;
    css.textContent = randomGradient;
    
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    
    css.textContent = body.style.background + ";";
}

body.onload = setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", getRandomColor);