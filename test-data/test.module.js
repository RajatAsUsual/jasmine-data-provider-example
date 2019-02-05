'use strict';

var fs = require('graceful-fs');
var data = JSON.parse(fs.readFileSync('./test-data/mongo.json'));
    
module.exports = {
    users: {
        'Regular': { name: 'Andrew' },
        'Special Characters': { name: '$##!@#!@' },
        'Chinese': { name: '拉雅' }
    },
    aggregate: function () {
        return getUsers();
    }
}

function getUsers(){
    return data.users.data;
}