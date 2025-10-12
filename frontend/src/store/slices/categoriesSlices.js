import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

// Загрузка категорий
export const fetchCategories = createAsyncThunk(
	'categories/fetch',
	async () => {
		const response = await api.get('/categories')
		return response.data
	}
)

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: { items: [], status: 'idle', error: null },
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCategories.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.items = action.payload
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default categoriesSlice.reducer