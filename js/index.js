const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const background = new Image();
background.src = '../images/road.png'
const car = new Image();
car.src = '../images/car.png'
let carX = canvas.width / 2 - 35;



/// move right 
const moveCarRight = () => {
  carX += 4;
}

/// move left
const moveCarLeft = () => {
  carX -= 4;
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

 requestAnimationFrame(updateCar)
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
