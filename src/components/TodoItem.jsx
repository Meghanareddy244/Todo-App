import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  const [isEditing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.description);
  const [date, setDate] = useState(todo.date);
  const [completed, setCompleted] = useState(todo.completed);

  const handleSave = () => {
    onUpdate({ ...todo, title, description: desc, date, completed });
    setEditing(false);
  };

  const handleToggleCompleted = () => {
    setCompleted((prev) => {
      const newVal = !prev;
      onUpdate({ ...todo, completed: newVal });
      return newVal;
    });
  };

  return (
    <div
      className={`flex items-center justify-between bg-white dark:bg-gray-700 p-4 rounded-lg shadow transition border border-gray-100 dark:border-gray-700 ${
        completed ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggleCompleted}
          className="accent-green-500 w-5 h-5"
        />
        <div className="flex-1">
          {isEditing ? (
            <>
              <input
                className="block w-full mb-1 px-2 py-1 uppercase rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-bold"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={40}
              />
              <input
                className="block w-full mb-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                maxLength={60}
              />
              <input
                type="date"
                className="block w-full mb-1 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-xs"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </>
          ) : (
            <>
              <div
                className={`font-bold text-lg uppercase  dark:text-white ${
                  completed ? "line-through text-green-600" : ""
                }`}
              >
                {title}
              </div>
              <div
                className={`text-gray-600 dark:text-gray-300 text-sm ${
                  completed ? "line-through" : ""
                }`}
              >
                {desc}
              </div>
              <div className="text-xs text-gray-400 mt-1">Date: {date}</div>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 font-bold hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-gray-500 text-white rounded-lg px-3 py-2 ml-2"
          >
          <MdEdit />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-400 text-white rounded-lg px-3 py-2 ml-2"
        >
        <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
