import React from 'react';

const SideBar = () => {
	return (

        <div className="col-content-1 sticky-side">
            <ul className="side-menu">
                <li>
                    <img src={require('../assets/images/Group-1005.png')} class="" title="" alt="" /> All Sports <span class="counter-balloon">1923</span> 
                </li>
                <li class="selected">
                    <img src={require('../assets/images/ic_outline-sports-basketball.png')} class="" title="" alt="" /> Basketball <span class="counter-balloon">152</span> 
                </li>
                <li>
                    <img src={require('../assets/images/bx_football.png')} class="" title="" alt="" /> Football <span class="counter-balloon">123</span> 
                </li>
                <li>
                    <img src={require('../assets/images/bx_tennis-ball.png')} class="" title="" alt="" /> Tennis <span class="counter-balloon">123</span> 
                </li>                                                
                <li>
                    <img src={require('../assets/images/material-symbols_sports-volleyball-outline.png')} class="" title="" alt="" /> Volleyball <span class="counter-balloon">123</span> 
                </li>
                <li>
                    <img src={require('../assets/images/icon-park_rugby-one.png')} class="" title="" alt="" /> Rugby <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/bx_baseball.png')} class="" title="" alt="" /> Baseball <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/Icehockey.png')} class="" title="" alt="" /> Ice Hockey <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/icon-park-outline_badminton.png')} class="" title="" alt="" /> Badminton <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/MMA.png')} class="" title="" alt="" /> MMA <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/iconoir_boxing-glove.png')} class="" title="" alt="" /> Boxing <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/Cueball.png')} class="" title="" alt="" /> Cue ball <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/mdi_racing-helmet.png')} class="" title="" alt="" /> Moto Sport <span class="counter-balloon">23</span> 
                </li>
                <li>
                    <img src={require('../assets/images/game-icons_american-football-helmet.png')} class="" title="" alt="" /> NFL <span class="counter-balloon">40</span> 
                </li>                                                
            </ul>
        </div>
		
	);
};

export default SideBar;
