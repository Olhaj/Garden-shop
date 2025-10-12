import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import IconsBar from "../IconsBar/IconsBar";
import { Menu, X } from "lucide-react"; // иконки бургера

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header_left">
        <div className="header_logo">
          <img src="/images/images_header/logo.png" alt="Logo" />
        </div>
        <ThemeToggle />
      </div>

      {/* Навигация */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="nav_discount">1 day discount!</div>
        <ul className="nav_links">
          <li>
            <a href="#">Main Page</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">All products</a>
          </li>
          <li>
            <a href="#">All sales</a>
          </li>
        </ul>
      </nav>
      <div className="header_right">
        {" "}
        <IconsBar />
        {/* Кнопка бургера — видна только до 760px */}
        <button
          className="burger_btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
