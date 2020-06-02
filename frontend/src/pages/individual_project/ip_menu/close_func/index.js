import React from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiPlusSquare } from 'react-icons/fi';

import '../style.css';

export default function close_pages({ opn = ()=>{} }) {

    return(

        <div onClick={()=>opn()} className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiZap />

                        <p>Functions</p>

                    </div>
                    
                    <div className="right">

                        <FiPlusSquare /> 

                    </div>

                </div>

            </div>

    );    

}