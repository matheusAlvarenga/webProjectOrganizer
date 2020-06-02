import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckSquare, FiPlusSquare } from 'react-icons/fi';

import '../style.css';

export default function close_pages({ opn = ()=>{} }) {

    return(

        <div style={{width:'100%'}}>

            <div onClick={() => opn()} className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiCheckSquare />

                        <p>To-Do-Lists</p>

                    </div>
                    
                    <div className="right">

                        <FiPlusSquare /> 

                    </div>

                </div>

            </div>

        </div>

    );    

}