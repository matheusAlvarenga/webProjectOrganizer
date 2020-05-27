import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu, FiArrowLeftCircle, FiShare2, FiFolderPlus, FiFilePlus, FiSearch, FiClock, FiArchive, FiMinus, FiCornerDownRight, FiFolder, FiFile } from 'react-icons/fi';

import Header from '../header';
import AsideMenu from '../aside_menu';
import NewFolder from '../new_folder';
import Search from '../search';
import ShareFolder from '../share_folder';

import './style.css';
import './header.css';
import './aside_menu.css';

import logoWpo from '../../assets/logo_wpo.svg';
import Photo1 from '../../assets/item-photo.jpg';
import Photo2 from '../../assets/item-photo2.jpg';
import Photo3 from '../../assets/item-photo3.jpg';

export default function Projects() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);

    return (
    <div className="content">

        {isModalVisible ? <NewFolder onCse={ () => setIsModalVisible(false) } /> : null}
        {isModalVisible2 ? <Search onCse={ () => setIsModalVisible2(false) } /> : null}
        {isModalVisible3 ? <ShareFolder onCse={ () => setIsModalVisible3(false) } /> : null}

        <header className="header-container">

            <div className="logo">
                
                <img src={logoWpo} alt="Logo Wpo" />

            </div>

            <div className="body">

                <div className="title">

                    <FiArrowLeftCircle className="pointer" />
                    <p className="proj">Projects /</p>
                    <p className="folder">Projeto Para Fazer</p>

                </div>

                <div className="actions">

                    <FiShare2 className="pointer" onClick={() => setIsModalVisible3(true) } />
                    <p>|</p>
                    <FiFolderPlus className="pointer" onClick={() => setIsModalVisible(true) } />
                    <p>|</p>
                    <Link to="../newFile"><FiFilePlus style={{marginTop: '2px'}}/></Link>

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

            <div onClick={() => setIsModalVisible2(true) } className="item-one pointer">

                <div className="icon">

                    <FiSearch />

                </div>

                <div className="text">

                    <p>Search</p>                   

                </div>


            </div>

            <div className="item-one pointer">

                <div className="icon">

                    <FiClock />

                </div>

                <div className="text">

                    <p>Recents</p>                   

                </div>


            </div>

            <div className="item-one-proj pointer">

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

            <div className="item-two pointer">

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
            
            <div className="item-three pointer">

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

            <div className="item-three pointer">

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

            <div className="item-three pointer">

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

            <div className="item-two pointer">

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

            <div className="item-two pointer">

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

            <div className="item-two pointer">

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

            <div className="item-two pointer">

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

                <div className="selector pointer">

                    <p>Last modified</p>
                    <FiChevronDown />

                </div>

                <div className="viewmode">

                    <div className="view pointer">

                        <FiGrid />

                    </div>

                    <div className="view pointer">

                        <FiMenu />

                    </div>

                </div>

            </div>

            <div className="list">

                <ul>

                    <li>

                        <div className="item pointer">

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

                        <div className="item pointer">

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

                        <div className="item pointer">

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

            <Link to="/newFile" style={{color:'white'}}>

                <div className="circle">

                    <FiPlus />

                </div>

            </Link>

        </div>

    </div>
    );    

}