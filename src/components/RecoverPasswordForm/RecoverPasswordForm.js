import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {checkPhone} from "../CheckInputFunctions/CheckInputFunctions";

const RecoverPasswordForm = ({setFunction}) => {
    const [phone,setPhone]=useState('');

    const inputPhoneRef=React.createRef();
    const inputPhoneLabelRef=React.createRef();



    const onSendPhoneForCode = (e) => {
        e.preventDefault();
        if(checkPhone(phone)){
            alert('ok')
            setFunction(true);
        }
        else{
           inputPhoneRef.current.classList.add('red-advice');
            inputPhoneLabelRef.current.classList.add('red-advice');
            alert('mistake');
            setFunction(false);
        }
    }



    return (
        <section>
            <h3>Восстановить пароль</h3>
            <form className="form-section" onSubmit={onSendPhoneForCode}>
                <p className="form-section__button-block__change__advice">На Ваш телефон придет код для восстановления пароля</p>
                <div className="form-section__input-block">
                    <label ref={inputPhoneLabelRef}>Номер телефона</label>
                    <input ref={inputPhoneRef} type="number" placeholder="Телефон" onChange={e=>setPhone(e.target.value)}/>
                </div>
                <button className="main-button" >Отправить код</button>
                <Link to="" className="form-section__button-block__change__reg">Зарегистрироваться</Link>
            </form>
        </section>
    );
};

export default RecoverPasswordForm;