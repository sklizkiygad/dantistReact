import React from 'react';
import eyeImg from "../../assets/images/eye.png";
import {Link} from "react-router-dom";

const RegistrationForm = () => {
    return (
        <section>
            <h3>Зарегистрироваться</h3>
            <form className="form-section">

                <div className="form-section__input-block">
                    <label>Фамилия</label>
                    <input type="text" placeholder="Введите фамилию"/>
                </div>

                <div className="form-section__input-block">
                    <label>Имя</label>
                    <input type="text" placeholder="Введите имя"/>
                </div>

                <div className="form-section__input-block">
                    <label>Отчество</label>
                    <input type="text" placeholder="Введите отчество"/>
                </div>

                <div className="form-section__input-block-birth">
                    <label>Дата рождения</label>
                    <div className="form-section__input-block-birth__inputs">
                        <div>
                            <input type="number" placeholder="_ _"/>
                            <label>День</label>
                        </div>

                        <div>
                            <input type="number" placeholder="_ _"/>
                            <label>Месяц</label>
                        </div>

                        <div>
                            <input className="form-section__input-block-birth__inputs__year" type="number" placeholder="_ _ _ _"/>
                            <label>Год</label>
                        </div>
                    </div>



                </div>

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

                <a className="form-section__button-block__change__advice">*Пароль от 8 символов,  латиница</a>
                <button className="main-button">Зарегистрироваться</button>
                <Link to="" className="form-section__button-block__change__tk">Нажимая на кнопку, Я даю согласие
                    на обработку моих персональных данных
                    в рамках федерального закона РФ
                    от 27 июля 2006 г. № 152-Ф3</Link>


            </form>

        </section>
    );
};

export default RegistrationForm;