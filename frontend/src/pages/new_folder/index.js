import React from 'react';

import './style.css';

export default function NewFolder(onClose=() => {}) {

    return (
    
        <div className="center">

            <div className="folder-container">

                <div className="close">

                    <p onClose>X</p>

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