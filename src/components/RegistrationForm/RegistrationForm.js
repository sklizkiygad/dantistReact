import React, {useState} from 'react';
import eyeImg from "../../assets/images/eye.png";
import {Link} from "react-router-dom";
import {
    changeBirthDay, changeBirthMonth, changeBirthYear,
    checkBirthDay, checkBirthMonth, checkBirthYear,
    checkFatherName,
    checkFirstName, checkPassword, checkPhone,
    checkSecondName
} from "../CheckInputFunctions/CheckInputFunctions";
const RegistrationForm = () => {

    const[secondName,setSecondName]=useState('');
    const[firstName,setFirstName]=useState('');
    const[fatherName,setFatherName]=useState('');
    const[birthDay,setBirthDay]=useState('');
    const[birthMonth,setBirthMonth]=useState('');
    const[birthYear,setBirthYear]=useState('');
    const[phone,setPhone]=useState('');
    const[password,setPassword]=useState('');

    const inputFirstNameRef=React.createRef();
    const inputFirstNameLabelRef=React.createRef();

    const inputSecondNameRef=React.createRef();
    const inputSecondNameLabelRef=React.createRef();

    const inputFatherNameRef=React.createRef();
    const inputFatherNameLabelRef=React.createRef();

    const inputBirthDayRef =React.createRef();
    const inputBirthDayLabelRef =React.createRef();

    const inputBirthMonthRef =React.createRef();
    const inputBirthMonthLabelRef =React.createRef();

    const inputBirthYearRef =React.createRef();
    const inputBirthYearLabelRef =React.createRef();



    const inputPhoneRef =React.createRef();
    const inputPhoneLabelRef =React.createRef();

    const inputPasswordRef=React.createRef();
    const inputPasswordLabelRef=React.createRef();



     const  onRegisterFormSubmit = async (e) => {
        e.preventDefault();

        if(checkSecondName(secondName) &&
        checkFirstName(firstName)&&
        checkFatherName(fatherName) &&
        checkBirthDay(birthDay,setBirthDay)&&
        checkBirthMonth(birthMonth,setBirthMonth) &&
        checkBirthYear(birthYear,setBirthYear)&&
        checkPhone(phone) &&
        checkPassword(password)){
            alert('ok');
        }
        else{
            if(!checkSecondName(secondName)){
                inputSecondNameRef.current.classList.add('red-advice')
                inputSecondNameLabelRef.current.classList.add('red-advice')
            }
            if(!checkFirstName(secondName)){
                inputFirstNameRef.current.classList.add('red-advice')
                inputFirstNameLabelRef.current.classList.add('red-advice')
            }
            if(!checkFatherName(secondName)){
                inputFatherNameRef.current.classList.add('red-advice')
                inputFatherNameLabelRef.current.classList.add('red-advice')
            }

            if(!checkBirthDay(secondName)){
                inputBirthDayRef.current.classList.add('red-advice')
                inputBirthDayLabelRef.current.classList.add('red-advice')
            }
            if(!checkBirthMonth(secondName)){
                inputBirthMonthRef.current.classList.add('red-advice')
                inputBirthMonthLabelRef.current.classList.add('red-advice')
            }
            if(!checkBirthYear(secondName)){
                inputBirthYearRef.current.classList.add('red-advice')
                inputBirthYearLabelRef.current.classList.add('red-advice')
            }

            if(!checkPhone(secondName)){
                inputPhoneRef.current.classList.add('red-advice')
                inputPhoneLabelRef.current.classList.add('red-advice')
            }
            if(!checkPassword(secondName)){
                inputPasswordRef.current.classList.add('red-advice')
                inputPasswordLabelRef.current.classList.add('red-advice')
            }


            alert('mistake');
        }
    }

    const setPasswordText = (e)=>{

        if(e.current.type==='password'){
            e.current.type='text'
        }
        else{
            e.current.type='password'
        }

    }



    // const onRegisterFormSubmit = (e) => {
    //     fetch(
    //         'http://praktikd.localhost/accounts/register/',
    //         {
    //             method: 'POST',
    //             body: JSON.stringify({username: state.username, password: state.password}),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         }
    //     ).then(
    //         res => res.json()
    //     ).then(
    //         res => {
    //             if (res.success) {
    //                 state.showRegisterForm = false;
    //                 localStorage.setItem('user_key', res.token);
    //                 localStorage.setItem('userId', res.user_id);
    //                 state.first = true;
    //                 setState(Object.create(state));
    //             }
    //         }
    //     )
    //
    // }

    return (
        <section>
            <h3>????????????????????????????????????</h3>
            <form className="form-section" onSubmit={onRegisterFormSubmit}>

                <div className="form-section__input-block">
                    <label ref={inputFirstNameLabelRef}>??????????????</label>
                    <input ref={inputFirstNameRef} type="text" placeholder="?????????????? ??????????????" onChange={(e)=>setSecondName(e.target.value)}/>
                </div>

                <div className="form-section__input-block">
                    <label ref={inputSecondNameLabelRef}>??????</label>
                    <input ref={inputSecondNameRef} type="text" placeholder="?????????????? ??????" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>

                <div className="form-section__input-block">
                    <label ref={inputFatherNameLabelRef}>????????????????</label>
                    <input ref={inputFatherNameRef} type="text" placeholder="?????????????? ????????????????" onChange={(e)=>setFatherName(e.target.value)}/>
                </div>

                <div className="form-section__input-block-birth">
                    <label>???????? ????????????????</label>
                    <div className="form-section__input-block-birth__inputs">
                        <div>
                            <input ref={inputBirthDayRef} type="number" placeholder="_ _" onChange={(e)=>changeBirthDay(e,setBirthDay)}/>
                            <label ref={inputBirthDayLabelRef}>????????</label>
                        </div>

                        <div>
                            <input ref={inputBirthMonthRef} type="number" placeholder="_ _" onChange={e=>changeBirthMonth(e,setBirthMonth)}/>
                            <label ref={inputBirthMonthLabelRef}>??????????</label>
                        </div>

                        <div>
                            <input ref={inputBirthYearRef} className="form-section__input-block-birth__inputs__year"
                                   type="number"
                                   placeholder="_ _ _ _"
                                   onChange={e=>changeBirthYear(e,setBirthYear)}/>
                            <label ref={inputBirthYearLabelRef}>??????</label>
                        </div>
                    </div>



                </div>

                <div className="form-section__input-block">
                    <label ref={inputPhoneLabelRef} >??????????????</label>
                    <input ref={inputPhoneRef} type="number" placeholder="??????????????" onChange={(e)=>setPhone(e.target.value)}/>
                </div>

                <div className="form-section__input-block">
                    <label ref={inputPasswordLabelRef}>????????????</label>
                    <div className="form-section__input-block__pass">
                        <input ref={inputPasswordRef} type="password" ref={inputPasswordRef} placeholder="?????????????? ????????????" onChange={(e)=>setPassword(e.target.value)}/>
                        <img src={eyeImg} alt="eye" onClick={(e)=>setPasswordText(inputPasswordRef)}/>
                    </div>
                </div>

                <a className="form-section__button-block__change__advice">*???????????? ???? 8 ????????????????,  ????????????????</a>
                <button className="main-button" type="submit">????????????????????????????????????</button>
                <Link to="" className="form-section__button-block__change__tk">?????????????? ???? ????????????, ?? ?????? ????????????????
                    ???? ?????????????????? ???????? ???????????????????????? ????????????
                    ?? ???????????? ???????????????????????? ???????????? ????
                    ???? 27 ???????? 2006 ??. ??? 152-??3</Link>


            </form>

        </section>
    );
};

export default RegistrationForm;