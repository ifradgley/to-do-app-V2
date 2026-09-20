let todos = [];

export function getToDos() {
  return [...todos];
}

export function setTodos(newTodos) {
  todos = newTodos;
}

export function addTodoState(newTodo) {
  todos.push(newTodo);
}

export function removeTodoState(id) {
  todos = todos.filter((todo) => todo.id !== id);
}

export function toggleTodoState(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
}
