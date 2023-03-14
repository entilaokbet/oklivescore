import React from 'react';

import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import MainContent from '../components/HomeContent';
import LastestPost from '../components/LatestPosts';
import HookApi from '../components/HookAPI';

const Home = () => {
	return (
		<>
			<Header></Header>
			<div className="container">

				<div className="col mt24">
					<SideBar></SideBar>
					<MainContent></MainContent>
					<LastestPost></LastestPost>
				</div>
				
				<HookApi></HookApi>
			</div>
		</>
	);
};

export default Home;
