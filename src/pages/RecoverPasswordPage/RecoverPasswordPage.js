import React from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import RecoverPasswordForm from "../../components/RecoverPasswordForm/RecoverPasswordForm";
import MyFooter from "../../components/MyFooter/MyFooter";
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";

const RecoverPasswordPage = () => {
    return (
        <div>
            <MyHeader headText="Восстановление пароля"/>


            <RecoverPasswordForm/>
            {/*<ChangePasswordForm/>*/}

            <MyFooter/>
        </div>
    );
};

export default RecoverPasswordPage;