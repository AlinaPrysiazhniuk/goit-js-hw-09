const refs = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

refs.buttonStart.addEventListener('click', handleColorBody);
refs.buttonStop.addEventListener('click', offColorBody);

let timerId = null;

function handleColorBody(event) {
  refs.buttonStop.disabled = false;
  refs.buttonStart.disabled = true;
  timerId = setInterval(() => {
    const clrBody = getRandomHexColor();
    refs.body.style.backgroundColor = clrBody;
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function offColorBody() {
  clearInterval(timerId);
  refs.buttonStop.disabled = true;
  refs.buttonStart.disabled = false;
}
