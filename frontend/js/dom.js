export function deleteTaskElement() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("delete-btn");

  return deleteBtn;
}

export function createTaskElement(todo) {
  const taskElement = document.createElement("li");

  taskElement.dataset.id = todo.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  if (todo.completed) {
    textSpan.classList.add("completed");
  }

  taskElement.append(checkbox, textSpan, deleteBtn);
  return taskElement;
}

export function displayTaskList(todos, container) {
  container.innerHTML = "";

  todos.forEach((todo) => {
    const taskElement = createTaskElement(todo);
    container.append(taskElement);
  });
}
