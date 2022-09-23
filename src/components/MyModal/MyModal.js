import React from 'react';


const MyModal = () => {
    return (
        <div className="modal">
            <div className="modal-content">

                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="currentColor" className="bi bi-x cancel-button"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>

                <h1>Вы хотите отменить запись к стоматологу?</h1>
                <div className="modal-content__buttons">

                    <button className="main-button">Отменить</button>
                    <button className="main-button">Отмена</button>
                </div>


            </div>
        </div>
    );
};

export default MyModal;