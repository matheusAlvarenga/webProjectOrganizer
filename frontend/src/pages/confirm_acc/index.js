import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logoWpo from '../../assets/logo_wpo.svg';
import logoZan from '../../assets/logo_zanw.png';

export default function ConfirmAcc() {

    return (
    <div className="content">
        <div id="login" className="confirm-container bg_353535">
                <img src={logoWpo} alt="Logo WebProject Organizer"/>
                <p>To access your account you need to check your e-mail and click on the confirmation Link</p>
                <h2>Thanks for using our platform.</h2>

        </div>

        <img className="logoZan" src={logoZan} alt="Logo Tensa Zangetsu" />
    </div>
    );    

}