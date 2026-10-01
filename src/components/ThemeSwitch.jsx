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
      <label htmlFor="theme-switch" className="theme__label">
        Dark Mode
      </label>
      <input
        type="checkbox"
        id="theme-switch"
        className="theme__toggle"
        role="switch"
        aria-checked={isDarkMode}
        checked={isDarkMode}
        onChange={handleThemeSwitch}
      />
    </div>
  );
};

export default ThemeSwitch;
