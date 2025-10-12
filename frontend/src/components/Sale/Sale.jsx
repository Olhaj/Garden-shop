import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./_Sale.scss";

const Sale = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3333/sale/send")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔹 функция для случайного выбора 4 товаров
  const getRandomItems = (array, n) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  return (
    <div className="sales">
      <div className="sales__header">
        <h2>Sale</h2> <hr className="line" />
        <button className="sale__all">All sales</button>
      </div>

      <div className="sales__list">
        {getRandomItems(products, 4).map((item) => {
          const discountPercent = Math.round(
            ((item.price - item.discont_price) / item.price) * 100
          );

          return (
            <div
              key={item.id}
              className="sales__card"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <div className="sales__discount">-{discountPercent}%</div>

              <div className="sales__icons">
                {" "}
                <button className="icon heart">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.747 0-3.322.992-4.062 2.445C11.01 4.742 9.434 3.75 7.688 3.75 5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />{" "}
                  </svg>{" "}
                </button>{" "}
                <button className="icon bag">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 10-8 0v4m12-1H4l1.5 9h13L20 10z"
                    />{" "}
                  </svg>{" "}
                </button>{" "}
              </div>

              <img
                src={`http://localhost:3333${item.image}`}
                alt={item.title}
              />

              <h3>{item.title}</h3>
              <p className="sales__price">
                ${item.discont_price} <span>${item.price}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sale;
