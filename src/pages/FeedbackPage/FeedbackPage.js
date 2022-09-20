import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";



const FeedbackPage = () => {
    return (
        <div>
            <MyHeader headText={'Личный кабинет'}/>

            <section className="personal-cabinet">

                <div className="personal-cabinet__main-block">

                    <SectionNavbar/>

                    <h3>Оставьте отзыв о нашей клинике на сайте
                        или на сторонних ресурсах</h3>

                    <div className="feedback-buttons">
                        <button className="main-button">Перейти в Отзовик</button>
                        <button className="main-button">Перейти в Карты</button>
                        <button className="main-button none-button">Оставить отзыв на сайте</button>
                    </div>




                </div>

                <ProfileCard/>
            </section>
            <MyFooter/>
        </div>
    );
};

export default FeedbackPage;