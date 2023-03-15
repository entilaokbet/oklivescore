import React from 'react';

import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import SportsContent from '../components/SportsContent';
import LastestPost from '../components/LatestPosts';

const SportsNews = () => {
	return (
		<>
			<Header></Header>
			<div className="container">

				<div className="col mt24">
					<SideBar></SideBar>

					<div className="col-content-9">

						<SportsContent></SportsContent>
					
					</div>
					
					<LastestPost></LastestPost>
				</div>
				
			</div>
		</>
	);
};

export default SportsNews;