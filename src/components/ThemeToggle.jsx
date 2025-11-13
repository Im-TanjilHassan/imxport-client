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
        className="btn btn-sm border-2 rounded-full text-primary-content"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    );
};

export default ThemeToggle;