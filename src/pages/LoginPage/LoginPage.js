import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import MyFooter from "../../components/MyFooter/MyFooter";
import InputForm from "../../components/InputForm/InputForm";


const LoginPage = () => {
    return (
        <div>
            <MyHeader headText="Вход в личный кабинет"/>
            <section>
            <InputForm pageType={'login'}/>
            </section>
            <MyFooter/>
            
        </div>
    );
};

export default LoginPage;