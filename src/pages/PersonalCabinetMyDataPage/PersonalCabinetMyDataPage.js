import React from 'react';
import './PersonalCabinetMyDataPage.css';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import ReceptionCards from "../../components/ReceptionCards/ReceptionCards";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";
import InputForm from "../../components/InputForm/InputForm";
import profileImgBig from '../../assets/images/profileImgBig.png'
import eyeImg from "../../assets/images/eye.png";
import MyDataForm from "../../components/MyDataForm/MyDataForm";

const PersonalCabinetMyDataPage = () => {
    return (
        <div>

            <MyHeader headText={'Личный кабинет'}/>

            <section className="personal-cabinet">
                <div className="personal-cabinet__main-block">
                    <SectionNavbar/>
                    <MyDataForm/>


                </div>

                <ProfileCard/>
            </section>

            <MyFooter/>

        </div>
    );
};

export default PersonalCabinetMyDataPage;