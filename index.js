const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const list = document.querySelector(".list");

let data = [];
let i = 0;

function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
    document.querySelector("li").classList.add("test");
  }
}

function storeData() {
  let todoData = [];
  window.localStorage.todoData = data;
  window.localStorage.totoI = i;
}

function loadData() {
  let x = 0;
  if (window.localStorage.todoData) {
    data = [window.localStorage.todoData];
    i = window.localStorage.totoI;
  } else {
    let data = [];
    let i = 0;
  }
}

window.addEventListener("load", getTodos());
window.addEventListener("load", loadData());

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
  storeList();
  storeData();
});

list.addEventListener("click", (e) => {
  let n = e.target.id;

  if (e.target.classList.contains("test")) {
    if (e.target.classList.contains("checked")) {
      e.target.remove();
      storeList();
      storeData();
    } else {
      e.target.classList.add("checked");
      storeList();
      storeData();
    }
  } else if (data[e.target.id][1] === true) {
    e.target.remove();
    storeList();
  } else if (e.target && e.target.nodeName == "LI") {
    e.target.classList.add("checked");
    data[e.target.id][1] = true;
    storeList();
    storeData();
  }
});
