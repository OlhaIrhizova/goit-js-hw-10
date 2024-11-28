import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("button[data-start]");
const day = document.querySelector("span[data-days]");
const hour = document.querySelector("span[data-hours]");
const minute = document.querySelector("span[data-minutes]");
const second = document.querySelector("span[data-seconds]");

let userSelectedDate = null;
let countdownTimer = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
       
        if(selectedDate <= new Date() ){
            startButton.disabled = true;

            iziToast.error({
            title: 'Error',
            message: 'Please choose a date in the future',
            });
            } else {
            userSelectedDate = selectedDate;
            startButton.disabled = false;
        }
}
}
 flatpickr('#datetime-picker', options);

 

 

function convertMs(ms) {
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  

  function addLeadingZero(value){
    return String(value).padStart(2,"0");
  };

  function updateTimer() {
    const remainingTime = userSelectedDate - new Date();
    if (remainingTime <= 0) {
      clearInterval(countdownTimer);
      day.textContent = '00';
      hour.textContent = '00';
      minute.textContent = '00';
      second.textContent = '00';

      startButton.disabled = false;
      datetimePicker.disabled = false;
      iziToast.success({ title: 'Completed', message: 'The countdown has ended!' });
      return;
    }
  const { days, hours, minutes, seconds } = convertMs(remainingTime);
  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  minute.textContent = addLeadingZero(minutes);
  second.textContent = addLeadingZero(seconds);
}

  startButton.addEventListener("click", startCountdown);

  function startCountdown(){
    startButton.disabled = true;
    datetimePicker.disabled = true;
    countdownTimer = setInterval(updateTimer, 1000);
    updateTimer(); 

  };