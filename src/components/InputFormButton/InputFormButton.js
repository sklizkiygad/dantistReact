import React from 'react';
import {Link} from "react-router-dom";
import './InputFormButton.css';

const InputFormButton = (props) => {
    return (


        <div className="form-section__button-block">
            {props.pageType === 'login' &&
            <div  className="form-section__button-block__auth">
                <Link to="" className="form-section__button-block__auth__forget">Забыли пароль?</Link>
                <button type="submit" className="form-section__button-block__auth__login-button">Войти</button>
                <Link to="" className="form-section__button-block__auth__reg">Зарегистрироваться</Link>
            </div>
            }

            {props.pageType === 'reg' &&

            <div  className="form-section__button-block__reg">
                <p className="form-section__button-block__reg__advice">*Пароль от 8 символов,  латиница</p>
                <button type="submit" className="form-section__button-block__reg__login-button">Зарегистрироваться</button>
                <p className="form-section__button-block__reg__tk">Нажимая на кнопку, Я даю согласие на обработку моих персональных данных
                    в рамках федерального закона РФ
                    от 27 июля 2006 г. № 152-Ф3</p>
            </div>
            }

            {props.pageType === 'forgot' &&
            <div  className="form-section__button-block__forgot">
                <p className="form-section__button-block__forgot__advice">На Ваш телефон придет код для восстановления пароля</p>
                <button type="submit" className="form-section__button-block__forgot__login-button">Отправить код</button>
                <Link to="" className="form-section__button-block__forgot__reg">Зарегистрироваться</Link>
            </div>
            }

            {props.pageType === 'change' &&
            <div  className="form-section__button-block__change">
                <p className="form-section__button-block__change__advice">На Ваш телефон придет код для восстановления пароля</p>
                <button type="submit" className="form-section__button-block__change__login-button">Отправить код</button>
                <Link to="" className="form-section__button-block__change__reg">Зарегистрироваться</Link>
            </div>
            }

            {props.pageType === 'profile' &&
            <div  className="form-section__button-block__profile">
                <button type="submit" className="form-section__button-block__profile__edit-button">Редактировать профиль</button>
                <button type="submit" className="form-section__button-block__profile__exit-button">Выйти</button>
            </div>
            }


        </div>
    );
};

export default InputFormButton;