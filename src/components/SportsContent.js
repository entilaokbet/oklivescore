import React from 'react';

const SportsContent = () => {
	return (
        <>
        <div className="col-content-9">
            <div class="nav-tabs">
                <ul class="nav-tabs-menu">
                    <li>
                        <a href="#">All</a>
                    </li>
                    <li class="selected">
                        <a href="#">NBA</a>
                    </li>
                    <li>
                        <a href="#">PBA</a>
                    </li>
                    <li>
                        <a href="#">MPBA</a>
                    </li>
                </ul>
            </div>
            
            <div class="space-btw"></div>

            <div class="hot-live-events">
                <div class="hot-live">
                    <img src={require('../assets/images/hot.png')} alt="" title="" />
                    <span>Hot Live Events</span>
                </div>

                <div class="hot-live-tabs">
                    <div class="hot-live-content">
                        <div class="player-match">
                            <div class="player-match-one">
                                <img src={require('../assets/images/Pistons.png')} alt="Piston" />
                                <span>Piston</span>
                            </div>
                            <div class="player-match-score">
                                <span class="score">98 - 95</span>
                                <span class="status">Finished</span>
                            </div>
                            <div class="player-match-two">
                                <img src={require('../assets/images/Magic.png')} alt="Magic" />
                                <span>Magic</span>
                            </div>
                        </div>
                        
                        <div class="player-match-standing">
                            <table>
                                <thead>
                                    <tr>
                                        <th width="100px">Team</th>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                        <th>4th</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="bluetxt">76rs</td>
                                        <td>27</td>
                                        <td>39</td>
                                        <td>26</td>
                                        <td>8</td>
                                        <td class="bluetxt">98</td>
                                    </tr>
                                    <tr>
                                        <td class="bluetxt">Pelicans</td>
                                        <td>27</td>
                                        <td>39</td>
                                        <td>26</td>
                                        <td>8</td>
                                        <td class="bluetxt">98</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="hot-live-content">
                        <div class="player-match">
                            <div class="player-match-one">
                                <img src={require('../assets/images/76ers.png')} alt="76rs" />
                                <span>76rs</span>
                            </div>
                            <div class="player-match-score">
                                <span class="score">98 - 95</span>
                                <span class="status">2nd Quarter</span>
                                <span class="last-min">03:32</span>
                            </div>
                            <div class="player-match-two">
                                <img src={require('../assets/images/Pelicans.png')} alt="Pelicans" />
                                <span>Pelicans</span>
                            </div>
                        </div>
                        
                        <div class="player-match-standing">
                            <table>
                                <thead>
                                    <tr>
                                        <th width="100px">Team</th>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                        <th>4th</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="bluetxt">76rs</td>
                                        <td>27</td>
                                        <td>39</td>
                                        <td>26</td>
                                        <td>8</td>
                                        <td class="bluetxt">98</td>
                                    </tr>
                                    <tr>
                                        <td class="bluetxt">Pelicans</td>
                                        <td>27</td>
                                        <td>39</td>
                                        <td>26</td>
                                        <td>8</td>
                                        <td class="bluetxt">98</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="hot-live-content">
                        <div class="player-match">
                            <div class="player-match-one">
                                <img src={require('../assets/images/Hornets.png')} alt="Hornets" />
                                <span>Hornets</span>
                            </div>
                            <div class="player-match-score">
                                <span class="score">98 - 95</span>
                                <span class="status">3rd Quarter</span>
                                <span class="last-min">03:32</span>
                            </div>
                            <div class="player-match-two">
                                <img src={require('../assets/images/Lakers.png')} alt="Lakers" />
                                <span>Lakers</span>
                            </div>
                        </div>
                        
                        <div class="player-match-standing">
                            <table>
                                <thead>
                                    <tr>
                                        <th width="100px">Team</th>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                        <th>4th</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="bluetxt">76rs</td>
                                        <td>27</td>
                                        <td>39</td>
                                        <td>26</td>
                                        <td>8</td>
                                        <td class="bluetxt">98</td>
                                    </tr>
                                    <tr>
                                        <td class="bluetxt">Pelicans</td>
                                        <td>27</td>
                                        <td>39</td>
                                        <td>26</td>
                                        <td>8</td>
                                        <td class="bluetxt">98</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            
        </div>
        </>
	);
};

export default SportsContent;