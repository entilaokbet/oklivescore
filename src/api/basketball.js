import React from 'react';
import axios from 'axios';

export default {
    getData: () =>
    axios({
        method: 'GET',
        url: 'https://oklive.okbetscore.ph/admin/index.php/basketball-total/',
        headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        'params': {
            'search':'parameter',
        },
    })
}

// const options = {
//     method: 'GET',
//     url: 'https://oklive.okbetscore.ph/admin/index.php/okbet-data/',
//     headers: {
//       'Access-Control-Allow-Origin' : '*',
//       'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     }
//   };
  
//   axios.request(options).then(function (response) {
//     //console.log(response.data);
//     const resp = response.data;
//     console.log(resp);
//     return <div>{JSON.stringify(resp)}</div>;
  
//   }).catch(function (error) {
//     console.error(error);
//   });