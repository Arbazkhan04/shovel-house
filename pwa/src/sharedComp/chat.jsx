import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { formatDistanceToNow } from 'date-fns'; // Optional for better date formatting

const socket = io('http://localhost:3001'); // Your backend URL

const Chat = ({ jobId, userId, clientId, providerId }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const messageEndRef = useRef(null); // Ref for scrolling to the bottom

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

  useEffect(() => {
    // Scroll to the bottom whenever chatMessages change
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    // Ensure clientId and providerId are sent along with the message
    const messageData = { jobId, senderId: userId, message, clientId, providerId };
    socket.emit('sendMessage', messageData);
    setMessage(''); // Clear input field after sending
  };

  return (
    <div className="flex flex-col h-full p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto mb-4 max-h-[400px]"> {/* Set max height here */}
        <div className="space-y-4">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.senderId === userId ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  msg.senderId === userId
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-gray-800'
                }`}
              >
                <strong className="block">{msg.senderId}</strong>
                <p>{msg.message}</p>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(msg.timestamp), { addSuffix: true })}
                </span>
              </div>
            </div>
          ))}
          {/* Scroll to bottom */}
          <div ref={messageEndRef} />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
          className="flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring black"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
