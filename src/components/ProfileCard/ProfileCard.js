import React from 'react';
import profileImg from "../../assets/images/profileimg.png";
import {useNavigate} from "react-router";


const ProfileCard = () => {
    const navigate = useNavigate()

    const onLogoutButtonClick = (e) => {
        alert("you logout");
    }

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
                <button className="main-button" onClick={()=>navigate('/my-data')}>Редактировать профиль </button>
                <button className="main-button none-button" onClick={onLogoutButtonClick}>Выйти</button>
            </div>

            
            
        </div>
    );
};

export default ProfileCard;