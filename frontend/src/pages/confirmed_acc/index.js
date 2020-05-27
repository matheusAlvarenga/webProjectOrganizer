import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logoWpo from '../../assets/logo_wpo.svg';
import logoZan from '../../assets/logo_zanw.png';

export default function ConfirmedAcc() {

    return (
    <div className="content">
        <div id="login" className="confirm-container bg_353535">
                <img src={logoWpo} alt="Logo WebProject Organizer"/>
                <p>You successfully corfirmed your account, please log-in to access your projects pannel.</p>
                <Link to="/"><h2>Back To Login Page</h2></Link>

        </div>

        <img className="logoZan" src={logoZan} alt="Logo Tensa Zangetsu" />
    </div>
    );    

}