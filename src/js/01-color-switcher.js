function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let changeColor = null;

startBtn.addEventListener('click', () => {
  changeColor = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', 'disabled');
})

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled', 'disabled');
  clearInterval(changeColor);
})
