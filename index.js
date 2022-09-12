const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todo = input.value;
  input.value = "";

  const node = document.createElement("li");
  let textNode = document.createTextNode(todo);

  node.appendChild(textNode);
  list.appendChild(node);
});
