import React from 'react';

import './style.css';

export default function ShareFolder({onCse= () => {}, id='modal'}) {

    const handleOnClose = (e) => {

        if(e.target.id === id) onCse();

    }

    return (
    
        <div id={id} className="center" onClick={handleOnClose}>

            <div className="share-container">

                <div className="close">

                    <p onClick={onCse}>X</p>

                </div>

                <div className="title">

                    <p>Sharing</p>
                    <p>Projetos Para Fazer</p>

                </div>

                <form>

                    <input type="text" value="www.seila.com/shared?id=dsaiojdsaio" />
                    <input type="submit" value="COPY" />

                </form>

            </div>

        </div>

    );    

}