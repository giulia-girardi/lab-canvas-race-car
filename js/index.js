const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const background = new Image();
background.src = '../images/road.png'

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    console.log('it works')
    startGame();
  };

  function startGame() {
    ctx.drawImage(background, 0, 0, 500, 700)
  }
};
