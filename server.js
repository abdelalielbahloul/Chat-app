const http = require('http');
const app = require('./app');;
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = require('socket.io')(server);

connections = [];
io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log(`You have %s sockets connected`, connections.length);
    
    socket.on('disconnect', () => {
        connections.slice(connections.indexOf(socket), 1);
        console.log(`You have %s socket disconnected`, connections.length);
        
    });
    socket.on('send message', (data) => {        
        io.sockets.emit('new message', { msg: data });
    })
});

    

server.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
    
})