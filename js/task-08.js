// форма
const form = document.querySelector(".login-form");

// слухач форми на сабміт
form.addEventListener("submit", handleSubmit);

// колбек функція обробки форми
function handleSubmit(event) {
  // скасування за замовчанням
  event.preventDefault();

  // деструктуризація елементів з форми
  const {
    elements: { email, password },
  } = event.currentTarget;

  // якщо поля не заповнені
  if (email.value === "" || password.value === "") {
    alert("Fill all fields");
  }

  // якщо поля заповнені створюємо обʼєкт
  else {
    const obj = {
      email: email.value,
      password: password.value,
    };

    //консолимо
    console.log(obj);

    //очищення
    event.currentTarget.reset();
  }
}
