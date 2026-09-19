import { readTodosFromFile, writeTodosToFile } from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await readTodosFromFile();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to read todos" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const todos = await readTodosFromFile();
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };

    todos.push(newTodo);
    await writeTodosToFile(todos);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await readTodosFromFile();
    const index = todos.findIndex((t) => t.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todos[index] = { ...todos[index], ...req.body };
    await writeTodosToFile(todos);

    res.json(todos[index]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    let todos = await readTodosFromFile();
    todos = todos.filter((t) => t.id !== id);
    await writeTodosToFile(todos);

    res.json({ message: "Todo deleted successfully", id });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
