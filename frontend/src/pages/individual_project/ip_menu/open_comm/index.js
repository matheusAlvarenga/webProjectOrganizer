import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle, FiMinusSquare, FiCornerDownRight } from 'react-icons/fi';

import '../style.css';

export default function open_pages({ close = ()=>{} }) {

    return(

        <div style={{width:'100%'}}>
            <div onClick={()=>close()} className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiMessageCircle />

                        <p>Comments</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="comments">

                <div>

                    <FiCornerDownRight />

                    <div className="mask-circle">

                        <p>03</p>

                    </div>

                    <p>Visitors</p>

                </div>

            </div>

            <div className="comments">

                <div>

                    <FiCornerDownRight />

                    <div className="mask-circle">

                        <p>54</p>

                    </div>

                    <p>Owners</p>

                </div>

            </div>
        </div>

    );    

}