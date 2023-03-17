import React from 'react';
import Logo from '../components/Logo';
import HeaderNav from './HeaderNav';
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
				<Logo />
			
				<div className="col-9">
					<HeaderNav />

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
		
		</>
	);
};

export default Header;
