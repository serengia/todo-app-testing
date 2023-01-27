class Crud {
  constructor() {
    this.todoListContainer = document.querySelector(".todo-list");
  }

  getToDos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  getTodoItemMarkup(todo) {
    return `<li class="item-wrapper todo-item"  data-complete="${
      todo.complete
    }" data-id="${todo.id}" data-index="${todo.index}">
    <input type="checkbox" data-id="${todo.id}" ${
      todo.complete ? "checked" : null
    } class="todo-checkbox">
    <input type="text" value="${todo.description}" data-id="${
      todo.id
    }" class="todo-description"/>
   
    <span class="icon-box todo-action-icons">
     <i class="item-icon fa-solid fa-trash-can" data-id="${todo.id}"></i>
     <i class="item-icon fa-solid fa-xmark"></i>
     <i class="item-icon fa-solid fa-ellipsis-vertical"></i>
   
    </span>
   </li>`;
  }

  updateUI() {
    let todoMarkup = "";
    const todos = this.getToDos();

    const sortedTodos = todos.sort((a, b) => a.index - b.index);

    sortedTodos.forEach((todo) => {
      todoMarkup += this.getTodoItemMarkup(todo);
    });

    this.todoListContainer.innerHTML = todoMarkup;

    const nodes = document.querySelectorAll(".todo-item");

    return [...nodes];
  }

  addItem(description, complete = false) {
    const todoObj = {
      description,
      complete,
      id: Date.now().toString(),
    };

    return todoObj;
  }

  //   Add todo
  addTodo(description, complete = false) {
    const todoListContainer = document.querySelector(".todo-list");
    const todoArr = this.getToDos();

    const todoObj = this.addItem(description, complete);

    todoArr.push({ ...todoObj });

    // Save to local storage
    localStorage.setItem("todos", JSON.stringify(todoArr));

    const todoMarkup = this.getTodoItemMarkup({ ...todoObj });
    todoListContainer.insertAdjacentHTML("beforeend", todoMarkup);
  }

  deleteItem(id, todos) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    updatedTodos.forEach((obj, i) => {
      obj.index = i;
    });

    return ["success", updatedTodos];
  }

  removeItem(id) {
    const todos = this.getToDos();
    const updatedTodos = this.deleteItem(id, todos)[1];
    // Save updated list to local
    localStorage.setItem("todos", JSON.stringify([...updatedTodos]));
  }

  updateItem(id, text, todos) {
    // const todos = todosArr;
    const itemToUpdate = todos.find((todoObj) => todoObj.id === id);

    const initialText = itemToUpdate?.description;
    // if (text === initialText) return;

    itemToUpdate.description = text;

    const itemToUpdateIndex = todos.findIndex((todo) => todo.id === id);
    if (itemToUpdateIndex === -1) return;

    todos[itemToUpdateIndex] = itemToUpdate;

    return [...todos];
  }

  updateTodo(id, text) {
    const todos = this.getToDos();
    const updatedTodos = this.updateItem(id, text, todos);
    // Save changes to local storage
    localStorage.setItem("todos", JSON.stringify([...updatedTodos]));
  }

  updateItemStatus(id, status, todosArr) {
    const todos = todosArr;
    const itemToUpdate = [...todos].find((todoObj) => todoObj.id === id);
    itemToUpdate.complete = status;

    const itemToUpdateIndex = todos.findIndex((todo) => todo.id === id);
    if (itemToUpdateIndex === -1) return;

    todos[itemToUpdateIndex] = itemToUpdate;

    return todos;
  }

  updateTodoStatus(id, status) {
    const todos = this.getToDos();
    const updatedTodos = this.updateItem(id, status, todos);

    localStorage.setItem("todos", JSON.stringify([...updatedTodos]));
  }
}

export default Crud;
