// стволюємо інпут
const inputItem = document.querySelector("#name-input");

// стволюємо аутпут
const outputItem = document.querySelector("#name-output");

// колбек-функція повернення тексту
const printText = (event) => {
  outputItem.textContent = event.currentTarget.value;
  if (outputItem.textContent === "") {
    outputItem.textContent = "Anonymous";
  }
};

// вішаємо слухач імпуту на поле інпут і виконуватимемо колбек функцію
inputItem.addEventListener("input", printText);
