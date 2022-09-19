import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import MyFooter from "../../components/MyFooter/MyFooter";
import InputForm from "../../components/InputForm/InputForm";

const ForgotPasswordPage = () => {
    return (
        <div>
            <MyHeader headText="Восстановление пароля"/>
            <section>
                <InputForm pageType={'forgot'}/>
            </section>
            <MyFooter/>

        </div>
    );
};

export default ForgotPasswordPage;