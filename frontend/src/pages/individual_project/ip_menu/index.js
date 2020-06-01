import React from 'react';
import { Link } from 'react-router-dom';
import { FiMap, FiSquare, FiXSquare, FiCheckSquare, FiDatabase, FiServer, FiSettings, FiCalendar, FiMessageCircle, FiZap, FiPlusSquare, FiMinusSquare, FiLayout, FiPieChart, FiCornerDownRight, FiLayers, FiTerminal } from 'react-icons/fi';


import './style.css';

export default function Login() {

    return (
    
        <div className="ip-menu-container">

            <div className="title">

                <p>GlassPlastic</p>

            </div>

            <div className="sessionTitle">

                <div>
                
                    <p>View Modes</p>

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiMap />

                        <p>Site Map</p>

                    </div>
                    
                    <div className="right">

                        <FiXSquare /> 

                    </div>   

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiCheckSquare />

                        <p>To-Do-Lists</p>

                    </div>
                    
                    <div className="right">

                        <FiSquare /> 

                    </div>   

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiDatabase />

                        <p>Databases</p>

                    </div>
                    
                    <div className="right">

                        <FiSquare /> 

                    </div>   

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiServer />

                        <p>Sections</p>

                    </div>
                    
                    <div className="right">

                        <FiSquare /> 

                    </div>   

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiMessageCircle />

                        <p>Comments</p>

                    </div>
                    
                    <div className="right">

                        <FiSquare /> 

                    </div>   

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiMap />

                        <p>Calendar</p>

                    </div>
                    
                    <div className="right">

                        <FiSquare /> 

                    </div>   

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiZap />

                        <p>Functions</p>

                    </div>
                    
                    <div className="right">

                        <FiSquare /> 

                    </div>   

                </div>

            </div>

            <div className="viewMode">

                <div>

                    <div className="left">

                        <FiSettings />

                        <p>Settings</p>

                    </div>
                    
                    <div className="right">

                        <FiSquare /> 

                    </div>   

                </div>

            </div>

            <div className="sessionTitle">

                <div>
                
                    <p>Components</p>

                </div>

            </div>

            <div className="componentTitle">

                <div>

                    <div className="left">

                        <FiMap />

                        <p>Pages</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="page">

                <div>

                <FiCornerDownRight />

                <FiLayout /> 

                <p>Sobre Nós</p>

                </div>
                
            </div>

            <div className="page">
                
                <div>

                <FiCornerDownRight />

                <FiPieChart /> 

                <p>Cadastro</p>

                </div>
                
            </div>

            <div className="page">
                
                <div>

                <FiCornerDownRight />

                <FiLayout /> 

                <p>Login</p>

                </div>
                
            </div>

            <div className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiCheckSquare />

                        <p>To-Do-Lists</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="list">

                <div>

                <FiCornerDownRight />

                <div className="mask-red">
                </div>

                <p>Pesquisar / Aprender</p>

                </div>

            </div>

            <div className="list">

                <div>

                <FiCornerDownRight />

                <div className="mask-yellow">
                </div>

                <p>UI Design no Figma</p>

                </div>

            </div>

            <div className="list">

                <div>

                <FiCornerDownRight />

                <div className="mask-green">
                </div>

                <p>Projetar Inicialmente</p>

                </div>

            </div>

            <div className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiDatabase />

                        <p>Tables</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="table">

                <div>

                    <FiCornerDownRight />

                    <FiLayers />

                    <p>Clientes</p>

                </div>

            </div>

            <div className="table">

                <div>

                    <FiCornerDownRight />

                    <FiLayers />

                    <p>Produtos</p>

                </div>

            </div>

            <div className="table">

                <div>

                    <FiCornerDownRight />

                    <FiLayers />

                    <p>Administrador</p>

                </div>

            </div>

            <div className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiMessageCircle />

                        <p>Comments</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="comments">

                <div>

                    <FiCornerDownRight />

                    <div className="mask-circle">

                        <p>03</p>

                    </div>

                    <p>Visitors</p>

                </div>

            </div>

            <div className="comments">

                <div>

                    <FiCornerDownRight />

                    <div className="mask-circle">

                        <p>54</p>

                    </div>

                    <p>Owners</p>

                </div>

            </div>

            <div className="componentTitle">

                <div>
                    
                    <div className="left">

                        <FiZap />

                        <p>Functions</p>

                    </div>
                    
                    <div className="right">

                        <FiMinusSquare /> 

                    </div>

                </div>

            </div>

            <div className="function">

                <div>

                    <FiCornerDownRight />

                    <FiTerminal />

                    <p>Login</p>

                </div>

            </div>

            <div className="function">

                <div>

                    <FiCornerDownRight />

                    <FiTerminal />

                    <p>Cadastro</p>

                </div>

            </div>

        </div>

    );    

}