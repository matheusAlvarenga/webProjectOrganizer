import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logoZan from '../../assets/logo_zanw.png';

export default function Register() {

    return (
    <div className="content-login">
        <div id="login" className="login-container bg_353535">
                <p>Create your account bellow</p>

                <form>

                    <input className="color_acacac" placeholder="User" type="text"/>
                    <input className="color_acacac" placeholder="Name" type="text"/>
                    <input className="color_acacac" placeholder="E-Mail" type="email"/>
                    <input className="color_acacac" placeholder="Password" type="password"/>

                    <input value="LOGIN" type="submit"/>

                </form>
                <br></br>
                <Link to="../" >Have an account?</Link>

        </div>

        <img className="logoZan" src={logoZan} alt="Logo Tensa Zangetsu" />
    </div>
    );    

}