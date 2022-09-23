import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const SectionNavbar = () => {


    useEffect(()=>{
        console.log('hj');
    })

    return (
        <div className="section-navbar">

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg section-navbar__cancel"
                 viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
            <Link to="" className="active">Мои приемы</Link>
            <Link to="">Мои данные</Link>
            <Link to="">Оставить отзыв о клинике</Link>
            <Link to="">Записаться на прием</Link>
        </div>
    );
};

export default SectionNavbar;