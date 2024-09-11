// shared/components/Chat.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Your backend URL

const Chat = ({ jobId, userId, clientId, providerId }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    if (!jobId) return;

    // Join the chat room for the specific job
    socket.emit('joinRoom', { jobId });

    // Listen for previous messages
    socket.on('previousMessages', (messages) => {
      setChatMessages(messages);
    });

    // Listen for new messages
    socket.on('newMessage', (messageData) => {
      setChatMessages((prevMessages) => [...prevMessages, messageData]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('previousMessages');
      socket.off('newMessage');
    };
  }, [jobId]);

  const sendMessage = () => {
    if (!message.trim()) return;

    // Ensure clientId and providerId are sent along with the message
    const messageData = { jobId, senderId: userId, message, clientId, providerId };
    socket.emit('sendMessage', messageData);
    setMessage(''); // Clear input field after sending
  };

  return (
    <div>
      <div>
        {chatMessages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.senderId}:</strong> {msg.message} <em>{new Date(msg.timestamp).toLocaleTimeString()}</em>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
