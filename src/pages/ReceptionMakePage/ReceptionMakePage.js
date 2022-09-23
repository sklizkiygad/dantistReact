import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import ReceptionHour from "../../components/ReceptionHour/ReceptionHour";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";
import {Link} from "react-router-dom";
import leftArrImg from '../../assets/images/left-arrow.png'
import DoctorCard from "../../components/DoctorCard/DoctorCard";

const ReceptionMakePage = () => {
    return (
        <div>

            <MyHeader headText={'Личный кабинет'}/>

            <section className="personal-cabinet">

                <div className="personal-cabinet__main-block reception">
                    <SectionNavbar/>
                    <div className="reception-make">

                        <div className="reception-make__doc">

                            <div>

                        <h3>Дегтярева Юлия Викторовна</h3>
                        <div className="reception-make__select">

                            <div className="reception-make__select__post">
                                <p>Врач второй категории</p>
                                <p>Врач ортодонт</p>
                            </div>
                                <div>
                                    <Link className="reception-make__doc__calendar" to="">Календарь дат </Link><img src={leftArrImg} alt="1"/>
                                </div>

                        </div>
                            </div>

                        </div>


                        <DoctorCard/>

                        <ReceptionHour/>

                    </div>


                </div>
                <ProfileCard/>
            </section>
            <MyFooter/>

        </div>
    );
};

export default ReceptionMakePage;