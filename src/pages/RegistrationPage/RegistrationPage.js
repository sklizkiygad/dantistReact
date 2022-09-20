import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import MyFooter from "../../components/MyFooter/MyFooter";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
    return (
        <div>
            <MyHeader headText="Регистрация"/>
            <RegistrationForm/>
            <MyFooter/>
        </div>
    );
};

export default RegistrationPage;