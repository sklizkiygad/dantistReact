import React from 'react';
import eyeImg from "../../assets/images/eye.png";
import {Link} from "react-router-dom";

const RecoverPasswordForm = () => {
    return (
        <section>
            <h3>Восстановить пароль</h3>
            <form className="form-section">
                <p className="form-section__button-block__change__advice">На Ваш телефон придет код для восстановления пароля</p>
                <div className="form-section__input-block">
                    <label>Номер телефона</label>
                    <input type="number" placeholder="Телефон"/>
                </div>
                <button className="main-button">Отправить код</button>
                <Link to="" className="form-section__button-block__change__reg">Зарегистрироваться</Link>
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
    );
};

export default RecoverPasswordForm;