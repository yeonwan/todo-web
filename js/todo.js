const todoForm = document.querySelector("form#todo-form");
const todoInput = document.querySelector("form#todo-form input");
const todoList = document.querySelector("#todo-list");

const TO_DO_KEY = "todo";

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const id = Date.now() + Math.random();
    const todoObj = {id : id, text: newTodo};
    saveTodo(todoObj);
    paintTodo(todoObj);
}

let toDos = [];

function saveTodo(todoObj){
    toDos.push(todoObj);
    localStorage.setItem(TO_DO_KEY, JSON.stringify(toDos));
}

function paintTodo(todoObj){
    const newTodo = todoObj.text; 
    const li = document.createElement("li"); 
    li.id = todoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.textContent = newTodo;
    button.textContent = "❌";
    button.addEventListener("click", (event) => {
        const parent = event.target.parentNode;
        const id = parent.id;
        parent.remove();
        toDos = JSON.parse(localStorage.getItem(TO_DO_KEY));
        console.log(toDos);
        toDos = toDos.filter(todo => todo.id != id);
        console.log(toDos.length);
        if(toDos.length === 0) {
            localStorage.removeItem(TO_DO_KEY);
        }else{
            localStorage.setItem(TO_DO_KEY, JSON.stringify(toDos));
        }
        
        
    })
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


todoForm.addEventListener("submit", handleTodoSubmit);

function loadTodos(){ 
    const savedTodos = JSON.parse(localStorage.getItem(TO_DO_KEY));
    if(savedTodos !== null) {
        toDos = savedTodos;
    }

    for(let todo of toDos){
        paintTodo(todo);
    }
}

loadTodos();




