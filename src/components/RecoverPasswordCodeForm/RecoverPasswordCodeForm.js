import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { checkPhone } from '../CheckInputFunctions/CheckInputFunctions'

const RecoverPasswordCodeForm = ({ setFunction }) => {
	const [code, setCode] = useState('')

	const inputCodeRef = React.createRef()
	const inputCodeLabelRef = React.createRef()

	const onSendPhoneForCode = (e) => {
		e.preventDefault()
		setCode(e.target.value)
		if (checkPhone(code)) {
			console.log(code)
			setFunction(true)
		} else {
			inputCodeRef.current.classList.add('red-advice')
			inputCodeLabelRef.current.classList.add('red-advice')
			alert('mistake')
			setFunction(false)
		}
	}

	return (
		<section>
			<h3>Восстановить пароль</h3>
			<form className='form-section' onSubmit={onSendPhoneForCode}>
				<p className='form-section__button-block__change__advice'>
					Введите код для восстановления пароля
				</p>
				<div className='form-section__input-block'>
					<label ref={inputCodeLabelRef}>Код подтверждения</label>
					<input
						ref={inputCodeRef}
						value={code}
						type='number'
						placeholder='Введите код'
						onChange={(e) => setCode(e.target.value)}
					/>
				</div>
				<button className='main-button'>Отправить код</button>
				<Link to='' className='form-section__button-block__change__reg'>
					Зарегистрироваться
				</Link>
			</form>

			{/*<form className="form-section">*/}
			{/*    <p className="form-section__button-block__change__advice">Введите код для восстановления пароля</p>*/}
			{/*    <div className="form-section__input-block">*/}
			{/*        <label>Код подтверждения</label>*/}
			{/*        <input type="number" placeholder="Телефон"/>*/}
			{/*    </div>*/}
			{/*    <button className="main-button">Отправить код</button>*/}
			{/*    <Link to="" className="form-section__button-block__change__reg">Зарегистрироваться</Link>*/}
			{/*</form>*/}
		</section>
	)
}

export default RecoverPasswordCodeForm
