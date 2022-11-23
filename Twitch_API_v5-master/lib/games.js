'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    top: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: limit, offset

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/games/top?${querystring.stringify(params)}`;

        request('GET', options, callback);
    }
};