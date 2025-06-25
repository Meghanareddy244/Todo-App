import React, { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored === "dark";
    // If not stored, use system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
};

const DarkModeToggle = () => {
  const [dark, setDark] = useState(getInitialTheme);

  // Sync dark class on mount and when dark changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="text-right">
      <button
        onClick={() => setDark((d) => !d)}
        className={`bg-gray-600 ${
          dark ? "text-yellow-200" : "text-white"
        } px-3 py-1 rounded`}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
