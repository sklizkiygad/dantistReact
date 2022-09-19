import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import InputForm from "../../components/InputForm/InputForm";
import MyFooter from "../../components/MyFooter/MyFooter";

const ChangePasswordPage = () => {
    return (
        <div>
            <MyHeader headText="Сменить пароль"/>
            <section>
                <InputForm pageType={'change'}/>
            </section>
            <MyFooter/>
        </div>
    );
};

export default ChangePasswordPage;