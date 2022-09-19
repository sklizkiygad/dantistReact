import React from 'react';
import profileImg from "../../assets/images/profileimg.png";
import './ProfileCard.css';
import InputFormButton from "../InputFormButton/InputFormButton";
import MyButton from "../MyButton/MyButton";

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <h3>Вы авторизованы</h3>
            <img src={profileImg} alt="profile"/>
            <div className="profile-card__info">
                <p className="profile-card__info__head">ФИО</p>
                <p>Зубенко Михаил Петрович</p>
            </div>

            <div className="profile-card__info">
                <p className="profile-card__info__head">Дата рождения</p>
                <p>10 октября 1994 года </p>
            </div>


            <div  className="form-section__button-block__profile">
                <MyButton buttonText="Редактировать профиль"/>
                <MyButton buttonText="Выйти" addStyle="none-color"/>
            </div>

            
            
        </div>
    );
};

export default ProfileCard;