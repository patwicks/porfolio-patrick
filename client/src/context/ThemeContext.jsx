import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //* Get the current theme in Local Storage
  const storedTheme = window.localStorage.theme;
  //* Set the Initial theme
  const initialTheme = storedTheme === "undefined" ? "dark" : storedTheme;
  //* Current theme on state
  const [theme, setTheme] = useState(initialTheme);

  // //*colorTheme
  const colorTheme = theme === "dark" ? "light" : "dark";

  //* useEffect fro changing class theme on root document
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, colorTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
