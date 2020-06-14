import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayout, FiStar, FiEdit, FiPlus, FiChevronDown, FiSearch, FiFilePlus, FiSquare, FiMinusSquare, FiArrowRight, FiPlusSquare, FiCheckSquare, FiKey } from 'react-icons/fi';

import './style.css';

export default function Database() {

    return (
    
        <div className="section_container">

            <div className="header">

                <div className="left">

                    <div className="title">

                        <FiLayout />

                        <p>Sobre Nós</p>

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

                    <p>All Sections</p>

                    <FiChevronDown className="chv" />

                </div>

                <div className="right">

                    <div className="head-item">

                        <FiSearch />

                        <p>Search</p>

                    </div>

                    <div className="head-item">

                        <FiPlus />

                        <p>New Section</p>

                    </div>

                </div>

            </div>

            <div className="list">

                <div className="item">

                    <div className="left">

                        <p>Header</p>

                    </div>

                    <div className="middle">

                        <p>4 Sub-Sections</p>

                    </div>

                    <div className="right">

                        <FiMinusSquare className="pointer" />

                    </div>

                </div>

                <div className="sub-list">

                    <div className="desc">

                        <p>Globally provide access to intermandated vortals via focused infomediaries. Efficiently streamline technically sound solutions and low-risk high-yield communities.</p>

                    </div>

                    <div className="sub-item">

                        <div className="left">

                            <p>Adm_id ( Primary Key )</p>

                        </div>

                    </div>

                    <div className="sub-item">

                        <div className="left">

                            <p>Adm_id ( Primary Key )</p>

                        </div>

                    </div>
                    
                    <div className="sub-item">

                        <div className="left">

                            <p>Adm_id ( Primary Key )</p>

                        </div>

                    </div>

                </div>

                <div className="func_list">

                    <div className="middle">

                        <p>FUNCTION LIST OF PAGE</p>

                    </div>

                </div>

            </div>

        </div>

    );    

}