import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./_Favorites.scss";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [sort, setSort] = useState("default");
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
    setFiltered(favs);
  }, []);

  useEffect(() => {
    let data = [...favorites];

    // 🔹 фильтр по цене
    data = data.filter((item) => {
      const price = item.discont_price ?? item.price;
      return (
        (priceFrom === "" || price >= Number(priceFrom)) &&
        (priceTo === "" || price <= Number(priceTo))
      );
    });

    // 🔹 сортировка
    if (sort === "asc") {
      data.sort(
        (a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price)
      );
    } else if (sort === "desc") {
      data.sort(
        (a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price)
      );
    }

    setFiltered(data);
  }, [favorites, priceFrom, priceTo, sort]);

  // 🔹 удалить из избранного
  const removeFromFavorites = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites">
      <div className="favorites__header">
        <h2>Liked products</h2>

        <div className="favorites__filters">
          <div className="filter">
            <label>Price</label>
            <input
              type="number"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
              placeholder="from"
            />
          </div>
          <div className="filter">
            <input
              type="number"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
              placeholder="to"
            />
          </div>
          <div className="filter">
            <label>Sorted</label>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="by default">Default</option>
              <option value="asc">Price: low → high</option>
              <option value="desc">Price: high → low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="favorites__list">
        {filtered.length === 0 ? (
          <p>No liked products yet</p>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="favorites__card"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <div className="favorites__discount">
                {item.discont_price
                  ? `-${Math.round(
                      ((item.price - item.discont_price) / item.price) * 100
                    )}%`
                  : null}
              </div>

              {/* 🔹 Иконки */}
              <div className="favorites__icons">
                {/* Heart */}
                <button
                  className="icon heart"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromFavorites(item.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#92A134"
                    stroke="#92A134"
                    strokeWidth="0.5"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
                        -1.747 0-3.322.992-4.062 2.445
                        C11.01 4.742 9.434 3.75 7.688 3.75
                        5.099 3.75 3 5.765 3 8.25
                        c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                {/* Bag */}
                <button
                  className="icon bag"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 10-8 0v4
                        m12-1H4l1.5 9h13L20 10z"
                    />
                  </svg>
                </button>
              </div>

              <img
                src={`http://localhost:3333${item.image}`}
                alt={item.title}
              />

              <h3>{item.title}</h3>
              <p className="favorites__price">
                ${item.discont_price ?? item.price}{" "}
                {item.discont_price && <span>${item.price}</span>}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
