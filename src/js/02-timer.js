import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  buttonStart: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};

let timerActive = null; //задати дефолтне значення таймера null

refs.buttonStart.disabled = true; //кнопка старту в не активному стані

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      //якщо вибрана дата рівна сьогоднішньому дню, або з минулого  - помилка
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      //якщо дата з майбутнього, то .....
      refs.buttonStart.disabled = false; // кнопка старт стає активною
      refs.buttonStart.addEventListener('click', () => {
        //вішаємо обробник події на кнопку
        timerActive = setInterval(() => {
          //змінній, що відповідає за значення таймера присвоюємо результтат виконання методу  setInterval() - щоби значення таймера оновлювалося кожну секунду
          refs.buttonStart.disabled = true;
          const dateChoosenMs = new Date(
            refs.input.value.replace(/-/g, '/')
          ).getTime();
          const now = new Date().getTime(); //отримуємо значення поточної дати у вигляді кількості мілісекунд
          const deltaTime = dateChoosenMs - now; //шукаємо різницю у мілісекундах між вибраною датою та поточною
          const { days, hours, minutes, seconds } = convertMs(deltaTime); //формуємо обʼєкт із дня, години, хвилини, секунди після конвертації мілісекунд

          refs.dataDays.innerHTML = days < 10 ? addLeadingZero(days) : days; //перевіряє значення дати, що міститься на сторінці і при умові, якщо дата менша 10, то за допомогою addLeadingZero додає їй нуль спочатку. Якщо дата рівна більша 10, то залишає те значення дати, що було
          refs.dataHours.innerHTML = hours < 10 ? addLeadingZero(hours) : hours;
          refs.dataMinutes.innerHTML =
            minutes < 10 ? addLeadingZero(minutes) : minutes;
          refs.dataSeconds.innerHTML =
            seconds < 10 ? addLeadingZero(seconds) : seconds;
          if (deltaTime < 1000) {
            //якщо різниця в часі між теперішнім моментом і потрібним менше 1000 мілісекунд, тобто менше 1 секунди, то таймер зупинсяється
            clearInterval(timerActive);
          }
        }, 1000);
      });
    }
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0'); //приводить отримане значення до строки і додає на почткову позицію 0, якщо кількість цифр менша 2
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
