import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './style.css';

export default function Search({onCse= () => {}, id='modal'}) {

    const handleOnClose = (e) => {

        if(e.target.id === id) onCse();

    }

    return (
    
        <div id={id} className="center" onClick={handleOnClose}>

            <div className="search-container">

                <div className="close">

                    <p onClick={onCse}>X</p>

                </div>

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