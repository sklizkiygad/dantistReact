import { configureStore } from '@reduxjs/toolkit'
import ServerSlice from './auth-slice'

const store = configureStore({
	reducer: {
		auth: ServerSlice.reducer,
	},
})

export default store
