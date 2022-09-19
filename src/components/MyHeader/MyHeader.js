import React from 'react';
import leftArrow from '../../assets/images/left-arrow.png'
import { Link} from "react-router-dom";
import './MyHeader.css';


const MyHeader = (props) => {
    return (
        <header>
            <div className="head-breadcrumbs">
                <div>

                    <Link to='/'>Главная</Link>/
                    <Link to='/'>Пациентам</Link>/
                    <Link to='/'>Личный кабинет</Link>

                </div>
                <h3>{props.headText}</h3>
            </div>
            <div>
                <Link to='/'>Вернуться на главную <img src={leftArrow} alt="l"/></Link>
            </div>

        </header>
    );
};

export default MyHeader;