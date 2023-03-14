//import React, { useEffect, useState } from "react";
import React from 'react';
//import axios from 'axios';

//const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'http://localhost/oklivescore/admin/',
//   headers: {
//     'Content-Type': 'application/json',
//     'host': 'api.thesports.com',
//     'X-Forwarded-For': '103.104.101.41',
//   }
// };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

// const HookApi = () => {
//     return (
//         <h1>API Connect</h1>
//     );
// };

// export default HookApi;

 //fetch("https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4")

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://oklive.okbetscore.ph/admin/index.php/okbet-data/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }

  render() {
    return <h1>{}</h1>;
  }
}
export default myComponent;