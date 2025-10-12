import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

// Отправка заказа
export const createOrder = createAsyncThunk('order/create', async orderData => {
	const response = await api.post('/order', orderData)
	return response.data
})

const orderSlice = createSlice({
	name: 'order',
	initialState: { current: null, status: 'idle', error: null },
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(createOrder.pending, state => {
				state.status = 'loading'
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.current = action.payload
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default orderSlice.reducer