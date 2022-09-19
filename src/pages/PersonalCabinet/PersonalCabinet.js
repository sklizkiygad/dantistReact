import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import MyFooter from "../../components/MyFooter/MyFooter";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import './PersonalCabinet.css';
import ReceptionCards from "../../components/ReceptionCards/ReceptionCards";
import MyModal from "../../components/MyModal/MyModal";

const PersonalCabinet = () => {
    return (
        <div>

            <MyHeader headText={'Личный кабинет'}/>

            <section className="personal-cabinet">

                <div className="personal-cabinet__main-block">
                    <SectionNavbar/>
                    <ReceptionCards/>


                </div>

            <ProfileCard/>
            </section>
            <MyFooter/>
            
        </div>
    );
};

export default PersonalCabinet;