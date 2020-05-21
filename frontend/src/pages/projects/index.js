import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu } from 'react-icons/fi';

import Header from '../header';
import AsideMenu from '../aside_menu';

import './style.css';

import Photo1 from '../../assets/item-photo.jpg';
import Photo2 from '../../assets/item-photo2.jpg';
import Photo3 from '../../assets/item-photo3.jpg';

export default function Login() {

    return (
    <div className="content">
        <Header />
        <AsideMenu />

        <div className="projects-container">

            <div className="projects-actions">

                <div className="selector">

                    <p>Last modified</p>
                    <FiChevronDown />

                </div>

                <div className="viewmode">

                    <div className="view">

                        <FiGrid />

                    </div>

                    <div className="view">

                        <FiMenu />

                    </div>

                </div>

            </div>

            <div className="list">

                <ul>

                <li>

<div className="item">

    <div className="foto">

        <img src={Photo1} alt="Foto do Projeto" />

    </div>

    <div className="footer">

        <h1>GlassPlastic</h1>
        <p>20/04/2001</p>

    </div>

</div>

</li>

                    <li>

                        <div className="item">

                            <div className="foto">

                                <img src={Photo1} alt="Foto do Projeto" />

                            </div>

                            <div className="footer">

                                <h1>GlassPlastic</h1>
                                <p>20/04/2001</p>

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="item">

                        <div className="foto">

                            <img src={Photo1} alt="Foto do Projeto" />

                        </div>

                            <div className="footer">

                                <h1>GlassPlastic</h1>
                                <p>20/04/2001</p>

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="item">

                        <div className="foto">

                            <img src={Photo1} alt="Foto do Projeto" />

                        </div>

                            <div className="footer">

                                <h1>GlassPlastic</h1>
                                <p>20/04/2001</p>

                            </div>

                        </div>

                    </li>
                    
                </ul>

            </div>
        </div>

        <div className="addfile">

            <div className="circle">

                <FiPlus />

            </div>

        </div>

    </div>
    );    

}