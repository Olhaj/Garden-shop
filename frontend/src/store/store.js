import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlices';
import categoriesReducer from './slices/categoriesSlices';
import saleReducer from './slices/saleSlices';
import orderReducer from './slices/orderSlice';
import favoritesReducer from "./slices/favoritesSlices";
import cartReducer from "./slices/cartSlices";





export const store = configureStore({
	reducer: {
		products: productsReducer,
		categories: categoriesReducer,
		sale: saleReducer,
		order: orderReducer,
		favorites: favoritesReducer,
		cart: cartReducer,
	},
})

export default store