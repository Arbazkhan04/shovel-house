import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { format } from 'date-fns';

const socket = io('https://shovel-house-b93eaebaf538.herokuapp.com'); // Your backend URL

const Chat = ({ jobId, userId, clientId, providerId, name ,closeChat}) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [isVisible, setIsVisible] = useState(true); // Manage chat visibility
  const messageEndRef = useRef(null); // Ref for scrolling to the bottom
  const chatRef = useRef(null); // Ref for the chat component

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

  // Click outside to close the chat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        // setIsVisible(false);
        // closeChat() //close the chat
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    // Ensure clientId and providerId are sent along with the message
    const messageData = { jobId, senderId: userId, message, clientId, providerId };
    socket.emit('sendMessage', messageData);
    setMessage(''); // Clear input field after sending
  };

  const getDisplayName = (msg) => {
    return msg.senderId === userId ? 'Me' : name; // Display 'Me' for current user and the receiver's name for others
  };

  const getAvatarLabel = (msg) => {
    // Only show the first character of the receiver's name for received messages
    return msg.senderId !== userId ? name.charAt(0).toUpperCase() : ''; // Return empty string for sent messages
  };

  const handleClose = () => {
    setIsVisible(false);
    closeChat();
  }

  return (
    <>
      {isVisible && (
        <div ref={chatRef} className="flex flex-col h-full max-w-md w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between items-center p-2 border-b">
            <h2 className="text-lg font-semibold">Chat</h2>
            <button
              onClick={handleClose} // Close chat button
              className="text-red-500 hover:text-red-700"
            >
              X
            </button>
          </div>
          <div className="flex-1 overflow-y-auto mb-4 max-h-[400px] p-4">
            <div className="space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start ${msg.senderId === userId ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.senderId !== userId && (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                      <span className="text-white font-bold text-base">{getAvatarLabel(msg)}</span>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-800">
                      {getDisplayName(msg)}
                    </p>
                    <p className="text-base text-gray-800 bg-gray-100 p-2 rounded-lg">
                      {msg.message}
                    </p>
                    <span className={`text-xs text-gray-500 ${msg.senderId === userId ? 'text-right' : 'text-left'}`}>
                      {format(new Date(msg.timestamp), 'MMM dd, yyyy, h:mm a')}
                    </span>
                  </div>
                </div>
              ))}
              {/* Scroll to bottom */}
              <div ref={messageEndRef} />
            </div>
          </div>
          <div className="bg-gray-100 p-2 border-t border-gray-300 flex items-center space-x-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
              className="flex-1 px-2 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
