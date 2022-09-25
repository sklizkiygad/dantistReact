import React, {useEffect} from 'react';
import leftArrow from '../../assets/images/left-arrow.png'
import { Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const MyHeader = (props) => {
    const dispatch=useDispatch();

    const hamburgerCheckboxRef=React.createRef();
    const hamburgerLinesRef=React.createRef();
    const isHamburger=useSelector(state=>state.hamburgerOpen);

    useEffect(()=>{

        if(isHamburger){
            hamburgerLinesRef.current.style.position='fixed';
            hamburgerLinesRef.current.style.right='15px';
        }
        else{

            hamburgerLinesRef.current.style.position='relative';
            hamburgerLinesRef.current.style.right='0';
        }

    },[isHamburger])


    const onOpenHamburger=()=>{
        dispatch({type:'SET_HAMBURGER',payload:hamburgerCheckboxRef.current.checked})
    }

    return (
        <header>

            <div className="head-breadcrumbs">
                <div>

                    <Link to='/'>Главная</Link>/
                    <Link to='/'>Пациентам</Link>/
                    <Link to='/'>Личный кабинет</Link>

                </div>
                <Link to='/'>Вернуться на главную <img src={leftArrow} alt="l"/></Link>
            </div>

            <div className="link-with-hamburger">
                <h3>{props.headText}</h3>
                <div className='hamburger' ref={hamburgerLinesRef}>
                    <input ref={hamburgerCheckboxRef} onClick={onOpenHamburger} className="hamburger-checkbox" type="checkbox" name="" id=""/>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
            </div>
            </div>

        </header>
    );
};

export default MyHeader;