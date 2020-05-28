import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiChevronDown, FiGrid, FiMenu, FiArrowLeftCircle, FiShare2, FiFolderPlus, FiFilePlus, FiSearch, FiClock, FiArchive, FiMinus, FiCornerDownRight, FiFolder, FiFile } from 'react-icons/fi';

import Header from '../ip_header';
import AsideMenu from '../ip_menu';

import './style.css';
import logoWpo from '../../../assets/logo_wpo.svg';

export default function Project() {

    return (
        <div className="content-projs">

            <Header />
            <AsideMenu />

        </div>
    );    

}