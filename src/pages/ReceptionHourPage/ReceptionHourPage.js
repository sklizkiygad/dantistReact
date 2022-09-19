import React, {useState} from 'react';
import './ReceptionHourPage.css';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";
import 'react-calendar/dist/Calendar.css';
import {Link} from "react-router-dom";
import leftArrImg from '../../assets/images/left-arrow.png';


const ReceptionPage = () => {



    const [value, onChange] = useState(new Date());


    return (
        <div>

            <MyHeader headText={'Личный кабинет'}/>

            <section className="personal-cabinet">

                <div className="personal-cabinet__main-block">
                    <SectionNavbar/>
                    <div className="reception-calendar">
                        <h3>Дегтярева Юлия Викторовна</h3>
                        <div className="reception-calendar__select">
                            <div className="reception-calendar__select__post">
                                <p>Врач второй категории</p>
                                <p>Врач ортодонт</p>
                            </div>

                        </div>
                        <div className="reception-calendar-date">
                            <div className="reception-calendar-date__yyyy">
                                <p>Дата: <span>15 ноября 2021 г.</span></p>
                                <Link to="">Календарь дат <img src={leftArrImg} alt="arr"/></Link>
                            </div>


                            <div className="reception-calendar-date__hour-blocks">

                                <div className="reception-calendar-date__hour-blocks__item">
                                    <p>09:00</p>
                                </div>
                                <div className="reception-calendar-date__hour-blocks__item">
                                    <p>09:00</p>
                                </div>
                                <div className="reception-calendar-date__hour-blocks__item">
                                    <p>09:00</p>
                                </div>
                                <div className="reception-calendar-date__hour-blocks__item">
                                    <p>09:00</p>
                                </div>
                                <div className="reception-calendar-date__hour-blocks__item">
                                    <p>09:00</p>
                                </div>
                                <div className="reception-calendar-date__hour-blocks__item">
                                    <p>09:00</p>
                                </div>

                            </div>
                            <div className="color-picker">
                                <div>
                                    <div className="color-picker-block activeColor"></div>
                                    <p>Свободные талоны</p>
                                </div>
                                <div>
                                    <div className="color-picker-block"></div>
                                    <p>Занято</p>

                                </div>
                            </div>

                        </div>


                    </div>






                </div>

                <ProfileCard/>
            </section>
            <MyFooter/>

        </div>
    );
};

export default ReceptionPage;