import React from 'react';
//import axios from 'axios';
import api from '../api/basketball';

const SportsContent = () => {
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
    })

    return (
        <>
            <h1>Results</h1>          
        </>
    )
}

export default SportsContent;
//<button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>