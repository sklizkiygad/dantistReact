import React from 'react';
import './RegPage.css';
import MyHeader from "../../components/MyHeader/MyHeader";
import InputForm from "../../components/InputForm/InputForm";
import MyFooter from "../../components/MyFooter/MyFooter";

const RegPage = () => {
    return (
        <div>
            <MyHeader headText="Регистрация"/>
            <section>
                <InputForm pageType={'reg'}/>
            </section>
            <MyFooter/>
        </div>
    );
};

export default RegPage;