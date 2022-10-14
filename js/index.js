const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const background = new Image();
background.src = '../images/road.png'
const car = new Image();
car.src = '../images/car.png'
let carX = canvas.width / 2 - 35;
let carY = 430;

/// move right 
const moveCarRight = () => {
  if (carX < canvas.width - 130) {
    carX += 5
  } 
}

/// move left
const moveCarLeft = () => {
  if (carX >= 0 + 50) {
    carX -= 5;
  }
}

/// draw car
const drawCar = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
  ctx.drawImage(car, carX, 430,  70, 150);
}


/// updates car 
const updateCar = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCar();
  drawObstacle();
  moveObstDown();
  requestAnimationFrame(updateCar)
  
  /* let isGameOver = false;
  let requestAnimationFrameId;
  if (car.carY  ===  obstacle.obstacleY) {
    isGameOver = true
  }
  if (isGameOver) {
    cancelAnimationFrame(requestAnimationFrameId)
    drawGameOver()
  } else {
    requestAnimationFrameId = requestAnimationFrame(updateCar)
  } */
}

////listen to events and acts 
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    moveCarLeft()
  }
  if (event.key === 'ArrowRight') {
    moveCarRight()
  }
})

// draw obstacle 
let obstacleX = Math.round(Math.random() * (canvas.width - 150))
let obstacleY = 0
const drawObstacle = () => {
  ctx.beginPath()
  ctx.fillStyle = 'tomato'
  ctx.fillRect(obstacleX, obstacleY , 150, 20)
  ctx.closePath()
}

///to do: add mad max position of the obstacle
setInterval(drawObstacle, 2000)

// move obs down 
const moveObstDown = () => {
  obstacleY += 1.6
}

/// gameover
const drawGameOver = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  ctx.beginPath()
  ctx.font = '48px sans-serif'
  ctx.fillText('GAME OVER', canvasWidth / 3, canvasHeight / 2)
  ctx.closePath()
}



///////////////

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(car, canvas.width / 2 - 35, 430, 70, 150)
    updateCar()
  }
};
