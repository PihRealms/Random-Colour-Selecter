//Basic Variables
var hexMode = false;
var toggle = document.getElementById("toggleHandle");
var btn = document.getElementById("btn");
var canvasBg = document.getElementById("primary");
var colourCode = document.getElementById("code");
var togglebg = document.getElementById("toggle");
var link = document.getElementById("link");

//Rgb Variables
var red = 0;
var green = 0;
var blue = 0;
var rgbArray ="";
var newRgb = [];
var randomPick = 0;

//Hex Variables
var hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var hexCode = "";
var index = 0;

//Toggle switching
function switchToggle() {
    hexMode = !hexMode;
    console.log(hexMode);
    if (hexMode == true) {
        toggle.style.animation = "switchAnimation 0.1s linear normal";
        toggle.style.marginLeft = "70px";
        btn.innerText = "Switch to RGB mode"
        togglebg.style.background = "black";
    }
    else {
        toggle.style.animation = "switchBackAnimation 0.1s linear normal";
        toggle.style.marginLeft = "0px";
        btn.innerText = "Switch to Hex mode"
        togglebg.style.background = "white";
    }


}

//Colour generator
function generate() {
    if(hexMode == false){
        newRgb ="";
       
        red = Math.floor(Math.random()*255);
        green = Math.floor(Math.random()*255);
        blue = Math.floor(Math.random()*255);
        newRgb = "("+red+","+green+","+blue+")";
        colourCode.innerText = newRgb;
        toggle.style.background = "rgb"+newRgb;
        canvasBg.style.background = "rgb"+newRgb;
        link.style.color = "rgb"+newRgb;new t
    }
    else{
        hexCode ="";
        for(var i =0; i<6; i++){
            index = Math.floor(Math.random()*hexDigits.length);
            hexCode += hexDigits[index];
           
        }
        colourCode.innerText = "#"+ hexCode;
        canvasBg.style.background = "#" +hexCode;
        toggle.style.background = "#"+hexCode;
    }
}

//Copy code
function copy(){
    navigator.clipboard.writeText(colourCode.innerText);
}
