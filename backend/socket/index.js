const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const Message = require('../models/Message.js')

const app = express()

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
});
  

io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    socket.on('joinRoom', ({ userId }) => {
        socket.join(userId);
        console.log(`User ${userId} joined room`);
    });


    socket.on('sendMessage', async ({ sender, receiver, content }) => {
        const message = new Message({ sender, receiver, content });
        await message.save();

        io.to(sender).emit('message', message);
        io.to(receiver).emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('WebSocket disconnected');
    });

});

module.exports = {
    app,
    server
}