import React from 'react';

import './style.css';

export default function NewFolder({onCse= () => {}, id='modal'}) {

    const handleOnClose = (e) => {

        if(e.target.id === id) onCse();

    }

    return (
    
        <div id={id} className="center" onClick={handleOnClose}>

            <div className="folder-container">

                <div className="close">

                    <p onClick={onCse}>X</p>

                </div>

                <div className="title">

                    <p>New Folder</p>
                    <p>/ Projetos Para Fazer</p>

                </div>

                <form>

                    <input type="text" placeholder="Folder Name" />

                    <input type="submit" value="CREATE NEW FOLDER" />

                </form>

            </div>

        </div>

    );    

}