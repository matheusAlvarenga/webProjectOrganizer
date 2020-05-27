import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu, FiArrowLeftCircle, FiShare2, FiFolderPlus, FiFilePlus, FiSearch, FiClock, FiArchive, FiMinus, FiCornerDownRight, FiFolder, FiFile } from 'react-icons/fi';

import Header from '../header';
import AsideMenu from '../aside_menu';
import NewFolder from '../new_folder';
import Search from '../search';

import './style.css';
import './header.css';
import './aside_menu.css';

import logoWpo from '../../assets/logo_wpo.svg';
import Photo1 from '../../assets/item-photo.jpg';
import Photo2 from '../../assets/item-photo2.jpg';
import Photo3 from '../../assets/item-photo3.jpg';

export default function Projects() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
    <div className="content">

        {isModalVisible ? <NewFolder onClose={() => console.log('top')} /> : null}

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
                    <FiFolderPlus onClick={() => setIsModalVisible(true) } />
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

        <div className="projects-container">

            <div className="projects-actions">

                <div className="selector">

                    <p>Last modified</p>
                    <FiChevronDown />

                </div>

                <div className="viewmode">

                    <div className="view">

                        <FiGrid />

                    </div>

                    <div className="view">

                        <FiMenu />

                    </div>

                </div>

            </div>

            <div className="list">

                <ul>

                    <li>

                        <div className="item">

                            <div className="foto">

                                <img src={Photo1} alt="Foto do Projeto" />

                            </div>

                            <div className="footer">

                                <h1>GlassPlastic</h1>
                                <p>20/04/2001</p>

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="item">

                        <div className="foto">

                            <img src={Photo2} alt="Foto do Projeto" />

                        </div>

                            <div className="footer">

                                <h1>GlassPlastic</h1>
                                <p>20/04/2001</p>

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="item">

                        <div className="foto">

                            <img src={Photo3} alt="Foto do Projeto" />

                        </div>

                            <div className="footer">

                                <h1>GlassPlastic</h1>
                                <p>20/04/2001</p>

                            </div>

                        </div>

                    </li>
                    
                </ul>

            </div>
        </div>

        <div className="addfile">

            <div className="circle">

                <FiPlus />

            </div>

        </div>

    </div>
    );    

}