import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const registrationUser = createAsyncThunk(
	'auth/registration',
	async ({ registrationData, navigateToLoginPage }) => {
		try {
			const response = await fetch('/accounts/register/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(registrationData),
			})
			const result = await response.json()
			navigateToLoginPage()
			return result
		} catch (error) {
			return error.message
		}
	},
)
export const loginUser = createAsyncThunk(
	'auth/login',
	async ({ loginData, navigateToCabinet }) => {
		try {
			const response = await fetch('/accounts/login/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(loginData),
			})
			const result = await response.json()
			if (response.ok) {
				navigateToCabinet()
			} else {
				alert('Пользватель не найден!!!')
			}
			return result
		} catch (error) {
			window.alert(error.message)
			return error.message
		}
	},
)
const userData = JSON.parse(sessionStorage.getItem('auth')) || {}

const initialState = {
	token: userData.token || null,
	isAuthorization: userData.isAuthorization || false,
	isLoading: false,
	user_id: userData.user_id || null,
}
const ServerSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		logoutInAccount(state) {
			state.isAuthorization = false
			state.token = null
			state.user_id = null
		},
	},
	extraReducers: {
		[registrationUser.pending]: (state) => {
			state.isLoading = true
		},
		[registrationUser.fulfilled]: (state, action) => {
			state.isLoading = false
		},
		[registrationUser.rejected]: (state) => {
			state.isLoading = false
		},
		[loginUser.pending]: (state) => {
			state.isLoading = true
		},
		[loginUser.fulfilled]: (state, action) => {
			state.isLoading = false
			state.isAuthorization = true
			state.token = action.payload.token
			state.user_id = action.payload.user_id
		},
		[loginUser.rejected]: (state) => {
			state.isLoading = false
		},
	},
})
export const serverAction = ServerSlice.actions
export default ServerSlice
