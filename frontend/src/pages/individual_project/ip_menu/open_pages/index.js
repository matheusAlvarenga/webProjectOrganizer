import React from 'react';
import { Link } from 'react-router-dom';
import { FiMap, FiMinusSquare, FiLayout, FiPieChart, FiCornerDownRight } from 'react-icons/fi';

import '../style.css';

export default function open_pages({ close = ()=>{} }) {

    return(

        <div style={{width:'100%'}}>
            <div onClick={() => close()} className="componentTitle">

                <div>

                    <div className="left">

                        <FiMap />

                        <p>Pages</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="page">

                <div>

                <FiCornerDownRight />

                <FiLayout /> 

                <p>Sobre Nós</p>

                </div>
                
            </div>

            <div className="page">
                
                <div>

                <FiCornerDownRight />

                <FiPieChart /> 

                <p>Cadastro</p>

                </div>
                
            </div>

            <div className="page">
                
                <div>

                <FiCornerDownRight />

                <FiLayout /> 

                <p>Login</p>

                </div>
                
            </div>
        </div>

    );    

}