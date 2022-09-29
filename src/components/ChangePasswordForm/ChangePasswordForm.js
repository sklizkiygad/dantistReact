import React, { useState } from 'react'
import eyeImg from '../../assets/images/eye.png'
import { Link } from 'react-router-dom'
import {
	checkPassword,
	checkRepeatPassword,
} from '../CheckInputFunctions/CheckInputFunctions'

const ChangePasswordForm = () => {
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

	const inputPasswordRef = React.createRef()
	const inputPasswordLabelRef = React.createRef()

	const inputRepeatPasswordLabelRef = React.createRef()
	const inputRepeatPasswordRef = React.createRef()

	const onChangePassword = (e) => {
		e.preventDefault()
		if (checkRepeatPassword(password, repeatPassword)) {
			const changeData = {
				password: password, 
				repeatPassword: repeatPassword,
			}
			console.log(changeData)
		} else {
			if (!checkRepeatPassword(password, repeatPassword)) {
				inputPasswordRef.current.classList.add('red-advice')
				inputPasswordLabelRef.current.classList.add('red-advice')
				inputRepeatPasswordRef.current.classList.add('red-advice')
				inputRepeatPasswordLabelRef.current.classList.add('red-advice')
			}
			alert('mistake')
		}
	}

	const setPasswordText = (e) => {
		if (e.current.type === 'password') {
			e.current.type = 'text'
		} else {
			e.current.type = 'password'
		}
	}

	return (
		<section>
			<h3>Сменить пароль</h3>

			<form className='form-section' onSubmit={onChangePassword}>
				<div className='form-section__input-block'>
					<label
						ref={inputPasswordLabelRef}
						className='form-section__input-block__label'
					>
						Новый пароль
					</label>
					<div className='form-section__input-block__pass'>
						<input
							type='password'
							placeholder='Введите пароль'
							ref={inputPasswordRef}
							onChange={setPassword}
						/>
						<img
							src={eyeImg}
							alt='eye'
							onClick={(e) => setPasswordText(inputPasswordRef)}
						/>
					</div>
				</div>

				<div className='form-section__input-block'>
					<label
						ref={inputRepeatPasswordLabelRef}
						className='form-section__input-block__label'
					>
						Повторите пароль
					</label>
					<div className='form-section__input-block__pass'>
						<input
							type='password'
							placeholder='Повторите пароль'
							ref={inputRepeatPasswordRef}
							onChange={setRepeatPassword}
						/>
						<img
							src={eyeImg}
							alt='eye'
							onClick={(e) =>
								setPasswordText(inputRepeatPasswordRef)
							}
						/>
					</div>
				</div>

				<p className='form-section__button-block__change__advice'>
					*Пароль от 8 символов, латиница
				</p>
				<button className='main-button'>Сменить пароль</button>
				<Link to='' className='form-section__button-block__change__reg'>
					Зарегистрироваться
				</Link>
			</form>
		</section>
	)
}

export default ChangePasswordForm
