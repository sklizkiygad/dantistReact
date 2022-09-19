import React from 'react';
import './MyButton.css';

const MyButton = (props) => {
    return (
           <button className={'main-button '+props.addStyle}>{props.buttonText}</button>
    );
};

export default MyButton;