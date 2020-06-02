import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckSquare, FiMinusSquare, FiCornerDownRight } from 'react-icons/fi';

import '../style.css';

export default function close_pages({ close = ()=>{} }) {

    return(

        <div style={{width:'100%'}}>

            <div onClick={() => close()} className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiCheckSquare />

                        <p>To-Do-Lists</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="list">

                <div>

                <FiCornerDownRight />

                <div className="mask-red">
                </div>

                <p>Pesquisar / Aprender</p>

                </div>

            </div>

            <div className="list">

                <div>

                <FiCornerDownRight />

                <div className="mask-yellow">
                </div>

                <p>UI Design no Figma</p>

                </div>

            </div>

            <div className="list">

                <div>

                <FiCornerDownRight />

                <div className="mask-green">
                </div>

                <p>Projetar Inicialmente</p>

                </div>

            </div>

        </div>

    );    

}