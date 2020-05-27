import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu, FiArrowLeftCircle, FiShare2, FiFolderPlus, FiFilePlus, FiSearch, FiClock, FiArchive, FiMinus, FiCornerDownRight, FiFolder, FiFile } from 'react-icons/fi';

import Header from '../header';
import AsideMenu from '../aside_menu';

import logoWpo from '../../assets/logo_wpo.svg';
import Photo1 from '../../assets/item-photo.jpg';

import './style.css';
import './header.css';
import './aside_menu.css';

export default function NewProject() {

    return (
    <div className="content">
        <header className="header-container">

            <div className="logo">
                
                <img src={logoWpo} alt="Logo Wpo" />

            </div>

            <div className="body">

                <div className="title">

                    <FiArrowLeftCircle />
                    <p className="proj">Projects /</p>
                    <p className="folder">Projeto Para Fazer</p>

                </div>

                <div className="actions">

                    <Link to="../shareFolder"><FiShare2/></Link>
                    <p>|</p>
                    <FiFolderPlus />
                    <p>|</p>
                    <Link to="../newFile"><FiFilePlus/></Link>

                </div>

            </div>

        </header>

        <div className="menu-container">

            <div className="title">

                <div className="circle-mask">

                    <h1>M</h1>

                </div>

                <p>Matheus Alvarenga</p>

            </div>      

            <div className="item-one">

                <div className="icon">

                    <FiSearch />

                </div>

                <div className="text">

                    <p>Search</p>                   

                </div>


            </div>

            <div className="item-one">

                <div className="icon">

                    <FiClock />

                </div>

                <div className="text">

                    <p>Recents</p>                   

                </div>


            </div>

            <div className="item-one-proj">

                <div className="icon">

                    <FiArchive />

                </div>

                <div className="text">

                    <p>Projects</p>                   

                </div>

                <div className="minus">

                    <FiMinus />

                </div>

            </div> 

            <div className="item-two">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFolder />

                </div>

                <div className="text">

                    <p>Projetos Para Fazer</p>                   

                </div>

                <div className="minus">

                    <FiMinus />

                </div>

            </div>               
            
            <div className="item-three">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFile />

                </div>

                <div className="text">

                    <p>GlassPlastic</p>                   

                </div>

            </div>    

            <div className="item-three">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFile />

                </div>

                <div className="text">

                    <p>Oficina do Aluno</p>                   

                </div>

            </div>

            <div className="item-three">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFile />

                </div>

                <div className="text">

                    <p>J.A Câmbios</p>                   

                </div>

            </div>

            <div className="item-two">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFolder />

                </div>

                <div className="text">

                    <p>Projetos Para Aprov...</p>                   

                </div>

                <div className="minus">

                    <FiMinus />

                </div>

            </div>

            <div className="item-two">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFolder />

                </div>

                <div className="text">

                    <p>Projetos Aprovados</p>                   

                </div>

                <div className="minus">

                    <FiMinus />

                </div>

            </div>

            <div className="item-two">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFolder />

                </div>

                <div className="text">

                    <p>Projetos Finalizados</p>                   

                </div>

                <div className="minus">

                    <FiMinus />

                </div>

            </div>

            <div className="item-two">

                <div className="arrow">

                    <FiCornerDownRight />

                </div>

                <div className="icon">

                    <FiFolder />

                </div>

                <div className="text">

                    <p>Projetos Não-Aprov...</p>                   

                </div>

                <div className="minus">

                    <FiMinus />

                </div>

            </div>

        </div>
    
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