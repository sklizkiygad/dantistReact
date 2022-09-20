import LoginPage from "../pages/LoginPage/LoginPage";
import React from "react";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";

import PersonalCabinet from "../pages/PersonalCabinet/PersonalCabinet";
import PersonalCabinetMyDataPage from "../pages/PersonalCabinetMyDataPage/PersonalCabinetMyDataPage";
import FeedbackPage from "../pages/FeedbackPage/FeedbackPage";
import ReceptionPage from "../pages/ReceptionPage/ReceptionPage";
import ReceptionCalendarPage from "../pages/ReceptionCalendarPage/ReceptionCalendarPage";
import ReceptionHourPage from "../pages/ReceptionHourPage/ReceptionHourPage";
import RecoverPasswordPage from "../pages/RecoverPasswordPage/RecoverPasswordPage";




export const routes=[
    {path:'/login', element:<LoginPage/>, exact:true},
    {path:'/registration', element:<RegistrationPage/>, exact:true},
    {path:'/recover-password', element:<RecoverPasswordPage/>, exact:true},
    {path:'/personal-cabinet', element:<PersonalCabinet/>, exact:true},
    {path:'/my-data', element:<PersonalCabinetMyDataPage/>, exact:true},
    {path:'/feedback', element:<FeedbackPage/>, exact:true},
    {path:'/reception', element:<ReceptionPage/>, exact:true},
    {path:'/reception-calendar', element:<ReceptionCalendarPage/>, exact:true},




    {path:'/reception-hour', element:<ReceptionHourPage/>, exact:true},
    {path:'/forgot-password', element:<ForgotPasswordPage/>, exact:true},
]