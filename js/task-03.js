const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//-----------ВИКОНАННЯ-------------//

// визначаємо елемент список фотографій
const imagesList = document.querySelector(".gallery");

// для кожного обʼєкта в масиві картинок у циклі генеруємо <li>,
// обʼєднуємо і отримуємо рядок
const markup = images
  .map(
    (image) =>
      `<li><img src="${image.url}" alt="${image.alt}" height="150" class="image-item"></li>`
  )
  .join("");

//вставляємо сформований рядок одразу напочатку після відкриття тегу списку фотографій
imagesList.insertAdjacentHTML("afterbegin", markup);

// стилі для мінімального оформлення картинок вписані в css файл
