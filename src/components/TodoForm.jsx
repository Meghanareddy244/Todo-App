import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !date) return alert("Please fill all the fields");
    onAdd({ title, description: desc, date, id: Date.now(), completed: false });
    setTitle("");
    setDesc("");
    setDate("");
  };

  return (
    <div className="w-full flex-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-3 w-full max-w-2xl items-center bg-transparent"
      >
        <input
          type="text"
          placeholder="Add Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow min-w-0 px-4 py-2 rounded-lg text-base bg-slate-500 border-gray-600 placeholder-gray-300 text-white font-medium transition border-none shadow-sm"
          maxLength={40}
        />
        <input
          type="text"
          placeholder="Add Description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="flex-grow min-w-0 px-4 py-2 rounded-lg text-base bg-slate-500 border-gray-600 placeholder-gray-300 text-white font-medium transition border-none shadow-sm"
          maxLength={60}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-[160px] px-4 py-2 rounded-lg text-base bg-slate-500 border-gray-600 placeholder-gray-300 text-white font-medium transition border-none shadow-sm"
          placeholder="dd-mm-yyyy"
        />
        <button
          type="submit"
          className="w-[70px] px-0 py-2 rounded-lg bg-blue-400 hover:bg-blue-700 text-gray-800 font-bold shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-shrink-0"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
