import React from 'react';
import profileImgBig from "../../assets/images/profileImgBig.png";
import eyeImg from "../../assets/images/eye.png";

const MyDataForm = () => {
    return (
        <form >

            <h3>Ваши личные данные</h3>

            <div className="form-section__profile-form">
                <div className="form-section__profile-img">
                    <img src={profileImgBig} alt="img"/>
                    <button className="main-button">Добавить фото</button>

                </div>

                <div className="form-section__profile-form__inputs">
                    <div>
                        <div className="form-section__input-block">
                            <label>Фамилия</label>
                            <input type="text" placeholder="Фамилия"/>
                        </div>

                        <div className="form-section__input-block">
                            <label>Имя</label>
                            <input type="text" placeholder="Имя"/>
                        </div>

                        <div className="form-section__input-block">
                            <label>Отчество</label>
                            <input type="text" placeholder="Отчество"/>
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


                    </div>

                    <div>

                        <div className="form-section__input-block">
                            <label>Номер телефона</label>
                            <input type="number" placeholder="Телефон"/>
                        </div>

                        <div className="form-section__input-block">
                            <label>Пароль</label>
                            <div className="form-section__input-block__pass">
                                <input type="text"  placeholder="Введите пароль"/>
                                <img src={eyeImg} alt="eye"/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <button className="main-button my-data-button">Сохранить изменения</button>





        </form>
    );
};

export default MyDataForm;