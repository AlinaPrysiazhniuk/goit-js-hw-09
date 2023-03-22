import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  button: document.querySelector('.js-submit'),
  inputDelay: document.querySelector('.js-delay'),
  inputStep: document.querySelector('.js-step'),
  inputAmount: document.querySelector('.js-amount'),
};

refs.form.addEventListener('submit', createPromises);

///----------ФУНКЦІЯ, ЩО ВИКЛИКАЄТЬСЯ ПРИ ВІДПРАВЦІ ФОРМИ ТА ПОВЕРТАЄ РЕЗУЛЬТАТ СТВОРЕННЯ ПРОМІСА--------///
function createPromises(event) {
  event.preventDefault();

  let delay = refs.inputDelay.valueAsNumber;
  const step = refs.inputStep.valueAsNumber;
  const amount = refs.inputAmount.valueAsNumber;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay) //виклик функції по сто
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += step; //затримка
  }
}

///----------ФУНКЦІЯ, ЩО СТВОРЮЄ ТА ПОВЕРТАЄ ПРОМІС--------///
function createPromise(position, delay) {
  //position - кількість промісів, що буде створена
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
