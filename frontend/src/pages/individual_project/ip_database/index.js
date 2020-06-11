import React from 'react';
import { Link } from 'react-router-dom';
import { FiDatabase, FiStar, FiEdit, FiPlus, FiChevronDown, FiSearch, FiFilePlus, FiSquare, FiMinusSquare, FiArrowRight, FiPlusSquare, FiCheckSquare, FiKey } from 'react-icons/fi';

import './style.css';

export default function Database() {

    return (
    
        <div className="database_container">

            <div className="header">

                <div className="left">

                </div>

                <div className="middle">

                    <div className="title">

                        <FiDatabase />

                        <p>Database View</p>

                    </div>

                </div>

                <div className="right">

                    <div className="actions">

                        <FiEdit />

                    </div>

                </div>

            </div>

            <div className="opt-list">

                <div className="left">

                    <p>All Tables</p>

                    <FiChevronDown className="chv" />

                </div>

                <div className="right">

                    <div className="head-item">

                        <FiEdit />

                        <p>Edit</p>

                    </div>

                    <div className="head-item">

                        <FiSearch />

                        <p>Search</p>

                    </div>

                    <div className="head-item">

                        <FiPlus />

                        <p>New Table</p>

                    </div>

                </div>

            </div>

            <div className="list">

                <div className="item">

                    <div className="left">

                        <p>Clientes</p>

                    </div>

                    <div className="right">

                        <p>10 Columms</p>

                        <FiMinusSquare className="pointer" />

                    </div>

                </div>

                <div className="sub-list">

                    <div className="sub-item primary">

                        <div className="left">

                            <FiKey />

                            <p>Adm_id ( Primary Key )</p>

                        </div>

                        <div className="middle">

                            <p>AUTO_INCREMENT</p>

                        </div>

                        <div className="right">

                            <p>INT(11)</p>

                        </div>

                    </div>

                    <div className="sub-item secundary">

                        <div className="left">

                            <FiKey />

                            <p>Adm_id ( Secundary Key )</p>

                        </div>

                        <div className="middle">

                            <p>AUTO_INCREMENT</p>

                        </div>

                        <div className="right">

                            <p>INT(11)</p>

                        </div>

                    </div>

                    <div className="sub-item nokey">

                        <div className="left">

                            <FiKey />

                            <p>Adm_name</p>

                        </div>

                        <div className="middle">


                        </div>

                        <div className="right">

                            <p>VARCHAR(60)</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );    

}