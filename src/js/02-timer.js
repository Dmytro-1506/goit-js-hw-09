import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const button = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const daysOnPage = document.querySelector('span[data-days]');
const hoursOnPage = document.querySelector('span[data-hours]');
const minutesOnPage = document.querySelector('span[data-minutes]');
const secondsOnPage = document.querySelector('span[data-seconds]');

let timerTime = 0;
let convertedTime = {};
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  onClose(selectedDates) {
    let nowTime = options.defaultDate.getTime();
    let selectedTime = selectedDates[0].getTime();
    if (nowTime <= selectedTime) {
      button.removeAttribute('disabled');
      timerTime = selectedTime - nowTime;
      convertMs(timerTime);
    } else {
      button.setAttribute('disabled', 'disabled');
      Notiflix.Report.warning('WARNING', 'Please choose a date in the future', 'Try again');
    }
  }
};

const onClick = () => {
  intervalId = setInterval(changeTimeOnPage, 1000);
  button.setAttribute('disabled', 'disabled');
}

input.addEventListener('focus', () => {
  clearTimer();
  flatpickr(input, options);
})

button.addEventListener('click', onClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    convertedTime = { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function changeTimeOnPage() {
  if (timerTime > 0) {
    daysOnPage.textContent = addLeadingZero(convertedTime.days);
    hoursOnPage.textContent = addLeadingZero(convertedTime.hours);
    minutesOnPage.textContent = addLeadingZero(convertedTime.minutes);
    secondsOnPage.textContent = addLeadingZero(convertedTime.seconds);
    timerTime -= 1000;
    convertMs(timerTime);
  } else {
    clearInterval(intervalId);
  }
}

function clearTimer() {
  clearInterval(intervalId);
  timerTime = 0;
  convertedTime = {};
  daysOnPage.textContent = '00';
  hoursOnPage.textContent = '00';
  minutesOnPage.textContent = '00';
  secondsOnPage.textContent = '00';
}