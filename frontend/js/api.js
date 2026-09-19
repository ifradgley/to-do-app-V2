const API_BASE_URL = "http://localhost:5000/api/todos";

/**
 * Fetch all tasks from the backend
 * @returns {Promise<Array>} Array of todo objects
 */
export async function fetchTodos() {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return response.json();
}

/**
 * Send a new task to the backend
 * @param {Object} todoData - e.g., { title: "Buy milk" }
 * @returns {Promise<Object>} Created todo item with ID
 */
export async function createTodo(todoData) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todoData),
  });
  if (!response.ok) throw new Error("Failed to create todo");
  return response.json();
}

/**
 * Update an existing task status or title
 * @param {string|number} id - Todo ID
 * @param {Object} updates - e.g., { completed: true }
 * @returns {Promise<Object>} Updated todo object
 */
export async function updateTodo(id, updates) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  if (!response.ok) throw new Error("Failed to update todo");
  return response.json();
}

/**
 * Delete a task from the backend
 * @param {string|number} id - Todo ID
 * @returns {Promise<Object>} Confirmation response
 */
export async function deleteTodo(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete todo");
  return response.json();
}
