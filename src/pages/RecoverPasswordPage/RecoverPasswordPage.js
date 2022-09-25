import React, {useEffect, useState} from 'react';
import MyHeader from "../../components/MyHeader/MyHeader";
import RecoverPasswordForm from "../../components/RecoverPasswordForm/RecoverPasswordForm";
import MyFooter from "../../components/MyFooter/MyFooter";
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";
import RecoverPasswordCodeForm from "../../components/RecoverPasswordCodeForm/RecoverPasswordCodeForm";

const RecoverPasswordPage = () => {

    const [isPhoneSend,setIsPhoneSend]=useState(false);
    const [isCodeSend,setIsCodeSend]=useState(false);

    const changeComponent=()=>{
        console.log(isPhoneSend && isCodeSend)
        if(isPhoneSend && isCodeSend){
            return <ChangePasswordForm/>;
        }
        else if(isPhoneSend && !isCodeSend){
            return <RecoverPasswordCodeForm setFunction={setIsCodeSend}/>;

        }
        else{
            return <RecoverPasswordForm setFunction={setIsPhoneSend}/>;
        }
    }
    useEffect(()=>{
        changeComponent();
    },[])

    return (
        <div>
            <MyHeader headText="Восстановление пароля"/>

            {changeComponent()}


            <MyFooter/>
        </div>
    );
};

export default RecoverPasswordPage;