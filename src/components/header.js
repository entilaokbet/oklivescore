import React from 'react';

import OKBetLogo from '../assets/images/okbet-big.webp';
import MenuHome from '../assets/images/akar-icons_home.png';
import MenuSportsNews from '../assets/images/ant-design_trophy-outlined.png';
import MenuBookmark from '../assets/images/material-symbols_bookmark-1.png';
import MenuSearch from '../assets/images/material-symbols_search.png';
import ProfilePic from '../assets/images/Profile.png';

const Header = () => {
	return (

		<header id="masthead" class="site-header">
			<div class="container">
			<div class="col">
				<div class="col-1">
					<div class="site-branding">
						<div class="custom-logo">
							<a href="/">
								<img src={OKBetLogo} class="" title="" alt="" width="79.2px" height="32px" />
							</a>
						</div>
					</div>
				</div>
			
				<div class="col-9">
					<nav id="site-navigation" class="main-navigation">
						<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Primary Menu</button>

						<div class="menu-main-menu-container">
							<ul id="primary-menu" class="menu nav-menu">
								<li id="menu-item-18" class="home menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18">
									<a href="/" aria-current="page"><img src={MenuHome} title="Home" alt="Home" /> Home</a>
								</li>
								
								<li id="menu-item-17" class="sports-news menu-item menu-item-type-post_type menu-item-object-page menu-item-17">
									<a href="/sports-news/"><img src={MenuSportsNews} title="Sports News" alt="Sports News" /> Sports News</a>
								</li>
								
								<li id="menu-item-16" class="bookmark menu-item menu-item-type-post_type menu-item-object-page menu-item-16">
									<a href="/bookmark/"><img src={MenuBookmark} title="Bookmark" alt="Bookmark" /> Bookmark</a>
								</li>
							</ul>
						</div>
					</nav>

					<div class="search">
						<input type="text" name="search" value="" class="search-field" placeholder="Search" />
						<img src={MenuSearch} class="search-icon" title="Search" alt="Search" />
					</div>
				</div>

				<div class="col-2">
					<div class="account">
						
						<div class="inline circle">
							<img src={ProfilePic} title="profile" alt="profile" />
						</div>

						<div class="inline profile"></div>

					</div>
				</div>

			</div>
			</div>
			
		</header>
		
	);
};

export default Header;
