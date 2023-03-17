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
        // 'params': {
        //     'search':'parameter',
        // },
    })
}