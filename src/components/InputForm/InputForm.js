import React from 'react';
import eyeImg from '../../assets/images/eye.png';
import './InputForm.css';
import {Link} from "react-router-dom";
import InputFormButton from "../InputFormButton/InputFormButton";
import profileImgBig from '../../assets/images/profileImgBig.png';
import MyButton from "../MyButton/MyButton";



const InputForm = (props) => {
    return (
        <form className="form-section">


            {/*auth blocks*/}


            {props.pageType==='login' &&
            <div className="form-section__auth">
                <h3>Войти в личный кабинет</h3>
                <div className="input-block">
                    <label className="input-block__label" htmlFor="authPhone">Номер телефона</label>
                    <input className="input-block__input" type="number" placeholder="Телефон"/>
                </div>

                <div className="input-block">
                    <label className="input-block__label" htmlFor="authPassword">Пароль</label>

                    <div className="input-block__pass">
                        <input type="text" className="input-block__pass__input" placeholder="Введите пароль"/>
                        <img src={eyeImg}/>
                    </div>


                    <div  className="form-section__button-block__auth">
                        <Link to="" className="form-section__button-block__auth__forget">Забыли пароль?</Link>
                        <MyButton buttonText="Войти"/>
                        <Link to="" className="form-section__button-block__auth__reg">Зарегистрироваться</Link>
                    </div>


                </div>

            </div>

            }


            {/*auth blocks*/}


            {/*reg blocks*/}

            {props.pageType==='reg' &&

            <div className="form-section__reg">
                <h3>Зарегистрироваться</h3>
                <div className="input-block">
                    <label className="input-block__label">Фамилия</label>
                    <input className="input-block__input" type="text" placeholder="Ведите фамилию"/>
                </div>

                <div className="input-block">
                    <label className="input-block__label">Имя</label>
                    <input className="input-block__input" type="text" placeholder="Ведите имя"/>
                </div>

                <div className="input-block">
                    <label className="input-block__label">Отчество</label>
                    <input className="input-block__input" type="text" placeholder="Ведите отчество"/>
                </div>

                <div className="input-block">
                    <label className="input-block__label">Номер телефона</label>
                    <input className="input-block__input" type="number" placeholder="Телефон"/>
                </div>

                <div className="input-block">
                    <label className="input-block__label" htmlFor="authPassword">Пароль</label>

                    <div className="input-block__pass">
                        <input type="text" className="input-block__pass__input" placeholder="Введите пароль"/>
                        <img src={eyeImg} alt="eye"/>
                    </div>
                </div>

                <div  className="form-section__button-block__reg">
                    <p className="form-section__button-block__reg__advice">*Пароль от 8 символов, латиница</p>
                    <MyButton buttonText="Зарегистрироваться"/>
                    <p className="form-section__button-block__reg__tk">Нажимая на кнопку, Я даю согласие на обработку моих персональных данных
                        в рамках федерального закона РФ
                        от 27 июля 2006 г. № 152-Ф3</p>
                </div>



            </div>
            }

            {/*reg blocks*/}

            {/*forgot password blocks*/}


            {props.pageType==='forgot' &&
            <div className="form-section__auth">
                <h3>Восстановить пароль</h3>
                <div className="input-block">
                    <label className="input-block__label" htmlFor="authPhone">Номер телефона</label>
                    <input className="input-block__input" type="number" placeholder="Телефон"/>
                </div>
                <div  className="form-section__button-block__forgot">
                    <p className="form-section__button-block__forgot__advice">На Ваш телефон придет код для восстановления пароля</p>
                    <MyButton buttonText="Отправить код"/>
                    <Link to="" className="form-section__button-block__forgot__reg">Зарегистрироваться</Link>
                </div>
            </div>

            }

            {props.pageType==='change' &&
            <div className="form-section__change">
                <h3>Восстановить пароль</h3>

                <div className="input-block">
                    <label className="input-block__label" htmlFor="authPassword">Новый пароль</label>

                    <div className="input-block__pass">
                        <input type="text" className="input-block__pass__input" placeholder="Введите пароль"/>
                        <img src={eyeImg} alt="eye"/>
                    </div>
                </div>

                <div className="input-block">
                    <label className="input-block__label" htmlFor="authPassword">Повторите пароль</label>

                    <div className="input-block__pass">
                        <input type="text" className="input-block__pass__input" placeholder="Повторите пароль"/>
                        <img src={eyeImg} alt="eye"/>
                    </div>
                </div>

                <div  className="form-section__button-block__change">
                    <p className="form-section__button-block__change__advice">На Ваш телефон придет код для восстановления пароля</p>
                    <MyButton buttonText="Отправить код"/>
                    <Link to="" className="form-section__button-block__change__reg">Зарегистрироваться</Link>
                </div>
            </div>
            }

            {/*forgot password blocks*/}


            {/*your profile blocks*/}
            {props.pageType==='mydata' &&

            <div className="form-section__my-data">
                <h3>Ваши личные данные</h3>

            <div className="form-section__my-data__info">
                <div className="form-section__my-data__img">
                    <img src={profileImgBig} alt="profile"/>
                    <MyButton buttonText="Добавить фото"/>
                </div>


                <div className="form-section__my-data__form">
                    <div className="input-block">
                        <label className="input-block__label">Фамилия</label>
                        <input className="input-block__input" type="text" placeholder="Ведите фамилию"/>
                    </div>

                    <div className="input-block">
                        <label className="input-block__label">Имя</label>
                        <input className="input-block__input" type="text" placeholder="Ведите имя"/>
                    </div>

                    <div className="input-block">
                        <label className="input-block__label">Отчество</label>
                        <input className="input-block__input" type="text" placeholder="Ведите отчество"/>
                    </div>

                    <div className="input-block__birthday">
                        <label className="input-block__label">Дата рождения</label>
                        <div className="input-block__birthday__inputs">
                            <div className="input-day">
                                <input className="input-block__input " type="number" placeholder="_ _" />
                                <label>День</label>
                            </div>
                            <div className="input-month">
                                <input className="input-block__input " type="number" placeholder="_ _" />
                                <label>Месяц</label>
                            </div>

                      <div className="input-year">
                          <input className="input-block__input " type="number" placeholder="_ _ _ _" />
                          <label >Год</label>
                      </div>

                        </div>
                    </div>


                    <div  className="form-section__button-block__profile">
                        <MyButton buttonText="Сохранить изменения"/>
                    </div>


                </div>

                <div className="form-section__my-data__form">
                    <div className="input-block">
                        <label className="input-block__label" htmlFor="authPhone">Номер телефона</label>
                        <input className="input-block__input" type="number" placeholder="Телефон"/>
                    </div>
                    <div className="input-block">
                        <label className="input-block__label" htmlFor="authPassword">Пароль</label>

                        <div className="input-block__pass">
                            <input type="text" className="input-block__pass__input" placeholder="Введите пароль"/>
                            <img src={eyeImg} alt="eye"/>

                        </div>
                        <p className="input-block-advice">*Пароль от 8 символов,  латиница</p>
                    </div>
                </div>
</div>



            </div>
            }
            {/*your profile blocks*/}



        </form>
    );
};

export default InputForm;