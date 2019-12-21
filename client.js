const ioc = require('socket.io-client');

const socket = ioc.connect('http://localhost:3000');

socket.on('hi', res => {
    console.log(res);
    
})