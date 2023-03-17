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
                <li className="sb-icons all-sports disabled">
                    All Sports <span className="counter-balloon">{responseData}</span> 
                </li>
                <li className="selected">
                    Basketball <span className="counter-balloon">{responseData}</span> 
                </li>
                <li className="sb-icons football disabled">
                    Football <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons tennis disabled">
                    Tennis <span className="counter-balloon">0</span> 
                </li>                                                
                <li className="sb-icons volleyball disabled">
                    Volleyball <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons rugby disabled">
                    Rugby <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons baseball disabled">
                    Baseball <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons icehockey disabled">
                    Ice Hockey <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons badminton disabled">
                    Badminton <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons mma disabled">
                    MMA <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons boxing disabled">
                    Boxing <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons cue disabled">
                    Cue ball <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons moto disabled">
                    Moto Sport <span className="counter-balloon">0</span> 
                </li>
                <li className="sb-icons nfl disabled">
                    NFL <span className="counter-balloon">0</span> 
                </li>                                                
            </ul>
        </div>
		</>
	);
};

export default SideBar;
