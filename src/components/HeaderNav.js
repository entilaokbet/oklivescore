import React from 'react';

import MenuHome from '../assets/images/akar-icons_home.png';
import MenuSportsNews from '../assets/images/ant-design_trophy-outlined.png';
import MenuBookmark from '../assets/images/material-symbols_bookmark-1.png';

import { Outlet, Link } from "react-router-dom";

const HeaderNav = () => {
    return (
        <>
        <nav id="site-navigation" className="main-navigation">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Primary Menu</button>

            <div className="menu-main-menu-container">
                <ul id="primary-menu" className="menu nav-menu">
                    <li id="menu-item-18" className="home">
                        <Link to="/"><img src={MenuHome} title="Home" alt="Home" /> Home</Link>
                    </li>
                    
                    <li id="menu-item-17" className="sports-news">
                        <Link to="/sports-news"><img src={MenuSportsNews} title="Sports News" alt="Sports News" /> Sports News</Link>
                    </li>
                    
                    <li id="menu-item-16" className="bookmark">
                        <Link to="/bookmarks"><img src={MenuBookmark} title="Bookmark" alt="Bookmark" /> Bookmark</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
        </>
    );
} 

export default HeaderNav;