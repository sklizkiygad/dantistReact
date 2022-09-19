import React from 'react';
import './ReceptionPage.css';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import ReceptionCards from "../../components/ReceptionCards/ReceptionCards";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";
import DoctorsList from "../../components/DoctorsList/DoctorsList";

const ReceptionPage = () => {
    return (
        <div>

            <MyHeader headText={'Личный кабинет'}/>

            <section className="personal-cabinet">

                <div className="personal-cabinet__main-block">
                    <SectionNavbar/>
                    <DoctorsList/>



                </div>

                <ProfileCard/>
            </section>
            <MyFooter/>

        </div>
    );
};

export default ReceptionPage;