import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiEdit } from 'react-icons/fi';

import './style.css';

export default function Database() {

    return (
    
        <div className="settings_container">

            <div className="header">

                <FiSettings />

                <p>Owner's Comments</p>

            </div>

            <div className="list">

                <div className="item">

                    <div className="title">

                        <div className="left">

                            <p>Name: GlassPlastic</p>

                            <p>/ Projetos Para Fazer</p>

                        </div>

                        <div className="right">

                            <FiEdit />

                        </div>

                    </div>

                </div>

                <div className="item">

                    <div className="title">

                        <div className="left">

                            <p>GitHub Link: github.com/seila</p>

                        </div>

                        <div className="right">

                            <FiEdit />

                        </div>

                    </div>

                </div>

                <div className="item">

                    <div className="title">

                        <div className="left">

                            <p>Figma Link: figma.com/seila</p>

                        </div>

                        <div className="right">

                            <FiEdit />

                        </div>

                    </div>

                </div>

                <div className="item">

                    <div className="title">

                        <div className="left">

                            <p>Buyer Name: Jão Klebinho</p>

                        </div>

                        <div className="right">

                            <FiEdit />

                        </div>

                    </div>

                </div>

                <div className="item">

                    <div className="title">

                        <div className="left">

                            <p>Description: </p>

                            <p>Holisticly extend orthogonal channels after sticky solutions. Completely transform professional channels for one-to-one "outside the box" thinking. Holisticly deliver resource-leveling meta-services.</p>

                        </div>

                        <div className="right">

                            <FiEdit />

                        </div>

                    </div>

                </div>

                <div className="item">

                    <div className="title">

                        <div className="left">

                            <p>Image: topzera.jpg</p>

                        </div>

                        <div className="right">

                            <FiEdit />

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );    

}