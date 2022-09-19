import React from 'react';
import './DoctorsList.css';
import docImg from "../../assets/images/doc.png";
import './DoctorsList.css';
import DoctorsHandler from "../DoctorsHandler/DoctorsHandler";

const DoctorsList = () => {
    return (

        <div>
            <div className="doctors-list">
                <p>5 специальностей</p>
                <div>
                    <label>фильтр:</label>
                    <select>
                        <option value="0">по врачам</option>
                        <option value="1">по услугам</option>
                    </select>
                </div>
                <p>29 врачей</p>
            </div>
            <DoctorsHandler/>







        </div>


    );
};

export default DoctorsList;