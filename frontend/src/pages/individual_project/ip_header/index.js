import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiColumns, FiEdit, FiSave, FiMaximize2, FiFigma, FiGithub, FiShare2 } from 'react-icons/fi';

import './style.css';

import logoWpo from '../../../assets/logo_wpo.svg';

export default function Login() {

    return (
    <header className="header-container">

        <div className="left">

            <div>
                <FiMenu />                
            </div>
            <div>
                <FiColumns />            
            </div>
            <div>
                <FiEdit />      
            </div>
            <div>
                <FiSave />    
            </div>
            <div>
                <FiMaximize2 />           
            </div>

        </div>

        <div className="centro">

            <p>Projetos Para Fazer /</p>
            <p>GlassPlastic</p>

        </div>

        <div className="right">

            <FiFigma />
            <FiGithub />
            <FiShare2 />

        </div>

    </header>

    );    

}