import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import './SectionNavbar.css';

const SectionNavbar = () => {


    useEffect(()=>{
        console.log('hj');
    })

    return (
        <div className="section-navbar">
            <Link to="" className="active">Мои приемы</Link>
            <Link to="">Мои данные</Link>
            <Link to="">Оставить отзыв о клинике</Link>
            <Link to="">Записаться на прием</Link>
        </div>
    );
};

export default SectionNavbar;