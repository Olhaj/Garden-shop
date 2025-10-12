import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart } from "../../store/slices/cartSlices";
//import "./_CartProduct.scss";

const CartProduct = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // Тестовый товар
  const product = {
    id: 1,
    title: "Products",
    price: 100,
    discont_price: 80,
    count: 1,
  };

  const addOne = () => {
    dispatch(addToCart({ ...product, count: 1 }));
  };

  const addThree = () => {
    dispatch(addToCart({ ...product, count: 3 }));
  };

  return (
    <div>
      <h2>Тест корзины</h2>
      <button onClick={addOne}>Добавить 1 товар</button>
      <button onClick={addThree}>Добавить 3 товара</button>
      <button onClick={() => dispatch(clearCart())}>Очистить корзину</button>

      <h3>Содержимое корзины:</h3>
      {cart.length === 0 && <p>Корзина пуста</p>}
      {cart.map((item) => (
        <div key={item.id}>
          {item.title} — {item.count} шт — ${item.discont_price} за шт
        </div>
      ))}
    </div>
  );
};

export default CartProduct;
