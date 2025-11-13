import React, { useState } from 'react';

const ThemeToggle = () => {
    
    const [theme, setTheme] = useState("light");
    
    const handleToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
      <button
        onClick={handleToggle}
        className="btn btn-sm bg-primary text-primary-content"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    );
};

export default ThemeToggle;