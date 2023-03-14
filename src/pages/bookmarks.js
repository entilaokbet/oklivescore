import React from 'react';

import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import BookmarkContent from '../components/BookmarkContent';
import LastestPost from '../components/LatestPosts';
import HookApi from '../components/HookAPI';

let title = ['Bookmark']

const Bookmarks = () => {
	return (
		<>
		<Header></Header>
			<div className="container">

				<div className="col mt24">
					<SideBar></SideBar>
					<BookmarkContent></BookmarkContent>
					<LastestPost></LastestPost>
				</div>
				
				<HookApi></HookApi>
			</div>
		</>
		
	); 
};

export default Bookmarks;