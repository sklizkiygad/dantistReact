import React, { useEffect, useState } from 'react'
import eyeImg from '../../assets/images/eye.png'
import { Link, useNavigate } from 'react-router-dom'
import {
	checkPassword,
	checkPhone,
} from '../CheckInputFunctions/CheckInputFunctions'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/auth-slice'

const LoginForm = () => {
	const { isLoading, isAuthorization } = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')

	const inputPhoneLabelRef = React.createRef()
	const inputPhoneRef = React.createRef()

	const [checkInputs, setCheckInputs] = useState(false)

	const inputPasswordLabelRef = React.createRef()
	const inputPasswordRef = React.createRef()

	const dispatch = useDispatch()

	const navigateToCabinet = () => {
		navigate('/personal-cabinet')
	}

	const onLoginFormSubmit = async (e) => {
		e.preventDefault()
		if (checkPhone(phone) && checkPassword(password)) {
			const data = {
				username: phone,
				password: password,
			}
			console.log(data)
			dispatch(loginUser({ loginData: data, navigateToCabinet }))
		} else {
			if (!checkPhone(phone)) {
				inputPhoneRef.current.classList.add('red-advice')
				inputPhoneLabelRef.current.classList.add('red-advice')
			}
			if (!checkPassword(password)) {
				inputPasswordLabelRef.current.classList.add('red-advice')
				inputPasswordRef.current.classList.add('red-advice')
			}
			setCheckInputs(true)
		}
	}

	const setPasswordText = (e) => {
		if (e.current.type === 'password') {
			e.current.type = 'text'
		} else {
			e.current.type = 'password'
		}
	}
	console.log(isAuthorization)

	useEffect(() => {
		if (isAuthorization) navigate('/personal-cabinet')
	}, [isAuthorization, navigate])

	return (
		<section>
			<h3>Войти в личный кабинет</h3>
			<form onSubmit={onLoginFormSubmit} className='form-section'>
				{checkInputs && (
					<h1 style={{ color: '#e3295c' }}>Заполните Поля!</h1>
				)}
				<div className='form-section__input-block'>
					<label ref={inputPhoneLabelRef}>Номер телефона</label>
					<input
						type='text'
						placeholder='Телефон'
						ref={inputPhoneRef}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>

				<div className='form-section__input-block'>
					<label ref={inputPasswordLabelRef}>Пароль</label>
					<div className='form-section__input-block__pass'>
						<input
							type='password'
							ref={inputPasswordRef}
							placeholder='Введите пароль'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<EyeImg
							src={eyeImg}
							alt='eye'
							onClick={(e) => setPasswordText(inputPasswordRef)}
						/>
					</div>
				</div>

				<button className='main-button' type='submit'>
					{isLoading ? 'loading...' : 'Войти'}
				</button>
			</form>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Link className='form-section__button-block__change__advice red-advice'>
					Забыли пароль?
				</Link>
				<Link
					to='registration'
					className='form-section__button-block__change__reg'
				>
					Зарегистрироваться
				</Link>
			</div>
		</section>
	)
}

const EyeImg = styled.img`
	cursor: pointer;
`

export default LoginForm
