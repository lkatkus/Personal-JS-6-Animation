// SETTING UP CANVAS
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.webkitImageSmoothingEnabled = false;
ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false; /// future

// CANVAS SIZE

// GETTING SPRITE SHEET
var coinImage = new Image();
coinImage.src = "img/coin-sprite-animation-sprite-sheet.png";

var frameIndex = 0;
var framePosX = 0;
var frameWidth = 44;

const FPS = 30;

function animate () {

    myAnimationInterval = setTimeout(
        function(){
            myAnimationRequest = requestAnimationFrame(animate);
        },
        1000/FPS); /* LOWER INTERVAL = FASTER GAME */

    animationUpdate();
}

function animationUpdate(){
    let sheetX = framePosX + frameIndex * frameWidth;

    if(frameIndex < 9){
        frameIndex++;
    }else{
        frameIndex = 0;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(coinImage,sheetX,0,44,44,0,0,canvas.width, canvas.height);

}

// Start the game loop as soon as the sprite sheet is loaded
coinImage.addEventListener("load", animate);
