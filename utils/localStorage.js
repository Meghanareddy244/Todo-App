const STORAGE_KEY = "todos";

/**
 * Get all todos from localStorage
 * @returns {Array} - List of todos
 */
export const getTodos = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
