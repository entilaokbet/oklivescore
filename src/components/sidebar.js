import React from 'react';

import api from '../api/basketball-total';

const SideBar = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')

    // fetches data
    api.getData()
    .then((response)=>{
        setResponseData(response.data)
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });

	return (
        <>
        <div className="col-content-1 sticky-side">
            <ul className="side-menu">
                <li>
                    <img src={require('../assets/images/Group-1005.png')} className="" title="" alt="" /> All Sports <span className="counter-balloon">{responseData}</span> 
                </li>
                <li className="selected">
                    <img src={require('../assets/images/ic_outline-sports-basketball.png')} className="" title="" alt="" /> Basketball <span className="counter-balloon">{responseData}</span> 
                </li>
                <li>
                    <img src={require('../assets/images/bx_football.png')} className="" title="" alt="" /> Football <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/bx_tennis-ball.png')} className="" title="" alt="" /> Tennis <span className="counter-balloon">0</span> 
                </li>                                                
                <li>
                    <img src={require('../assets/images/material-symbols_sports-volleyball-outline.png')} className="" title="" alt="" /> Volleyball <span className="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/icon-park_rugby-one.png')} class="" title="" alt="" /> Rugby <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/bx_baseball.png')} class="" title="" alt="" /> Baseball <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/Icehockey.png')} class="" title="" alt="" /> Ice Hockey <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/icon-park-outline_badminton.png')} class="" title="" alt="" /> Badminton <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/MMA.png')} class="" title="" alt="" /> MMA <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/iconoir_boxing-glove.png')} class="" title="" alt="" /> Boxing <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/Cueball.png')} class="" title="" alt="" /> Cue ball <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/mdi_racing-helmet.png')} class="" title="" alt="" /> Moto Sport <span class="counter-balloon">0</span> 
                </li>
                <li>
                    <img src={require('../assets/images/game-icons_american-football-helmet.png')} class="" title="" alt="" /> NFL <span class="counter-balloon">0</span> 
                </li>                                                
            </ul>
        </div>
		</>
	);
};

export default SideBar;
