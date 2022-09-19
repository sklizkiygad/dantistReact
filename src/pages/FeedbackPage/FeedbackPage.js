import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import InputForm from "../../components/InputForm/InputForm";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";
import MyButton from "../../components/MyButton/MyButton";
import './FeedbackPage.css';

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
                        <MyButton buttonText="Перейти в Отзовик"/>
                        <MyButton buttonText="Перейти в Карты"/>
                        <MyButton buttonText="Оставить отзыв на сайте" addStyle="none-color"/>
                    </div>


                </div>

                <ProfileCard/>
            </section>
            <MyFooter/>
        </div>
    );
};

export default FeedbackPage;