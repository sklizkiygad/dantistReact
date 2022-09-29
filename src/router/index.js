import LoginPage from '../pages/LoginPage/LoginPage'
import React from 'react'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import PersonalCabinet from '../pages/PersonalCabinet/PersonalCabinet'
import PersonalCabinetMyDataPage from '../pages/PersonalCabinetMyDataPage/PersonalCabinetMyDataPage'
import FeedbackPage from '../pages/FeedbackPage/FeedbackPage'
import ReceptionPage from '../pages/ReceptionPage/ReceptionPage'
import ReceptionCalendarPage from '../pages/ReceptionCalendarPage/ReceptionCalendarPage'
import ReceptionHourPage from '../pages/ReceptionHourPage/ReceptionHourPage'
import RecoverPasswordPage from '../pages/RecoverPasswordPage/RecoverPasswordPage'
import ReceptionMakePage from '../pages/ReceptionMakePage/ReceptionMakePage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from './PrivateRoute'

const AppRoutes = () => {
	const { isAuthorization } = useSelector((state) => state.auth)
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Navigate
						to={isAuthorization ? '/personal-cabinet' : '/login'}
					/>
				}
			/>

			<Route path='/login' element={<LoginPage />} />
			<Route element={<ProtectedRoute isAllowed={isAuthorization} />}>
				<Route path='/registration' element={<RegistrationPage />} />
				<Route
					path='/recover-password'
					element={<RecoverPasswordPage />}
				/>
				<Route path='/personal-cabinet' element={<PersonalCabinet />} />
				<Route
					path='/my-data'
					element={<PersonalCabinetMyDataPage />}
				/>
				<Route path='/feedback' element={<FeedbackPage />} />
				<Route path='/reception' element={<ReceptionPage />} />
				<Route
					path='/reception-calendar'
					element={<ReceptionCalendarPage />}
				/>
				<Route path='/reception-hour' element={<ReceptionHourPage />} />
				<Route path='/reception-make' element={<ReceptionMakePage />} />
			</Route>
		</Routes>
	)
}
export default AppRoutes
