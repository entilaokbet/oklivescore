import React from 'react';
//import Link from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

import OKBetLogo from '../assets/images/okbet-big.webp';
import MenuHome from '../assets/images/akar-icons_home.png';
import MenuSportsNews from '../assets/images/ant-design_trophy-outlined.png';
import MenuBookmark from '../assets/images/material-symbols_bookmark-1.png';
import MenuSearch from '../assets/images/material-symbols_search.png';
import ProfilePic from '../assets/images/Profile.png';

const Header = () => {

	let items = ["All Sports", "Basketball", "Football", "Tennis", "Volleyball", "Rugby", "Baseball", "Ice Hockey", "Badminton", "MMA", "Boxing", "Cue ball", "Moto Sport", "NFL"];

	const handleSelectItem = (items: string) => {
		console.log(items);
	};

	return (
		<>
		<header id="masthead" className="site-header full-width-wrap sticky">
			<div className="container">
			<div className="col">
				<div className="col-1">
					<div className="site-branding">
						<div className="custom-logo">
							<a href="/">
								<img src={OKBetLogo} className="LogoStyle" title="OKBET" alt="OKBET"  />
							</a>
						</div>
					</div>
				</div>
			
				<div class="col-9">
					<nav id="site-navigation" className="main-navigation">
						<button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Primary Menu</button>

						<div className="menu-main-menu-container">
							<ul id="primary-menu" className="menu nav-menu">
								<li id="menu-item-18" className="home menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18">
									<Link to="/"><img src={MenuHome} title="Home" alt="Home" /> Home</Link>
								</li>
								
								<li id="menu-item-17" className="sports-news menu-item menu-item-type-post_type menu-item-object-page menu-item-17">
									<Link to="/sports-news"><img src={MenuSportsNews} title="Sports News" alt="Sports News" /> Sports News</Link>
								</li>
								
								<li id="menu-item-16" className="bookmark menu-item menu-item-type-post_type menu-item-object-page menu-item-16">
									<Link to="/bookmarks"><img src={MenuBookmark} title="Bookmark" alt="Bookmark" /> Bookmark</Link>
								</li>
							</ul>
						</div>
					</nav>

					<div className="search">
						<input type="text" name="search" value="" className="search-field" placeholder="Search" />
						<img src={MenuSearch} className="search-icon" title="Search" alt="Search" />
					</div>
				</div>

				<div className="col-2">
					<div className="account">
						
						<div className="inline circle">
							<img src={ProfilePic} title="profile" alt="profile" />
						</div>

						<div className="inline profile"></div>

					</div>
				</div>

			</div>
			</div>
			
		</header>
		<Outlet />
		</>
	);
};

export default Header;
