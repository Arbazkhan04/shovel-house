import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShovellersWhoAppliedOnYourJob } from '../../apiManager/houseOwner/matchShvoller';
import Loader from "../../sharedComp/loader"
import ConfirmationModal from "../../sharedComp/customModal"
import { cancelJobIfNoShovellerApplied } from "../../apiManager/houseOwner/matchShvoller"

export default function AppliedShovellers() {
  const { userInfo } = useSelector((state) => state.auth);
  const jobId = userInfo.user.jobId;

  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newApplicantsCount, setNewApplicantsCount] = useState(0); // Track new applicants
  const [showCancelModal, setShowCancelModal] = useState(false); // Control the modal visibility

  const navigate = useNavigate(); // Use useNavigate here

  // Function to fetch applicants
  const getApplicants = async () => {
    try {
      setLoading(true);
      const res = await getShovellersWhoAppliedOnYourJob(jobId);
      let filteredApplicants = [];
      if (res) {
        filteredApplicants = res.filter((applicant) => applicant.houseOwnerAction === 'pending');
      }

      setApplicants(filteredApplicants);
      setNewApplicantsCount(filteredApplicants.length);
    } catch (error) {
      setError(error.message || 'An error occurred while fetching applicants');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo.user.shovellerId) {
      navigate('/houseowner/serviceProgress');
    }
    getApplicants(); // Fetch applicants on component mount
  }, [jobId]);

  const handleRefresh = () => {
    getApplicants(); // Fetch new applicants when refresh button is clicked
  };

  const handleCancelJob = async () => {
    setShowCancelModal(false); // Close the modal before performing the action
    setLoading(true);
    // Logic to cancel the job (you can add API call here)
    try {
     const res = await cancelJobIfNoShovellerApplied(jobId);
     if(res.err){
      setError(res.err || 'An error occurred while canceling the job');
     }
    }catch(error){
      setError(error || 'An error occurred while canceling the job');
    }finally{
      setLoading(false);
    }
   
  };

  if (loading) return <Loader />; // Replace with a spinner component
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Applicants for Your Job</h2>
      <p className="text-center text-gray-700 mb-4">
        Here are the applicants interested in your job.
      </p>
      {newApplicantsCount > 0 && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
          {newApplicantsCount} new applicant(s) received!
        </div>
      )}
      <button
        onClick={handleRefresh}
        className="mb-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black-400 transition duration-200"
      >
        Refresh Applicants
      </button>
      <div className="mt-4">
        {applicants.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No applicants yet. Please check back later.</p>
          </div>
        ) : (
          <div className="flex flex-col space-y-4">
            {applicants.map((applicant) => {
              const { hour, minute, period } = applicant.scheduledTime || {};
              const formattedScheduledTime = `${hour}:${minute} ${period}`;

              return (
                <div
                  key={applicant._id}
                  onClick={() => navigate('/houseOwner/isMatchShoveller', { state: { shovelerId: applicant._id, applicantName: applicant.userName, formattedScheduledTime: formattedScheduledTime } })}
                  className="p-4 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition-all cursor-pointer shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{applicant.userName}</h3>
                  <p className="text-gray-600">Available at: <span className="font-medium">{formattedScheduledTime}</span></p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <button
        onClick={() => setShowCancelModal(true)} // Open the confirmation modal
        className="mt-6 w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
      >
        Cancel Service
      </button>

      <p className="text-center text-gray-500 mt-4">
        If you do not receive the desired shoveller within the next 24 hours, you can cancel the job, and your payment will be refunded.
      </p>
      <p className="text-center text-gray-500 mt-2">
        Once you review the applicants, you can accept or cancel the candidate.
      </p>


       {/* Use the reusable confirmation modal */}
       <ConfirmationModal
        showModal={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancelJob}
        title="Cancel Job"
        message="Are you sure you want to cancel this job? This action cannot be undone."
      />

    </div>
  );
}
