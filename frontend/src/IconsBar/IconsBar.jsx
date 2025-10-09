import React from "react";
import "./IconsBar.scss";
import { useEffect, useState } from "react";

export default function IconsBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const updateTheme = () => {
      const body = document.body;
      if (body.classList.contains("dark")) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };

    // следим за изменением класса body
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // начальное состояние
    updateTheme();

    return () => observer.disconnect();
  }, []);

  return (
    <div className="icons_bar">
      <button className="icon_btn">
        <img
          src={`/images/images_header/favorites_${theme}.svg`}
          alt="favorites"
        />
      </button>
      <button className="icon_btn">
        <img src={`/images/images_header/cart_${theme}.svg`} alt="cart" />
      </button>
    </div>
  );
}
