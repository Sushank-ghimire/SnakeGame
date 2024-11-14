(function () {
  const startGame = document.querySelector("button");

  const scoreBoard = document.getElementById("scoreBoard");

  let highScore = JSON.parse(localStorage.getItem("score")) || 0;

  // Other Variables
  let boardHeight = window.innerHeight * 0.6,
    boardWidth = window.innerWidth * 0.7;
  const blockSize = 15;
  let interval;

  // Canvas Variables
  const canvas = document.getElementById("canvas");
  let context;

  // Snake Variables
  let snakeX = 5 * blockSize;
  let snakeY = 5 * blockSize;
  let speedX = 0; // speed of snake in x coordinate.
  let speedY = 0; // speed of snake in y coordinate.
  let snakeBody = [];

  // Food Variables
  let foodX;
  let foodY;

  let gameOver = false;

  // Change direction based on arrow key presses
  const changeDirection = (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (speedY === 0) {
          speedX = 0;
          speedY = -1;
        }
        break;
      case "ArrowDown":
        if (speedY === 0) {
          speedX = 0;
          speedY = 1;
        }
        break;
      case "ArrowLeft":
        if (speedX === 0) {
          speedX = -1;
          speedY = 0;
        }
        break;
      case "ArrowRight":
        if (speedX === 0) {
          speedX = 1;
          speedY = 0;
        }
        break;
    }
  };

  scoreBoard.innerHTML = `High Score : ${highScore}`;

  startGame.onclick = function () {
    context = canvas.getContext("2d");
    startGame.classList.add("hidden");
    canvas.classList.remove("hidden");
    canvas.height = window.innerHeight * 0.6;
    canvas.width = window.innerWidth * 0.7;
    canvas.style.backgroundColor = "green";
    canvas.style.borderRadius = "5px";
    getFood();
    document.addEventListener("keyup", changeDirection);
    interval = setInterval(update, 100);
  };

  const update = () => {
    if (gameOver) {
      alert("Game Over");
      resetGame();
      return;
    }
    scoreBoard.innerHTML = `High Score : ${highScore}`;

    // Move the snake
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;

    // Check if snake hits the wall
    if (
      snakeX < 0 ||
      snakeX >= boardWidth - 10 ||
      snakeY < 0 ||
      snakeY >= boardHeight - 10
    ) {
      gameOver = true;
    }

    // Check if the snake eats the food
    if (snakeX === foodX && snakeY === foodY) {
      getFood();
      if (highScore < snakeBody.length) {
        highScore += 1;
        localStorage.setItem("score", highScore);
      }
      snakeBody.push([foodX, foodY]);
    }

    // Move the snake's body
    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
      snakeBody[0] = [snakeX, snakeY];
    }

    // Clear the canvas and draw everything again
    context.clearRect(0, 0, boardWidth, boardHeight);
    context.fillStyle = "green";
    context.fillRect(0, 0, boardWidth, boardHeight);

    // Draw the food
    context.fillStyle = "yellow";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // Draw the snake head
    context.fillStyle = "red";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // Draw the snake body
    context.fillStyle = "red";
    for (let i = 0; i < snakeBody.length; i++) {
      context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    clearInterval(interval);
    context.clearRect(0, 0, canvas.width, canvas.height);

    snakeX = 5 * blockSize;
    snakeY = 5 * blockSize;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    gameOver = false;
    getFood();
    interval = setInterval(update, 100);
  };

  const getFood = () => {
    foodX = Math.floor(Math.random() * (boardWidth / blockSize)) * blockSize;
    foodY = Math.floor(Math.random() * (boardHeight / blockSize)) * blockSize;
  };
})();
