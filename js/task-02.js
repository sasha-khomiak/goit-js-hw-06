const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// створимо елемент для нашого списку
let list = document.querySelector("#ingredients");

// пройдемося циклом і згенеруємо кожен ліст айтем з інгердієнтами
// і додамо послідовно в наш список
ingredients.forEach((item) => {
  // створимо едемент списку
  let ingredient = document.createElement("li");
  // присвоюємо значення з масиву ingredients
  ingredient.textContent = item;
  // присвоюємо клас елементу
  ingredient.classList.add("item");
  // вставояємо елемент списку вкінці на кожній ітерації
  list.append(ingredient);
  //провсяк консолю
  console.log(ingredient);
});
