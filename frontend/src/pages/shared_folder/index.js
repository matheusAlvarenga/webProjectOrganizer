import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu } from 'react-icons/fi';

import './style.css';

import Photo1 from '../../assets/item-photo.jpg';
import Photo2 from '../../assets/item-photo2.jpg';
import Photo3 from '../../assets/item-photo3.jpg';

export default function Projects() {

    return (
    <div className="content">

        <div className="sprojects-container">

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

                            <img src={Photo2} alt="Foto do Projeto" />

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

                            <img src={Photo3} alt="Foto do Projeto" />

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
    </div>
    );    

}