import React, {useState} from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import SectionNavbar from "../../components/SectionNavbar/SectionNavbar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import MyFooter from "../../components/MyFooter/MyFooter";
import 'react-calendar/dist/Calendar.css';
import CalendarComponent from "../../components/CalendarComponent";


const ReceptionPage = () => {



    const [value, onChange] = useState(new Date());


    return (
        <div>

            <MyHeader headText={'Личный кабинет'}/>

            <section className="personal-cabinet">

                <div className="personal-cabinet__main-block reception">
                    <SectionNavbar/>
                    <div className="reception-calendar">
                        <h3>Дегтярева Юлия Викторовна</h3>
                        <div className="reception-calendar__select">
                            <div className="reception-calendar__select__post">
                                <p>Врач второй категории</p>
                                <p>Врач ортодонт</p>
                            </div>


                            <div>
                            <label>Услуга:</label>
                            <select className="service-select">
                                <option value="0">брекеты</option>
                                <option value="1">пломба</option>
                            </select>
                            </div>

                        </div>

                    <CalendarComponent/>
                    </div>






                </div>

                <ProfileCard/>
            </section>
            <MyFooter/>

        </div>
    );
};

export default ReceptionPage;