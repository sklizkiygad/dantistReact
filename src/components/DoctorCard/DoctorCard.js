import React from 'react';


const DoctorCard = () => {
    return (
        <div className="reception-cards__holder__card">


            <div className="reception-cards__holder__card__body">
                <div>
                    <p>Дата: 6 ноября 2021</p>
                    <p>Услуга: Брекеты</p>
                </div>

                <div>
                    <p>Время: 12:00</p>
                    <p>Врач: Дегтярева Юлия Викторовна</p>
                </div>


            </div>
            <p className="red-advice">*Оплатить услуги Вы сможете наличными или банковской картой в клинике</p>
            <div className="reception-cards__holder__card__button">

               <button className="main-button">Забронировать</button>

            </div>
        </div>
    );
};

export default DoctorCard;