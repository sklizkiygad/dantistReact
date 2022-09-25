import React, {useState} from 'react';
import eyeImg from "../../assets/images/eye.png";
import {Link} from "react-router-dom";
import {
    checkPassword, checkPhone,
} from "../CheckInputFunctions/CheckInputFunctions";


const LoginForm = () => {

    const[phone,setPhone]=useState('');
    const[password,setPassword]=useState('');

    const inputPhoneLabelRef=React.createRef();
    const inputPhoneRef=React.createRef();


    const inputPasswordLabelRef=React.createRef();
    const inputPasswordRef=React.createRef();





    const  onLoginFormSubmit = async (e) => {
        e.preventDefault();
        if(
            checkPhone(phone) &&
            checkPassword(password)){
            alert('ok');

        }
        else{
            if(!checkPhone(phone)){
            inputPhoneRef.current.classList.add("red-advice");
            inputPhoneLabelRef.current.classList.add("red-advice");

            }
            if(!checkPassword(password)){
                inputPasswordLabelRef.current.classList.add("red-advice");
                inputPasswordRef.current.classList.add("red-advice");
            }
            alert('mistake');
        }
    }

    const setPasswordText = (e)=>{

        if(e.current.type==='password'){
            e.current.type='text'
        }
        else{
            e.current.type='password'
        }

    }


    return (
        <section>
            <h3>Войти в личный кабинет</h3>
            <form onSubmit={onLoginFormSubmit} className="form-section">

                <div className="form-section__input-block">
                    <label ref={inputPhoneLabelRef}>Номер телефона</label>
                    <input type="number" placeholder="Телефон" ref={inputPhoneRef} onChange={(e)=>setPhone(e.target.value)}/>
                </div>

                <div className="form-section__input-block">
                    <label ref={inputPasswordLabelRef}>Пароль</label>
                    <div className="form-section__input-block__pass">
                        <input type="password" ref={inputPasswordRef}  placeholder="Введите пароль" onChange={(e)=>setPassword(e.target.value)}/>
                        <img src={eyeImg} alt="eye" onClick={(e)=>setPasswordText(inputPasswordRef)}/>
                    </div>
                </div>

                <Link className="form-section__button-block__change__advice red-advice">Забыли пароль?</Link>
                <button className="main-button">Войти</button>
                <Link to="" className="form-section__button-block__change__reg">Зарегистрироваться</Link>


            </form>

        </section>
    );
};

export default LoginForm;