const todoContainer = document.querySelector(".todo-container");
const addedTodos = document.querySelector('.added-todos');
let todoInput = document.querySelector('.todo-input');
let button = document.querySelector('.button');
// let newTodos = document.querySelector('.new-todos');

let newInput = [];

function addUsers(){
  let template = newInput.map(input => `<li><p>${newInput}</p></li>`).join;
  todoInput.innerHTML = template;
}

button.addEventListener('click', () =>{
  newInput.push(todoInput.value);
  todoInput.value = '';

  todoContainer.append(newInput)
})






// function getInput(){
  
//   let value = todoInput.value;
//   console.log(value);

    
//   todo = new TodoItem(); // todo är redan deklarerad, här skapar vi endast en ny instans på samma referens som innan
//   // todo.title = "Grocery shopping"
//   // todo.content = "Do this weeks shopping";
//   // todo.startDate = currentDate;
//   // todo.setDeadline("");
//   todo.added = value;

//   todoList.addTodoItem(todo);
// }


function createTodoListItem(todo) {
  let li = document.createElement("li");
  li.innerHTML = `
  <input type="checkbox" class="checkbox"/><h3>${todo.title}</h3>
  <p>${todo.content}</p>
  <p>Created: ${todo.startDate}</p>
  <p>Deadline: ${todo.endDate}</p>
  `;
  
  return li;
}

todoList.todos.forEach(todo => {
  let li = createTodoListItem(todo);
  todoContainer.append(li);
});



