import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import MyFooter from "../../components/MyFooter/MyFooter";
import InputForm from "../../components/InputForm/InputForm";
import eyeImg from "../../assets/images/eye.png";
import {Link} from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";


const LoginPage = () => {
    return (
        <div>
            <MyHeader headText="Вход в личный кабинет"/>
            <LoginForm/>

            <MyFooter/>
            
        </div>
    );
};

export default LoginPage;