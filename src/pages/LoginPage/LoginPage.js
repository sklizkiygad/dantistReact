import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import MyFooter from "../../components/MyFooter/MyFooter";
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