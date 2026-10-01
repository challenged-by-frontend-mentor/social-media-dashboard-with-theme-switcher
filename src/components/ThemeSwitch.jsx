import { useState } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeSwitch = () => {
    const nextState = !isDarkMode;
    setIsDarkMode(nextState);
    document.documentElement.setAttribute(
      "data-theme",
      nextState ? "dark" : "light",
    );
  };

  return (
    <div className="theme">
      <span className="theme__label">Dark Mode</span>
      <label htmlFor="theme-switch" className="theme__switch">
        <input
          type="checkbox"
          id="theme-switch"
          className="theme__toggle"
          role="switch"
          aria-checked={isDarkMode}
          checked={isDarkMode}
          onChange={handleThemeSwitch}
        />
      </label>
    </div>
  );
};

export default ThemeSwitch;
