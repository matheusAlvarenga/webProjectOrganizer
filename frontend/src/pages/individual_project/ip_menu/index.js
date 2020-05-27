import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiClock, FiArchive, FiFolder, FiFile, FiCornerDownRight, FiPlus, FiMinus } from 'react-icons/fi';


import './style.css';

export default function Login() {

    return (
    
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

    );    

}