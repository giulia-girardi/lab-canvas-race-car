const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const background = new Image();
background.src = '../images/road.png'
const car = new Image();
car.src = '../images/car.png'

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(background, 0, 0, 500, 700)
    ctx.drawImage(car, canvas.width / 2 - 35, 430, 70, 150)
  }
};
