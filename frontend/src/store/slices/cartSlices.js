import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // каждый item: {id, title, price, discont_price, count, ...}
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      // проверяем, есть ли уже товар в корзине
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        // если есть, увеличиваем количество
        existing.count += product.count;
      } else {
        // если нет, добавляем товар с count
        state.items.push({ ...product });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCount: (state, action) => {
      const { id, count } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) item.count = count;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;