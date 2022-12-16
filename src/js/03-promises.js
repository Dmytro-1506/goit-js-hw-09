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
  if (quantity >= 1) {
    createPromise(positionNum, delayNum);
    delayNum += interval;
    amountNum -= 1;
    positionNum += 1;
    return
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delayStepNum);
  });

  return promise
    .then(() => {
      if (amountNum >= 1) {
        counter(delayStepNum, amountNum);
      }
    }
      )
    .catch(() => {
      if (amountNum >= 1) {
        counter(delayStepNum, amountNum);
      }
    }
    )
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

  setTimeout(() => {
    counter(delayStepNum, amountNum);
    }, firstDelayNum);
    
  });