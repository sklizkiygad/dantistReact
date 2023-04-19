import React from 'react';
import {Link} from "react-router-dom";
import MyHeader from "../../components/MyHeader/MyHeader";
import MyFooter from "../../components/MyFooter/MyFooter";
import './AdditionalPage.css';
const AdditionalPage = () => {
    return (
        <div className="additional-page">

            <MyHeader headText={'Личный кабинет'}/>
            <section>

            <h3>Навигация по личному кабинету</h3>

            <ul className="navigation-list">
                <li><Link to={'/registration'}>Регистрация</Link></li>
                <li><Link to={'/recover-password'}>Восстановить пароль</Link></li>
                <li><Link to={'/personal-cabinet'}>Личный кабинет</Link></li>
                <li><Link to={'/my-data'}>Мои данные</Link></li>
                <li><Link to={'/feedback'}>Оставить отзыв</Link></li>
                <li><Link to={'/reception'}>Записаться</Link></li>
                <li><Link to={'/reception-calendar'}>Календарь записей</Link></li>
                <li> <Link to={'/reception-hour'}>Часы приема</Link></li>
                <li><Link to={'/reception-make'}>Создать запись</Link></li>
            </ul>

            <MyFooter/>
            </section>
        </div>

    );
};

export default AdditionalPage;