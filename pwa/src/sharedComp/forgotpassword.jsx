
import { useState } from "react";
const ForgotPassword = ({ isOpen, onClose, onSave }) => {
    const [email, setEmail] = useState("");
  
    if (!isOpen) return null;

    const handleSave = () => {
        onSave(email);
        onClose();
      };
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
        {/* Modal container */}
        <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Enter Your Email</h2>
  
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <div className="flex justify-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };


  export default ForgotPassword;
  