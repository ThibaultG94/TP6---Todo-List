const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const list = document.querySelector(".list");
function storeList() {
    window.localStorage.todoList = list.innerHTML;
}
function getTodos() {
    if (window.localStorage.todoList) list.innerHTML = window.localStorage.todoList;
    else {
        list.innerHTML = `<li>Cliquez sur une tâche pour la supprimer</li>`;
        document.querySelector("li").classList.add("test");
    }
}
window.addEventListener("load", getTodos());
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let todo = input.value;
    input.value = "";
    const node = document.createElement("li");
    let textNode = document.createTextNode(todo);
    node.appendChild(textNode);
    list.appendChild(node);
    const newLi = [
        node.textContent,
        false
    ];
    data.push(newLi);
    storeList();
});
list.addEventListener("click", (e)=>{
    let n = e.target.id;
    if (e.target.classList.contains("checked")) {
        e.target.remove();
        storeList();
    } else {
        e.target.classList.add("checked");
        storeList();
    }
});

//# sourceMappingURL=index.c36f364e.js.map
