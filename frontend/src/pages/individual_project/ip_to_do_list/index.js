import React from 'react';
import { Link } from 'react-router-dom';
import { FiSmile, FiStar, FiEdit, FiFileText, FiChevronDown, FiSearch, FiFilePlus, FiSquare, FiMinusSquare, FiArrowRight, FiPlusSquare, FiCheckSquare } from 'react-icons/fi';

import './style.css';

export default function To_Do_List() {

    return (
    
        <div className="to_do_lists_container">

            <div className="header">

                <div className="left">

                    <div className="title">

                        <FiSmile style={{background:'green'}} />

                        <p>Pesquisas / Aprender (30%)</p>

                    </div>

                    <div className="desc">

                        <p>Enthusiastically parallel task top-line web services with pandemic portals. Energistically iterate low-risk high-yield catalysts for change after team driven e-tailers. </p>

                    </div>

                </div>

                <div className="right">

                    <div className="actions">

                        <FiStar />

                        <FiEdit />

                    </div>

                </div>

            </div>

            <div className="opt-list">

                <div className="left">

                    <FiFileText />

                    <p>All Items</p>

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

                        <FiFilePlus />

                        <p>New Item</p>

                    </div>

                </div>

            </div>

            <div className="list">

                <div className="item">

                    <div className="left">

                        <FiSquare />

                        <p>Aprender a usar JsPlumb</p>

                    </div>

                    <div className="right">

                        <p>Mai 14, 2020 - 16:30</p>

                        <FiArrowRight />

                        <p>Mai 16, 2020 - 16:30</p>

                        <FiMinusSquare className="pointer" />

                    </div>

                </div>

                <div className="sub-list">

                    <div className="desc">

                        <p>Globally provide access to intermandated vortals via focused infomediaries. Efficiently streamline technically sound solutions and low-risk high-yield communities. Progressively integrate focused core competencies with focused action items. Proactively pursue fully tested communities via distributed meta-services. Collaboratively innovate compelling content whereas cost effective deliverables.</p>

                    </div>

                    <div className="sub-item">

                        <FiSquare />

                        <p>HTML Simples</p>

                    </div>

                    <div className="sub-item">

                        <FiCheckSquare />

                        <p>CSS Simples</p>

                    </div>

                </div>

                <div className="item">

                    <div className="left">

                        <FiSquare />

                        <p>Aprender a usar JsPlumb</p>

                    </div>

                    <div className="right">

                        <p>Mai 14, 2020 - 16:30</p>

                        <FiArrowRight />

                        <p>Mai 16, 2020 - 16:30</p>

                        <FiPlusSquare className="pointer" />

                    </div>

                </div>

            </div>

        </div>

    );    

}