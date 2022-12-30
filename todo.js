
class TodoItem {
    constructor() {
        this.title = "Placeholder title..";
        this.content = "Placeholder conent...";
        this.startDate = new Date();       
    }

    setDeadline(endDate) {
        this.endDate = endDate;
    }

    setDeadlineIn(days) {
        let date = new Date();
        date = date.setDate(date.getDate() + days);
        date = new Date(date);

        this.endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    }
}


class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodoItem(todoItem) {
        this.todos.push(todoItem);
    }

    printTitles() {
        console.log(`There are ${this.todos.length} entries in the todo list`);
        this.todos.forEach(todo => console.log(todo.title));
    }

    getTodosByTitle(titleQuery) {
        //to-be implemented
        let results = this.todos.find(todo => todo.title.includes(titleQuery));

        if(results == undefined) {
          return [];
        } else {
          return results;
        }
    }
}


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"


// add items to todoList here 

let todoList = new TodoList();

let todo = new TodoItem();
todo.title = "Laundry";
todo.content = "On monday at 15:00 I have to do laundry before parents arrive";
todo.startDate = currentDate;
todo.setDeadline("2023-01-02");

todoList.addTodoItem(todo);

todo = new TodoItem(); // todo är redan deklarerad, här skapar vi endast en ny instans på samma referens som innan
todo.title = "Bake pancakes"
todo.content = "Promised my younger brother to help him bake pancakes at 17:00 tomorrow";
todo.startDate = currentDate;
todo.setDeadline("");

todoList.addTodoItem(todo);

todo = new TodoItem(); // todo är redan deklarerad, här skapar vi endast en ny instans på samma referens som innan
todo.title = "Grocery shopping"
todo.content = "Do this weeks shopping";
todo.startDate = currentDate;
todo.setDeadline("");

todoList.addTodoItem(todo);


// todo = new TodoItem(); // todo är redan deklarerad, här skapar vi endast en ny instans på samma referens som innan
// todo.title = "Dentist"
// todo.content = "Book appointment next week";
// todo.startDate = currentDate;
// todo.setDeadline("2022-01-01");

// todoList.addTodoItem(todo);


