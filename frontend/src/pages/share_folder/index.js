import React from 'react';

import './style.css';

export default function ShareFolder() {

    return (
    
        <div className="center">

            <div className="share-container">

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