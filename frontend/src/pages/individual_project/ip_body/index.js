import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu, FiArrowLeftCircle, FiShare2, FiFolderPlus, FiFilePlus, FiSearch, FiClock, FiArchive, FiMinus, FiCornerDownRight, FiFolder, FiFile } from 'react-icons/fi';

import Header from '../ip_header';
import AsideMenu from '../ip_menu';

import ToDoLists from '../ip_to_do_list';
import SiteMap from '../ip_sitemap';
import Settings from '../ip_settings';
import Database from '../ip_database';
import Function from '../ip_function';
import Comments from '../ip_comments';
import Section from '../ip_section';
import Calendar from '../ip_calendar';

import './style.css';
import logoWpo from '../../../assets/logo_wpo.svg';

export default function Project() {

    const [selected, setSelected] = useState(7);

    return (
        <div className="content-projs">

            <Header />
            <AsideMenu
            select={selected}
            list={()=>setSelected(1)}
            site={()=>setSelected(2)}
            data={()=>setSelected(3)}
            sect={()=>setSelected(4)}
            comm={()=>setSelected(5)}
            cale={()=>setSelected(6)}
            func={()=>setSelected(7)}
            sett={()=>setSelected(8)} />

            <div className="ip_body_container">

                { selected == 1 ? <SiteMap /> : null }
                { selected == 2 ? <ToDoLists /> : null }
                { selected == 3 ? <Database /> : null }
                { selected == 4 ? <Section /> : null }
                { selected == 5 ? <Comments /> : null }
                { selected == 6 ? <Calendar /> : null }
                { selected == 7 ? <Function /> : null }
                { selected == 8 ? <Settings /> : null }
                
            </div>

        </div>
    );    

}