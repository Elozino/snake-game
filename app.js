

const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

let speed = 3;
//Dividing the canvas into blocks
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2; // -2 is to make it a little bit smaller

//Snake Position
let headX = 10;
let headY = 10;

//Creating snake food
let foodX = 5;
let foodY = 5;

//Creating the game button (pad)
let xButton = 0;
let yButton = 0;

//Creating snake length parts
class SnakeParts {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const snakeParts = [];
let tailLength = 2; //Use the let keyword to make it mutable

//Creating Score
let score = 0;

function game() {
  console.log("On God");
  changeSnakePosition();
  let result = gameOver();
  if (result) {
    return;
  }
  clearScreen();
  foodCollision();
  drawFood();
  drawSnake();
  drawScore();
  setTimeout(game, 1000 / speed);
}

function gameOver() {
  let gameEnd = false;

  if (xButton == 0 && yButton == 0) {
    return false;
  }

  //wall check
  if (headX < 0 || headX >= tileCount || headY < 0 || headY >= tileCount) {
    gameEnd = true;
  }

  //To check if the snake can move inside itself
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameEnd = true;
      break; //to break out of the loop
    }
  }
  if (gameEnd) {
    ctx.fillStyle = "white";
    ctx.font = "50px sans-serif";
    ctx.fillText("Game Over", canvas.width / 6.5, canvas.height / 2);
  }

  return gameEnd;
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawScore() {
  ctx.fillStyle = "yellow";
  ctx.font = "20px Verdana";
  ctx.fillText("Score: " + score, canvas.width - 100, 20);
}

function drawSnake() {
  ctx.fillStyle = "orange";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakeParts(headX, headY)); //put an item at the end
  if (snakeParts.length > tailLength) {
    snakeParts.shift(); //rmeove the futher item from the snake
  }

  ctx.fillStyle = "green";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
  headX = headX + xButton;
  headY = headY + yButton;
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(foodX * tileCount, foodY * tileCount, tileSize, tileSize);
}

function foodCollision() {
  if (foodX === headX && foodY === headY) {
    foodX = Math.floor(Math.random() * tileCount);
    foodY = Math.floor(Math.random() * tileCount);
    console.log(foodX, foodY);

    tailLength++;
    score++;
  }

  if (score > 10) {
    speed += 0.1;
  } else if (score > 20) {
    speed += 0.1;
  } else if (score > 30) {
    speed += 0.1;
  } else if (score > 40) {
    speed += 0.1;
  }
}

document.body.addEventListener("keydown", keyPadDown);

function keyPadDown(event) {
  //Up Key
  if (event.keyCode == 38) {
    if (yButton == 1) return;
    yButton = -1;
    xButton = 0;
  }
  //Down Key
  if (event.keyCode == 40) {
    if (yButton == -1) return;
    yButton = 1;
    xButton = 0;
  }
  //Left Key
  if (event.keyCode == 37) {
    if (xButton == 1) return;
    yButton = 0;
    xButton = -1;
  }
  //Right Key
  if (event.keyCode == 39) {
    if (xButton == -1) return;
    yButton = 0;
    xButton = 1;
  }
}




// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 400px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    game();
    console.log('Media Query Matched!')
  } else{
    alert("Switch to desktop mode")
  }
}

// Initial check
handleTabletChange(mediaQuery)