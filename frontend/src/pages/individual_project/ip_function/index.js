import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayout, FiEdit, FiStar, FiPlus, FiChevronDown, FiSearch, FiFilePlus, FiSquare, FiMinusSquare, FiArrowRight, FiPlusSquare, FiCheckSquare, FiKey } from 'react-icons/fi';

import './style.css';

export default function Database() {

    return (
    
        <div className="function_container">

            <div className="header">

                <div className="left">

                    <div className="title">

                        <FiLayout />

                        <p>Function List</p>

                        <p>/ Sobre Nós</p>

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

                    <p>All Functions</p>

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

                        <p>New Function</p>

                    </div>

                </div>

            </div>

            <div className="list">

                <div className="item">

                    <div className="left">

                        <p>Header</p>

                    </div>

                    <div className="right">

                        <p>DB: <span>Cliente</span></p>

                        <p>Page: <span>Login</span></p>

                        <FiMinusSquare className="pointer" />

                    </div>

                </div>

                <div className="sub-list">

                    <div className="desc">

                        <p>Globally provide access to intermandated vortals via focused infomediaries. Efficiently streamline technically sound solutions and low-risk high-yield communities.</p>

                    </div>

                </div>

            </div>

        </div>

    );    

}