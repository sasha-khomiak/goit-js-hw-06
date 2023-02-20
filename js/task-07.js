// створюємо елемент повзунка
const controller = document.querySelector("#font-size-control");

// елемент тексту
const outputText = document.querySelector("#text");

function changeText() {
  // визначаємо значення
  const letterSize = controller.value;
  // прописуємо інлайновий стиль з розміром щрифта
  outputText.setAttribute("style", `font-size: ${letterSize}px;`);
}

// чіпляємо слухача на зміну і колбек функцію обробки значення
controller.addEventListener("input", changeText);
