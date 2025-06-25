import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onUpdate, onDelete }) => {
  // Group todos by date
  const grouped = todos.reduce((acc, todo) => {
    (acc[todo.date] = acc[todo.date] || []).push(todo);
    return acc;
  }, {});

  const [openGroups, setOpenGroups] = useState(() => {
    const initial = {};
    Object.keys(grouped).forEach((date) => {
      initial[date] = true;
    });
    return initial;
  });

  const toggleGroup = (date) => {
    setOpenGroups((prev) => ({ ...prev, [date]: !prev[date] }));
  };

  return (
    <div className="w-full mt-6">
      {Object.keys(grouped)
        // .sort()
        .map((date) => (
          <div key={date} className="mb-6">
            <div
              className="flex items-center justify-between bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-t-lg cursor-pointer select-none"
              onClick={() => toggleGroup(date)}
            >
              <span className="font-bold text-blue-800 dark:text-blue-200 text-lg">
                {date}{" "}
                <span className="text-sm text-gray-500">
                  ({grouped[date].length})
                </span>
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xl dark:text-white">{openGroups[date] ? "-" : "+"}</span>
              </div>
            </div>
            {openGroups[date] && (
              <div className="space-y-3 bg-white dark:bg-gray-900 rounded-b-lg shadow p-4">
                {grouped[date].map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default TodoList;
