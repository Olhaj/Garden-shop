import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // путь к контексту
import "./_ThemeToggle.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`switch ${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle light/dark mode"
    >
      <span className="knob" />
      <img src="/images/images_header/sun.svg" alt="Sun" className="icon sun" />
      <img
        src="/images/images_header/moon.svg"
        alt="Moon"
        className="icon moon"
      />
    </button>
  );
};

export default ThemeToggle;
