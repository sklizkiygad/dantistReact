import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";
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