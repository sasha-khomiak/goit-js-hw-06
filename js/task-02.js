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
let items = ingredients.map((item) => {
  // створимо едемент списку
  let ingredient = document.createElement("li");
  // присвоюємо значення з масиву ingredients
  ingredient.textContent = item;
  // присвоюємо клас елементу
  ingredient.classList.add("item");
  //провсяк консолю
  console.log(ingredient);
  // повертаєио елемент
  return ingredient;
});
list.append(...items);
console.log(items);
