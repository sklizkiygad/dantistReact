import React, { useEffect, useState } from 'react'
import eyeImg from '../../assets/images/eye.png'
import { Link, useNavigate } from 'react-router-dom'
import {
	// changeBirthDay,
	// changeBirthMonth,
	// changeBirthYear,
	// checkBirthDay,
	// checkBirthMonth,
	// checkBirthYear,
	// checkFatherName,
	checkFirstName,
	checkPassword,
	// checkPhone,
	// checkSecondName,
} from '../CheckInputFunctions/CheckInputFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { registrationUser } from '../../store/auth-slice'
const RegistrationForm = () => {
	const { isLoading } = useSelector((state) => state.auth)
	const navigate = useNavigate()

	// const [secondName, setSecondName] = useState('')
	const [firstName, setFirstName] = useState('')
	// const [fatherName, setFatherName] = useState('')
	// const [birthDay, setBirthDay] = useState('')
	// const [birthMonth, setBirthMonth] = useState('')
	// const [birthYear, setBirthYear] = useState('')
	// const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')

	const inputFirstNameRef = React.createRef()
	const inputFirstNameLabelRef = React.createRef()

	// const inputSecondNameRef = React.createRef()
	// const inputSecondNameLabelRef = React.createRef()

	// const inputFatherNameRef = React.createRef()
	// const inputFatherNameLabelRef = React.createRef()

	// const inputBirthDayRef = React.createRef()
	// const inputBirthDayLabelRef = React.createRef()

	// const inputBirthMonthRef = React.createRef()
	// const inputBirthMonthLabelRef = React.createRef()

	// const inputBirthYearRef = React.createRef()
	// const inputBirthYearLabelRef = React.createRef()

	// const inputPhoneRef = React.createRef()
	// const inputPhoneLabelRef = React.createRef()

	const inputPasswordRef = React.createRef()
	const inputPasswordLabelRef = React.createRef()

	const [checkInouts, setCheckInputs] = useState(false)

	const dispatch = useDispatch()

	const onRegisterFormSubmit = async (e) => {
		e.preventDefault()

		if (
			// checkSecondName(secondName) &&
			checkFirstName(firstName) &&
			// checkFatherName(fatherName) &&
			// checkBirthDay(birthDay, setBirthDay) &&
			// checkBirthMonth(birthMonth, setBirthMonth) &&
			// checkBirthYear(birthYear, setBirthYear) &&
			// checkPhone(phone) &&
			checkPassword(password)
		) {
			const registrationData = {
				username: firstName,
				password: password,
			}
			dispatch(
				registrationUser({
					registrationData,
					navigateToLoginPage: () => navigate('/login'),
				}),
			)
		} else {
			// if (!checkSecondName(secondName)) {
			// 	inputSecondNameRef.current.classList.add('red-advice')
			// 	inputSecondNameLabelRef.current.classList.add('red-advice')
			// }
			if (!checkFirstName(password)) {
				inputFirstNameRef.current.classList.add('red-advice')
				inputFirstNameLabelRef.current.classList.add('red-advice')
			}
			// if (!checkFatherName(secondName)) {
			// 	inputFatherNameRef.current.classList.add('red-advice')
			// 	inputFatherNameLabelRef.current.classList.add('red-advice')
			// }

			// if (!checkBirthDay(secondName)) {
			// 	inputBirthDayRef.current.classList.add('red-advice')
			// 	inputBirthDayLabelRef.current.classList.add('red-advice')
			// }
			// if (!checkBirthMonth(secondName)) {
			// 	inputBirthMonthRef.current.classList.add('red-advice')
			// 	inputBirthMonthLabelRef.current.classList.add('red-advice')
			// }
			// if (!checkBirthYear(secondName)) {
			// 	inputBirthYearRef.current.classList.add('red-advice')
			// 	inputBirthYearLabelRef.current.classList.add('red-advice')
			// }

			// if (!checkPhone(secondName)) {
			// 	inputPhoneRef.current.classList.add('red-advice')
			// 	inputPhoneLabelRef.current.classList.add('red-advice')
			// }
			if (!checkPassword(firstName)) {
				inputPasswordRef.current.classList.add('red-advice')
				inputPasswordLabelRef.current.classList.add('red-advice')
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

	// const onRegisterFormSubmit = (e) => {
	//     fetch(
	//         'http://praktikd.localhost/accounts/register/',
	//         {
	//             method: 'POST',
	//             body: JSON.stringify({username: state.username, password: state.password}),
	//             headers: {
	//                 'Content-Type': 'application/json'
	//             },
	//         }
	//     ).then(
	//         res => res.json()
	//     ).then(
	//         res => {
	//             if (res.success) {
	//                 state.showRegisterForm = false;
	//                 localStorage.setItem('user_key', res.token);
	//                 localStorage.setItem('userId', res.user_id);
	//                 state.first = true;
	//                 setState(Object.create(state));
	//             }
	//         }
	//     )
	//
	// }
	return (
		<section>
			<h3>Зарегистрироваться</h3>
			{checkInouts && (
				<h2 style={{ color: 'red' }}>Заполните все поля!</h2>
			)}
			<form className='form-section' onSubmit={onRegisterFormSubmit}>
				{/* <div className='form-section__input-block'>
					<label ref={inputFirstNameLabelRef}>Фамилия</label>
					<input
						ref={inputFirstNameRef}
						type='text'
						placeholder='Введите фамилию'
						onChange={(e) => setSecondName(e.target.value)}
					/>
				</div> */}
				<div className='form-section__input-block'>
					<label ref={inputFirstNameLabelRef}>Имя</label>
					<input
						ref={inputFirstNameRef}
						type='text'
						placeholder='Введите имя'
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>

				{/* 

				<div className='form-section__input-block'>
					<label ref={inputFatherNameLabelRef}>Отчество</label>
					<input
						ref={inputFatherNameRef}
						type='text'
						placeholder='Введите отчество'
						onChange={(e) => setFatherName(e.target.value)}
					/>
				</div> */}

				{/* <div className='form-section__input-block-birth'>
					<label>Дата рождения</label>
					<div className='form-section__input-block-birth__inputs'>
						<div>
							<input
								ref={inputBirthDayRef}
								type='number'
								placeholder='_ _'
								onChange={(e) => changeBirthDay(e, setBirthDay)}
							/>
							<label ref={inputBirthDayLabelRef}>День</label>
						</div>

						<div>
							<input
								ref={inputBirthMonthRef}
								type='number'
								placeholder='_ _'
								onChange={(e) =>
									changeBirthMonth(e, setBirthMonth)
								}
							/>
							<label ref={inputBirthMonthLabelRef}>Месяц</label>
						</div>

						<div>
							<input
								ref={inputBirthYearRef}
								className='form-section__input-block-birth__inputs__year'
								type='number'
								placeholder='_ _ _ _'
								onChange={(e) =>
									changeBirthYear(e, setBirthYear)
								}
							/>
							<label ref={inputBirthYearLabelRef}>Год</label>
						</div>
					</div>
				</div>

				<div className='form-section__input-block'>
					<label ref={inputPhoneLabelRef}>Телефон</label>
					<input
						ref={inputPhoneRef}
						type='number'
						placeholder='Телефон'
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div> */}

				<div className='form-section__input-block'>
					<label ref={inputPasswordLabelRef}>Пароль</label>
					<div className='form-section__input-block__pass'>
						<input
							ref={inputPasswordRef}
							type='password'
							placeholder='Введите пароль'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<img
							src={eyeImg}
							alt='eye'
							onClick={(e) => setPasswordText(inputPasswordRef)}
						/>
					</div>
				</div>

				<a className='form-section__button-block__change__advice'>
					*Пароль от 8 символов, латиница
				</a>
				<button className='main-button' type='submit'>
					{isLoading ? 'Загрузка...' : 'Зарегистрироваться'}
				</button>
				<Link to='' className='form-section__button-block__change__tk'>
					Нажимая на кнопку, Я даю согласие на обработку моих
					персональных данных в рамках федерального закона РФ от 27
					июля 2006 г. № 152-Ф3
				</Link>
			</form>
		</section>
	)
}

export default RegistrationForm
