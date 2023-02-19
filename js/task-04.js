// елемент лічильника
let number = document.querySelector("#value");

//змінна в якій зберігається поточне значення лічильника
let counterValue = 0;

// Елемент кнопка декремент
let decrementBtn = document.querySelector('button[data-action="decrement"]');

// Елемент кнопка iнкремент
let incrementBtn = document.querySelector('button[data-action="increment"]');

// функція декремент
let decrement = () => {
  counterValue -= 1;
  number.textContent = counterValue;
};

// фкнкція інкремент
let increment = () => {
  counterValue += 1;
  number.textContent = counterValue;
};

// слухач на кнопку декремента
decrementBtn.addEventListener("click", decrement);

// слухач на кнопку інкремента
incrementBtn.addEventListener("click", increment);
