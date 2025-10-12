import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

// Загрузка акций
export const fetchSales = createAsyncThunk('sale/fetch', async () => {
	const response = await api.get('/sale')
	return response.data
})

const saleSlice = createSlice({
	name: 'sale',
	initialState: { items: [], status: 'idle', error: null },
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchSales.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchSales.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload
			})
			.addCase(fetchSales.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default saleSlice.reducer