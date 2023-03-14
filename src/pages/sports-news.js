import React from 'react';

import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import SportsContent from '../components/SportsContent';
import LastestPost from '../components/LatestPosts';
import HookApi from '../components/HookAPI';

const SportsNews = () => {
	return (
		<>
			<Header></Header>

			<div className="container">

				<div className="col mt24">
					<SideBar></SideBar>
					<SportsContent></SportsContent>
					<LastestPost></LastestPost>
				</div>
				
				<HookApi></HookApi>
			</div>
		</>
	);
};

export default SportsNews;