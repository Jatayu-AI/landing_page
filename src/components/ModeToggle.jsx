import React, { useEffect, useState } from "react";

export default function ModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-700 hover:scale-105"
      title="Toggle Theme"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
