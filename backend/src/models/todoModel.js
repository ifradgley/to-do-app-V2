import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Resolve directory path for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "../data/todos.json");

/**
 * Read todos from local JSON file
 * @returns {Promise<Array>}
 */
export async function readTodosFromFile() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    // If file doesn't exist, return empty array
    if (error.code === "ENOENT") {
      await writeTodosToFile([]);
      return [];
    }
    throw error;
  }
}

/**
 * Write updated todos array to local JSON file
 * @param {Array} todos
 */
export async function writeTodosToFile(todos) {
  await fs.writeFile(DATA_FILE, JSON.stringify(todos, null, 2), "utf-8");
}
