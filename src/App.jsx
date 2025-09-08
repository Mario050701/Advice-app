import Cube from "./components/Cube.jsx";
import Quote from "./components/Quote";
import { createContext, useState, useEffect } from "react";
import { GiPowerButton } from "react-icons/gi";

export const ThemeContext = createContext(null);

import "./components/quote.css";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.id = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GiPowerButton
        onClick={toggleTheme}
        className={`light-dark-btn ${theme}`}
      />

      <div>
        <Quote />
        <Cube />
      </div>
    </ThemeContext.Provider>
  );
}
