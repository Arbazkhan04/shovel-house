import React from 'react';

export default function DetailsModal({ isOpen, onClose, data }) {

  const calculateDistance = (lat1, lon1, lat2, lon2) => {

    console.log(lat1, lon1, lat2, lon2)

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance.toFixed(2); // Return the distance rounded to two decimal places
  };

  if (!isOpen) return null; // Return nothing if modal is not supposed to show

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-md mx-4 md:mx-0">
        <h3 className="text-lg font-bold mb-4">Details</h3>
        <p>{`Shoveler Distance: ${calculateDistance(data.job.location.coordinates[1], 
          data.job.location.coordinates[0], data.shoveler.latitude, data.shoveler.longitude
        )} km`}</p>
        <p>{`Average Rating: ${data.averageRating}`}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300"
          >
            Back
          </button>
          
        </div>
      </div>
    </div>
  );
}








