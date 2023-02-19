// функція генерування кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// кнопка
const buttonColor = document.querySelector(".change-color");

// текст номера кольору
const textColor = document.querySelector(".color");

// боді
const body = document.querySelector("body");

// функція сдухач на клік і колбек функція
buttonColor.addEventListener("click", colorize);

// функція обробки натиску кнопки
function colorize() {
  // генеруємо колір
  const x = getRandomHexColor();

  // записуємо його в тексове поле для виводу
  textColor.textContent = x;

  // присвоюємо боді цей колір
  body.style.backgroundColor = `${x}`;
}
