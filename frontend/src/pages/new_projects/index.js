import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu } from 'react-icons/fi';

import Header from '../header';
import AsideMenu from '../aside_menu';

import Photo1 from '../../assets/item-photo.jpg';

import './style.css';

export default function NewProject() {

    return (
    <div className="content">
        <Header />
        <AsideMenu />
    
        <div className="proj-container">

            <div className="title">

                <p>New Project</p>
                <p>/ Projetos Para Fazer</p>

            </div>
            <form>
                <div className="form">

                    <div className="part-um">

                        <input type="text" placeholder="Project Name" />
                        <input type="text" placeholder="Buyer Name" />
                        <textarea placeholder="Description" ></textarea>

                    </div>

                    <div className="part-dois">

                        <img src={Photo1} alt="Preview de Foto" />

                        <input type="text" placeholder="Link da Imagem"/>

                    </div>

                </div>

                <div className="btn">

                    <input type="submit" value="CREATE NEW PROJECT"/>

                </div>
            </form>
        </div>
        
    </div>
    );    

}