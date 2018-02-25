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
// coinImage.addEventListener("load", animate);

// TUTORIAL
// https://www.simplifiedcoding.net/javascript-sprite-animation-tutorial-html5-canvas/

var canvasWidth = 650;
var canvasHeight = 350;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var spriteWidth = 1000;
var spriteHeight = 500;

var rows = 2;
var cols = 8;

var trackRight = 0; /* FOR MOVING RIGHT ANIMATION */
var trackLeft = 1; /* FOR MOVING LEFT ANIMATION */

var width = spriteWidth/cols;
var height = spriteHeight/rows;

var curFrame = 0;
var frameCount = 8;

var x = 0;
var y = 0;

var srcX = 0;
var srcY = 0;

var left = false;
var right = true;

var speed = 12;

var char = new Image();
char.src = "img/player-sprite-v1-20180224.png";

function updateFrame(){
    //Updating the frame index
    curFrame = ++curFrame % frameCount;

    //Calculating the x coordinate for spritesheet
    srcX = curFrame * width;

    //Clearing the drawn frame
    ctx.clearRect(x,y,canvas.width,canvas.height);

    //if left is true and the character has not reached the left edge
    if(left && x>0){
        //calculate srcY
        srcY = trackLeft * height;
        //decreasing the x coordinate
        x-=speed;
    }

    //if the right is true and character has not reached right edge
    if(right && x+width*1.1 < canvasWidth){
        //calculating y coordinate for spritesheet
        srcY = trackRight * height;
        //increasing the x coordinate
        x+=speed;
    }
}

function draw(){
    //Updating the frame
    updateFrame();

    //Drawing the image
    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.drawImage(char,srcX,srcY,width,height,x,y,width,height);
}

function moveLeft(){
 left = true;
 right = false;
}

function moveRight(){
 left = false;
 right = true;
}


function animate () {

    myAnimationInterval = setTimeout(
        function(){
            myAnimationRequest = requestAnimationFrame(animate);
        },
        1000/10); /* LOWER INTERVAL = FASTER GAME */

    draw();
}
char.addEventListener("load", animate);
