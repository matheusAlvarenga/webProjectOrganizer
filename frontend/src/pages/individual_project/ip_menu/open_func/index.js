import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiMinusSquare, FiCornerDownRight, FiTerminal } from 'react-icons/fi';

import '../style.css';

export default function close_pages({ close = ()=>{} }) {

    return(

        <div style={{width:'100%'}}>

            <div onClick={()=>close()} className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiZap />

                        <p>Functions</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="function">

                <div>

                    <FiCornerDownRight />

                    <FiTerminal />

                    <p>Login</p>

                </div>

            </div>

            <div className="function">

                <div>

                    <FiCornerDownRight />

                    <FiTerminal />

                    <p>Cadastro</p>

                </div>

            </div>

        </div>

    );    

}