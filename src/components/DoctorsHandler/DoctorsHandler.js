import React from 'react';
import './DoctorsHandler.css';
import docImg from "../../assets/images/doc.png";

const DoctorsHandler = () => {
    return (
        <ul className="doctors-handler">
            <li>Стоматолог терапевт</li>
            <li>Стоматолог ортопед</li>
            <li>Ортодонт</li>
            <li>Стоматолог хирург</li>
            <li>Детский стоматолог
                <div className="doctors-handler__doc-list">
                    <div className="doctors-handler__doc-list__item">
                        <img src={docImg} alt="doc"/>
                        <div className="doctors-handler__doc-list__item__info">
                            <p className="doctors-handler__doc-list__item__info__name">Ефимова Дарья Вадимовна</p>
                            <p className="doctors-handler__doc-list__item__info__post">врач второй категории
                                детский стоматолог</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default DoctorsHandler;