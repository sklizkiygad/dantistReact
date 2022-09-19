import React from 'react';
import './ReceptionCards.css';
import MyButton from "../MyButton/MyButton";


const ReceptionCards = () => {
    return (
        <div className="reception-cards">
            <div className="reception-cards__selectors">
                <div>
                    <label htmlFor="receptions">фильтр:</label>
                    <select  id="receptions">
                        <option value="0">предстоящие приемы</option>
                        <option value="1">отмененные приемы</option>
                        <option value="2">пройденные приемы</option>
                        <option value="3">просроченные приемы</option>

                    </select>
                </div>


                <div>
                    <label htmlFor="time">сортировка:</label>
                    <select  id="time">
                        <option value="0">от старых приёмов</option>
                        <option value="1">от новых приёмов</option>
                    </select>
                </div>

            </div>

            <div className="reception-cards__holder">

                <div className="reception-cards__holder__card">
                    <div className="reception-cards__holder__card__head">
                        <p>Талон к стоматологу ортодонту</p>
                        <p>6 ноября 2021 12:00</p>
                    </div>

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
                    <div className="reception-cards__holder__card__button">

                        <MyButton buttonText="Отменить запись"/>

                    </div>
                </div>

                <div className="reception-cards__holder__card">
                    <div className="reception-cards__holder__card__head">
                        <p>Талон к стоматологу ортодонту</p>
                        <p>6 ноября 2021 12:00</p>
                    </div>

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
                    <div className="reception-cards__holder__card__button">
                        <MyButton buttonText="Запись просрочена" addStyle="red-color"/>


                        <p>*Запись просрочена по причине опоздания пациента</p>

                    </div>

                </div>


                <div className="reception-cards__holder__card">
                    <div className="reception-cards__holder__card__head">
                        <p>Талон к стоматологу ортодонту</p>
                        <p>6 ноября 2021 12:00</p>
                    </div>

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
                    <div className="reception-cards__holder__card__button">
                        <MyButton buttonText="Запись отменена" addStyle="gray-color"/>


                    </div>

                </div>


                <div className="reception-cards__holder__card">
                    <div className="reception-cards__holder__card__head">
                        <p>Талон к стоматологу ортодонту</p>
                        <p>6 ноября 2021 12:00</p>
                    </div>

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
                    <div className="reception-cards__holder__card__button">
                        <MyButton buttonText="Запись пройдена" addStyle="gray-color" />


                    </div>

                </div>


            </div>

        </div>
    );
};

export default ReceptionCards;