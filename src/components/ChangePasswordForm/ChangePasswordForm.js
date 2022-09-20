import React from 'react';
import eyeImg from "../../assets/images/eye.png";
import {Link} from "react-router-dom";

const ChangePasswordForm = () => {
    return (
        <section>
            <h3>Сменить пароль</h3>
            <form className="form-section">

                <div className="form-section__input-block">
                    <label className="form-section__input-block__label">Новый пароль</label>
                    <div className="form-section__input-block__pass">
                        <input type="text"  placeholder="Введите пароль"/>
                        <img src={eyeImg} alt="eye"/>
                    </div>
                </div>

                <div className="form-section__input-block">
                    <label className="form-section__input-block__label">Повторите пароль</label>
                    <div className="form-section__input-block__pass">
                        <input type="text" placeholder="Повторите пароль"/>
                        <img src={eyeImg} alt="eye"/>
                    </div>
                </div>


                <p className="form-section__button-block__change__advice">*Пароль от 8 символов,  латиница</p>
                <button className="main-button">Сменить пароль</button>
                <Link to="" className="form-section__button-block__change__reg">Зарегистрироваться</Link>


            </form>
        </section>
    );
};

export default ChangePasswordForm;