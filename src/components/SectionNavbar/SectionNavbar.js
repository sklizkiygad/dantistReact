import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const SectionNavbar = () => {

    const navigate=useLocation();
    const isShowHamburger=useSelector(state=>state.hamburgerOpen)



    const personalCabinetLink=React.createRef();
    const myDataLink=React.createRef();
    const feedbackLink=React.createRef();
    const receptionLink=React.createRef();
    const sectionNavbarRef=React.createRef();

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
        if(isShowHamburger){
            sectionNavbarRef.current.style.display='flex'
        }
        else{
            sectionNavbarRef.current.style.display='none'
        }

    },[isShowHamburger])

    return (
        <div className="section-navbar" ref={sectionNavbarRef}>

            <Link to="/personal-cabinet" ref={personalCabinetLink}>Мои приемы</Link>
            <Link to="/my-data" ref={myDataLink}>Мои данные</Link>
            <Link to="/feedback" ref={feedbackLink}>Оставить отзыв о клинике</Link>
            <Link to="/reception" ref={receptionLink}>Записаться на прием</Link>
        </div>
    );
};

export default SectionNavbar;