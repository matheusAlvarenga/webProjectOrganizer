import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle, FiShare2, FiFolderPlus, FiFilePlus } from 'react-icons/fi';

import './style.css';

import logoWpo from '../../../assets/logo_wpo.svg';

export default function Login() {

    return (
    <header className="header-container">

        <div className="logo">
            
            <img src={logoWpo} alt="Logo Wpo" />

        </div>
        
        <div className="body">

            <div className="title">

                <FiArrowLeftCircle />
                <p className="proj">Projects /</p>
                <p className="folder">Projeto Para Fazer</p>

            </div>

            <div className="actions">

                <Link to="../shareFolder"><FiShare2/></Link>
                <p>|</p>
                <FiFolderPlus />
                <p>|</p>
                <Link to="../newFile"><FiFilePlus/></Link>

            </div>

        </div>

    </header>

    );    

}