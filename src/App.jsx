import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DarkModeToggle from "./components/DarkModeToggle";
import {
  getTodos,
  saveTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  // clearTodosByDate,
} from "./utils/localStorageUtils";

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const storedTodos = getTodos();
  //   if (storedTodos) {
  //     setTodos(storedTodos);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updated) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === updated.id) {
          return updated;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen min-w-screen flex  items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100  dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 relative">
      <div className="absolute top-6 right-10 z-10">
        <DarkModeToggle />
      </div>
      <div className="w-full max-w-2xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center mt-12">
        <h1 className="text-4xl font-extrabold text-blue-800 dark:text-white text-center mb-6 tracking-tight">
          TODO APP
        </h1>
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
