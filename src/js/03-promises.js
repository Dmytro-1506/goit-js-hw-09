import Notiflix from 'notiflix';

const firstDelay = document.querySelector('.prom-delay');
const delayStep = document.querySelector('.prom-step');
const amount = document.querySelector('.prom-amount');
const form = document.querySelector('.form');

let positionNum = 1;
let delayNum = 0;

let firstDelayNum = 0;
firstDelay.addEventListener('input', () => {
  firstDelayNum = Number(firstDelay.value);
  delayNum = Number(firstDelay.value);
})

let delayStepNum = 0;
delayStep.addEventListener('input', () => {
  delayStepNum = Number(delayStep.value);
})

let amountNum = 0;
amount.addEventListener('input', () => {
  amountNum = Number(amount.value);
})

function counter(interval, quantity) {
  if (quantity > 1) {
    amountNum -= 1;
    positionNum += 1;
    delayNum += interval;
    createPromise(positionNum, delayNum);
    return
  }
  clearInterval(intervalId);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;

    if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
}

let intervalId = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  setTimeout(() => {
    createPromise(positionNum, firstDelayNum);
    intervalId = setInterval(() => {
        counter(delayStepNum, amountNum);
      }, delayStepNum);
  } , firstDelayNum);
})