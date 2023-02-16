// вибираємо масив елементів за селектором .item
// рахуємо довжину цього масиву
const numberOfCategories = document.querySelectorAll(".item").length;

console.log("Number of categories:", numberOfCategories);
// Number of categories: 3

//-----------------------------//

// вибираємо масив елементів за селектором .item

const categories = document.querySelectorAll(".item");

// перебираємо циклом цей масив

categories.forEach((item) => {
  //  у елемента беремо його 1 childNodes і витягаємо властивість textContent
  const categoryName = item.children[0].textContent;

  //  у елемента беремо всіх нащадків за седектором li і рахуємо довжину
  const numberOfItems = item.querySelectorAll("li").length;

  //  В консоль виводимо, що отримали

  return (
    console.log("Category: ", categoryName),
    console.log("Elements: ", numberOfItems)
  );
});

//-----------------------------//

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
