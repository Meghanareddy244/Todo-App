import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DarkModeToggle from "./components/DarkModeToggle";
import { getTodos } from "../utils/localStorage";

function App() {
  const [todos, setTodos] = useState([]);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const storedTodos = getTodos();
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

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
        <div className="flex flex-row gap-2 mb-6 w-full justify-center">
          <button
            className={`px-5 py-2 rounded-lg font-semibold text-white transition-all ${
              sortBy === "date" ? "bg-blue-600" : "bg-blue-400 text-white"
            }`}
            onClick={() => setSortBy("date")}
          >
            Sort by Date
          </button>
          <button
            className={`px-5 py-2 rounded-lg font-semibold text-white transition-all ${
              sortBy === "title" ? "bg-blue-600" : "bg-blue-400 text-white"
            }`}
            onClick={() => setSortBy("title")}
          >
            Sort by Title
          </button>
          <button
            className={`px-5 py-2 rounded-lg font-semibold text-white transition-all ${
              sortBy === "completed" ? "bg-blue-600" : "bg-blue-400 text-white"
            }`}
            onClick={() => setSortBy("completed")}
          >
            Sort by Completed
          </button>
        </div>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
}

export default App;
