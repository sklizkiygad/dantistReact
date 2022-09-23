import React from 'react';
import {Link} from "react-router-dom";
import leftArrImg from "../../assets/images/left-arrow.png";

const ReceptionHour = () => {
    return (
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
    );
};

export default ReceptionHour;