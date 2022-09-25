import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";

const SectionNavbar = () => {

    const navigate=useLocation();
    const personalCabinetLink=React.createRef();
    const myDataLink=React.createRef();
    const feedbackLink=React.createRef();
    const receptionLink=React.createRef();

    const checkNavigateData=()=>{
        console.log(navigate.pathname);
        switch (navigate.pathname) {

            case "/personal-cabinet":
            personalCabinetLink.current.classList.value='active';

                break

            case "/my-data":
                myDataLink.current.classList.value='active';

                break

            case "/feedback":
                feedbackLink.current.classList.value='active';
                break

            case "/reception":
                receptionLink.current.classList.value='active';
                break

            default:
                personalCabinetLink.current.classList.value='active';
                break

        }

    }

    useEffect(()=>{
    checkNavigateData();
    },[])

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
            <Link to="/personal-cabinet" ref={personalCabinetLink}>Мои приемы</Link>
            <Link to="/my-data" ref={myDataLink}>Мои данные</Link>
            <Link to="/feedback" ref={feedbackLink}>Оставить отзыв о клинике</Link>
            <Link to="/reception" ref={receptionLink}>Записаться на прием</Link>
        </div>
    );
};

export default SectionNavbar;