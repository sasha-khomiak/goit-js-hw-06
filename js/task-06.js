//cвторюємо емемент інпут
const inputField = document.querySelector("#validation-input");

// визначаємо атрибут data-length і перевожимо його в номер
const lengthNumber = Number(inputField.getAttribute("data-length"));

//колбек-функція  обробки події із додавання/видалення класу
function checkFunction() {
  //якщо довжина збігається
  if (this.value.length === lengthNumber) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  }
  // якщо довжина не збігається
  else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
}

// визнааємо сдухача події
inputField.addEventListener("blur", checkFunction);
