const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const list = document.querySelector(".list");
const taskList = document.querySelectorAll("li");
let data = [];
let i = 0;
window.localStorage.getItem(data);
let mesDonnees = window.localStorage;

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
  console.log(data);
  i++;
  window.localStorage.maBoite = data;
  mesDonnees = window.localStorage.maBoite;
});

list.addEventListener("click", (e) => {
  let n = e.target.id;

  if (data[n][1] === true) {
    e.target.remove();
  } else if (e.target && e.target.nodeName == "LI") {
    e.target.style.listStyleImage = "url('./icons8-checked-12.png')";
    e.target.classList.add("checked");
    data[n][1] = true;
    window.localStorage.maBoite = data;
    mesDonnees = window.localStorage.maBoite;
  }
});
