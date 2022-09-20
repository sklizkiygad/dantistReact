import React from 'react';
import eyeImg from "../../assets/images/eye.png";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <section>
            <h3>Войти в личный кабинет</h3>
            <form className="form-section">

                <div className="form-section__input-block">
                    <label>Телефон</label>
                    <input type="number" placeholder="Телефон"/>
                </div>

                <div className="form-section__input-block">
                    <label>Пароль</label>
                    <div className="form-section__input-block__pass">
                        <input type="text"  placeholder="Введите пароль"/>
                        <img src={eyeImg} alt="eye"/>
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