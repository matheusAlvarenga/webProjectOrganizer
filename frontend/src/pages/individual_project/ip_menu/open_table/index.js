import React from 'react';
import { Link } from 'react-router-dom';
import { FiDatabase, FiMinusSquare, FiCornerDownRight, FiLayers } from 'react-icons/fi';

import '../style.css';

export default function close_pages({ close = ()=>{} }) {

    return(

        <div style={{width:'100%'}}>

            <div onClick={() => close()} className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiDatabase />

                        <p>Tables</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="table">

                <div>

                    <FiCornerDownRight />

                    <FiLayers />

                    <p>Clientes</p>

                </div>

            </div>

            <div className="table">

                <div>

                    <FiCornerDownRight />

                    <FiLayers />

                    <p>Produtos</p>

                </div>

            </div>

            <div className="table">

                <div>

                    <FiCornerDownRight />

                    <FiLayers />

                    <p>Administrador</p>

                </div>

            </div>

        </div>

    );    

}