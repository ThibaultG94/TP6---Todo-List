const form = document.querySelector("form");
const input = document.querySelector(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todo1 = input.value;
  input.value = "";
  console.log(todo1);
});
