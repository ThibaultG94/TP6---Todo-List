const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const list = document.querySelector(".list");

let data = [];
let i = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let todo = input.value;
  input.value = "";
  const node = document.createElement("li");
  let textNode = document.createTextNode(todo);
  node.appendChild(textNode);
  node.id = i;
  list.appendChild(node);

  const newLi = [node.textContent, false];
  data.push(newLi);
  i++;
});

list.addEventListener("click", (e) => {
  let n = e.target.id;

  if (data[n][1] === true) {
    e.target.remove();
  } else if (e.target && e.target.nodeName == "LI") {
    e.target.classList.add("checked");
    data[n][1] = true;
  }
});
