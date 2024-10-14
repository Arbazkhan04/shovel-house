import React from 'react';

export default function ConfirmationModal({ showModal, onClose, onConfirm, title, message }) {
  if (!showModal) return null; // Return nothing if modal is not supposed to show

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-md mx-4 md:mx-0">
        <h3 className="text-lg font-bold mb-4">{title || 'Confirmation'}</h3>
        <p className="mb-4">{message || 'Are you sure you want to proceed?'}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300"
          >
            No, Go Back
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            Yes, Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
