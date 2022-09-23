import React from 'react';
import leftArrow from '../../assets/images/left-arrow.png'
import { Link} from "react-router-dom";



const MyHeader = (props) => {
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
                <div className='hamburger'>
                    <input className="hamburger-checkbox" type="checkbox" name="" id=""/>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
            </div>
            </div>




            {/*<div className="head-breadcrumbs">*/}
            {/*    <div>*/}

            {/*        <Link to='/'>Главная</Link>/*/}
            {/*        <Link to='/'>Пациентам</Link>/*/}
            {/*        <Link to='/'>Личный кабинет</Link>*/}

            {/*    </div>*/}

            {/*    <h3>{props.headText}</h3>*/}


            {/*</div>*/}
            {/*<div className="link-with-hamburger">*/}
            {/*    <Link to='/'>Вернуться на главную <img src={leftArrow} alt="l"/></Link>*/}
            {/*    <div className='hamburger'>*/}
            {/*        <input className="hamburger-checkbox" type="checkbox" name="" id=""/>*/}
            {/*        <div className="hamburger-lines">*/}
            {/*            <span className="line line1"></span>*/}
            {/*            <span className="line line2"></span>*/}
            {/*            <span className="line line3"></span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </header>
    );
};

export default MyHeader;