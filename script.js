var canvas = document.getElementById("snake");
var canvas2d = canvas.getContext("2d");
var gameEnded = false;
canvas.width = 600;
canvas.height = 600;
var snakeSegments = [];
var snakeLength = 1;
var snakeX = 0;
var snakeY = 0;
var directionX = 10;
var directionY = 0;

function moveSnake() {
    snakeSegments.unshift({ x: snakeX, y: snakeY });
    snakeX += directionX;
    snakeY += directionY;
    console.log(snakeY)
}

function drawSnake() {
    canvas2d.fillStyle = "black";
    // canvas2d.fillRect(0 , 0 , 25 ,25);
    for (var i = 0; i < snakeSegments.length; i++) {
        canvas2d.fillRect(snakeSegments[i].x, snakeSegments[i].y, 10, 10);
    }
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37: // Left arrow
            directionX = -10;
            directionY = 0;
            break;
        case 38: // Up arrow
            directionX = 0;
            directionY = -10;
            break;
        case 39: // Right arrow
            directionX = 10;
            directionY = 0;
            break;
        case 40: // Down arrow
            directionX = 0;
            directionY = 10;
            break;
    }
};

function gameLoop() {
    moveSnake();
    drawSnake();
}

var intervalId = window.setInterval(function(){
    gameLoop();
  }, 100);



  

