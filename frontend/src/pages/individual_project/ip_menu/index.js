import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMap, FiSquare, FiXSquare, FiCheckSquare, FiDatabase, FiServer, FiSettings, FiCalendar, FiMessageCircle, FiZap, FiPlusSquare, FiMinusSquare, FiLayout, FiPieChart, FiCornerDownRight, FiLayers, FiTerminal } from 'react-icons/fi';

import OpenPages from './open_pages';
import ClosePages from './close_pages';
import OpenLists from './open_lists';
import CloseLists from './close_lists';
import OpenTables from './open_table';
import CloseTables from './close_table';
import OpenComm from './open_comm';
import CloseComm from './close_comm';
import OpenFunc from './open_func';
import CloseFunc from './close_func';

import WithX from './withx';
import WithoutX from './withoutx';

import './style.css';
import with_x from './withx';

export default function Login({select=1,list=()=>{},site=()=>{},data=()=>{},sect=()=>{},comm=()=>{},cale=()=>{},func=()=>{},sett=()=>{}}) {

    const [isPage, setIsPage] = useState(false);
    const [isList, setIsList] = useState(false);
    const [isTable, setIsTable] = useState(false);
    const [isComm, setIsComm] = useState(false);
    const [isFunc, setIsFunc] = useState(false);

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

            <div onClick={list} className="viewMode">

                <div>

                    <div className="left">

                        <FiMap />

                        <p>Site Map</p>

                    </div>
                    
                    { select == 1 ? <WithX /> : <WithoutX /> } 

                </div>

            </div>

            <div onClick={site} className="viewMode">

                <div>

                    <div className="left">

                        <FiCheckSquare />

                        <p>To-Do-Lists</p>

                    </div>
                    
                    { select == 2 ? <WithX /> : <WithoutX /> }  

                </div>

            </div>

            <div onClick={data} className="viewMode">

                <div>

                    <div className="left">

                        <FiDatabase />

                        <p>Databases</p>

                    </div>
                    
                    { select == 3 ? <WithX /> : <WithoutX /> }  

                </div>

            </div>

            <div onClick={sect} className="viewMode">

                <div>

                    <div className="left">

                        <FiServer />

                        <p>Sections</p>

                    </div>
                    
                    { select == 4 ? <WithX /> : <WithoutX /> }  


                </div>

            </div>

            <div onClick={comm} className="viewMode">

                <div>

                    <div className="left">

                        <FiMessageCircle />

                        <p>Comments</p>

                    </div>
                    
                    { select == 5 ? <WithX /> : <WithoutX /> } 


                </div>

            </div>

            <div onClick={cale} className="viewMode">

                <div>

                    <div className="left">

                        <FiMap />

                        <p>Calendar</p>

                    </div>
                    
                    { select == 6 ? <WithX /> : <WithoutX /> } 
  

                </div>

            </div>

            <div onClick={func} className="viewMode">

                <div>

                    <div className="left">

                        <FiZap />

                        <p>Functions</p>

                    </div>
                    
                    { select == 7 ? <WithX /> : <WithoutX /> }  
  

                </div>

            </div>

            <div onClick={sett} className="viewMode">

                <div>

                    <div className="left">

                        <FiSettings />

                        <p>Settings</p>

                    </div>
                    
                    { select == 8 ? <WithX /> : <WithoutX /> } 
 

                </div>

            </div>

            <div className="sessionTitle">

                <div>
                
                    <p>Components</p>

                </div>

            </div>

            {isPage ? <OpenPages close={() => {setIsPage(false)}} /> : <ClosePages opn={() => {setIsPage(true)}} /> }

            {isList ? <OpenLists close={() => {setIsList(false)}} /> : <CloseLists opn={() => {setIsList(true)}} /> }

            {isTable ? <OpenTables close={() => {setIsTable(false)}} /> : <CloseTables opn={() => {setIsTable(true)}} /> }

            {isComm ? <OpenComm close={() => {setIsComm(false)}} /> : <CloseComm opn={() => {setIsComm(true)}} /> }

            {isFunc ? <OpenFunc close={() => {setIsFunc(false)}} /> : <CloseFunc opn={() => {setIsFunc(true)}} /> }

        </div>

    );    

}