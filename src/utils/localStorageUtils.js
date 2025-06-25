const STORAGE_KEY = "todos";

/**
 * Get all todos from localStorage
 * @returns {Array} - List of todos
 */
export const getTodos = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * Save todos to localStorage
 * @param {Array} todos - List of todos to save
 */
export const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

/**
 * Add a new todo
 * @param {Object} newTodo - New todo object
 */
export const addTodo = (newTodo) => {
  const todos = getTodos();
  todos.push(newTodo);
  saveTodos(todos);
};

/**
 * Update an existing todo
 * @param {Object} updatedTodo - Updated todo with matching id
 */
export const updateTodo = (updatedTodo) => {
  const todos = getTodos().map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  saveTodos(todos);
};

/**
 * Delete a todo by ID
 * @param {number|string} id - Todo ID to delete
 */
export const deleteTodo = (id) => {
  const todos = getTodos().filter((todo) => todo.id !== id);
  saveTodos(todos);
};

