import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShovellersWhoAppliedOnYourJob } from '../../apiManager/houseOwner/matchShvoller';

export default function AppliedShovellers() {
  const { userInfo } = useSelector((state) => state.auth);
  const jobId = userInfo.user.jobId;
  console.log(jobId)

  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newApplicantsCount, setNewApplicantsCount] = useState(0); // Track new applicants


  const navigate = useNavigate(); // Use useNavigate here

  // Function to fetch applicants
  const getApplicants = async () => {
    try {
      setLoading(true);
      const res = await getShovellersWhoAppliedOnYourJob(jobId);
      // console.log(typeof res)
      // Use filter to exclude applicants with houseOwnerAction === 'pending'
      let filteredApplicants = [];
      if(res){

        filteredApplicants = res.filter((applicant) => {
          return applicant.houseOwnerAction === 'pending'; // Only keep non-pending applicants
        });
      }

      setApplicants(filteredApplicants);  // Set the applicants state with the filtered data
      console.log(filteredApplicants);
      setNewApplicantsCount(filteredApplicants.length); // Set new applicants count based on filtered data

    } catch (error) {
      setError(error.message || 'An error occurred while fetching applicants');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if( userInfo.user.shovellerId){
      navigate('/houseowner/serviceProgress')
    }
    getApplicants(); // Fetch applicants on component mount
  }, [jobId]);

  const handleRefresh = () => {
    getApplicants(); // Fetch new applicants when refresh button is clicked
  };

  const handleMatchingShoveller = () => {
    navigate('/houseowner/isMatchShoveller');
  }

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Applicants for Your Job</h2>
      <p className="text-center text-gray-700 mb-2">
        You have posted a job, and here are the applicants interested in it.
      </p>
      {newApplicantsCount > 0 && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 border border-green-300 rounded">
          {newApplicantsCount} new applicant(s) received!
        </div>
      )}
      <button
        onClick={handleRefresh}
        className="mb-4 px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-black-400 transition duration-200"
      >
        Refresh Applicants
      </button>
      <div className="mt-4">
        {applicants.length === 0 ? (
          <p className="text-center text-gray-500">No applicants yet. Please check back later.</p>
        ) : (
          <div className="flex flex-col space-y-4">
            {applicants.map((applicant) => {
              // Format the scheduled time
              const { hour, minute, period } = applicant.scheduledTime || {}; // Ensure scheduledTime is defined
              const formattedScheduledTime = `${hour}:${minute} ${period}`;

              return (
                <div
                  key={applicant._id}
                  onClick={() => navigate('/houseOwner/isMatchShoveller', {state: {shovelerId: applicant._id, applicantName:applicant.userName, formattedScheduledTime: formattedScheduledTime}})}
                  className="p-4 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  <h3 className="font-semibold">{applicant.userName}</h3>
                  <p className="text-gray-600">Available at: <span className="font-medium">{formattedScheduledTime}</span></p>
                </div>
              );
            })}
          </div>

        )}
      </div>
      <p className="text-center text-gray-500 mt-4">
        Once you review the applicants, you can accept and cancel the candiate.
      </p>
    </div>
  );
}
