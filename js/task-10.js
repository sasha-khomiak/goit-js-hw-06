// функція генерування випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// створюємо елемент контролс
const controls = document.querySelector("#controls");

// перша дитина елемента контролс
const inputValue = controls.firstElementChild;

// наступний сусід елемента інпут валуес
const btnCreate = inputValue.nextElementSibling;

// остання дитина елемента контролс
const btnDestroy = controls.lastElementChild;

// створюємо елемент коробочок
const boxes = document.querySelector("#boxes");

// слухач кнопки  створити і колбек-функція обробки
btnCreate.addEventListener("click", createBoxes);

// слухач кнопки очистити і колбек-функція очистки
btnDestroy.addEventListener("click", clearAll);

// функція створення квадратів createBoxes
function createBoxes() {
  // записуємо число квадратиків у змінну
  const amount = inputValue.value;

  // перебираємо циклом  таку кількість разів яку кількість внесли
  for (let i = 0; i < amount; i += 1) {
    // генеруємо випадковий колір і зберігаємо у змінну
    const newColor = getRandomHexColor();

    // вираховуємо сторону квадрата
    const side = i * 10 + 30;

    // формуємо  розмітку квадрата
    const string = `<div style="background-color: ${newColor}; width: ${side}px; height: ${side}px;"></div>`;

    // додаємо квадрат укінці елемента boxes
    boxes.innerHTML += string;
  }
}

// функція очистки
function clearAll() {
  // обнудяємо поле інпут
  inputValue.value = "";

  // витираємо квадрати
  boxes.innerHTML = "";
}
