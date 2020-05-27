import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './style.css';

export default function ShareFolder() {

    return (
    
        <div className="center">

            <div className="share-container">

                <div className="title">

                    <p>Searching</p>
                    <p>Projetos Para Fazer</p>

                </div>

                <form>

                    <input type="text" />
                    <button type="submit"><FiSearch /></button>

                </form>

            </div>

        </div>

    );    

}