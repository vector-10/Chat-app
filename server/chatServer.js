const express    = require('express');
const app        = express();
const cors       = require('cors')
const bodyParser = require('body-parser');
const http       = require('http').Server(app);


// middleware for body parsing and resource sharing
app.use(bodyParser.json());
app.use(cors());

// cors  options for restricted routes
const socketIO = require('socket.io')(http, {
    cors:{
        origin: 'http://localhost:3000'
    }
})

socketIO.on('connection', (socket) => {
    console.log(`User with ID ${socket.id} just connected`);

    //Listens and logs the message to the console
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data)
  });

  socket.om('typing', (data) => socket.broadcast.emit('typingResponse', data));

  //check for when a new user joins the server
  socket.on('newUser', (data) => {
    users.push(data);
    console.log(users);

    socketIO.emit('newUserResponse', users);
    })

  socket.on('disconnect', () => {
        console.log(`User with ID ${socket.id} disconnected`)

        users = users.filter((user) => user.socketID !== socket.id)

        socketIO.emit('newUserResponse', users)
        socket.disconnect();
    });
});

















const PORT = process.env.PORT || 4000

http.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})