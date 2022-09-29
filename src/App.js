import React, { useEffect } from 'react'

import { BrowserRouter } from 'react-router-dom'

import './assets/css/style.css'
import './assets/css/media.css'

import AppRoutes from './router'
import { useSelector } from 'react-redux'

function App() {
	const { isAuthorization, token } = useSelector((state) => state.auth)

	useEffect(() => {
		sessionStorage.setItem(
			'auth',
			JSON.stringify({ isAuthorization, token }),
		)
	}, [isAuthorization, token])

	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}

export default App
