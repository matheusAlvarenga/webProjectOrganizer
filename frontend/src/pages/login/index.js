import React from 'react';

import './style.css';

import logoWpo from '../../assets/logo_wpo.svg';
import logoZan from '../../assets/logo_zanw.png';

export default function Login() {

    return (
    <div className="content">
        <div className="login-container bg_353535">
                <p>Welcome to</p>
                <img src={logoWpo} alt="Logo WebProject Organizer"/>
                <p>Please Log-in to access<br></br>the projects pannel.</p>

                <form>

                    <input className="color_acacac" placeholder="User" type="text"/>
                    <input className="color_acacac" placeholder="Password" type="password"/>

                    <input value="LOGIN" type="submit"/>

                </form>

        </div>
        <img className="logoZan" src={logoZan} alt="Logo Tensa Zangetsu" />
    </div>
    );    

}