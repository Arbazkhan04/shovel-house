import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Chat from '../../sharedComp/chat';
import serviceProgress from './serviceProgress';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { updateJobStatus } from '../../apiManager/houseOwner/matchShvoller';
import { useLocation } from "react-router-dom";
import DetailsModal from './detailsModal.jsx'
import { getJobDetails } from '../../apiManager/houseOwner/jobDetails.js';
import Loader from '../../sharedComp/loader';

export default function IsMatchShoveller() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [isOpenDetails, setIsOpenDetails] = useState(false)
  const [jobDetails, setJobDetails] = useState({});

  const location = useLocation();
  const { shovelerId,applicantName,formattedScheduledTime } = location.state || {};
  const { userInfo } = useSelector((state) => state.auth);

  const jobId = userInfo.user.jobId;
  // const userId = userInfo.user.id;
  // const clientId = userInfo.user.id;
  // const providerId = userInfo.user.shovellerId || null //when user click on accept update the redux and get the provider id that's it


  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [isChatOpen, setIsChatOpen] = useState(false);

  // const openChat = () => setIsChatOpen(true);
  // const closeChat = () => setIsChatOpen(false);


  const handleDecision = async (decision) => {
    setLoading(true); // Set loading to true immediately
    try {
      const res = await updateJobStatus(jobId, shovelerId, decision);
      console.log(res);
  
      // If the decision is to accept, set credentials and navigate to service progress
      if (decision) {
        dispatch(setCredentials(res));
        navigate('/HouseOwner/serviceProgress');
      } else {
        // If the decision is to reject, navigate to the list of shovellers applied
        navigate('/houseOwner/listOfShovellerApplied');
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // Ensure loading is set to false in the finally block
    }
  };

  const closeDetails = () => { 
    setIsOpenDetails(false)
}

  

  const openDetails = async () => {
    try {
        setLoading(true)
        const res = await getJobDetails(jobId, shovelerId)
        if (res && res.error) {
            setError(res.error)
            setLoading(false)
            return;
        }
        setJobDetails(res)
        setIsOpenDetails(true)
    } catch (error) {
        setError(error.error || "server error")
    }
    finally {
        setLoading(false)
    }
}


  
  const handleChat = () => {
    navigate('/HouseOwner/serviceProgress');
  }

  if (loading) return <div> <Loader /> </div>

  if(error) return <p>{error.message}</p>
  return (
    <div className="flex overflow-hidden flex-col pb-10 mx-auto w-full bg-white max-w-[480px]">
      <div className="self-center flex items-center justify-center mt-10 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
        Matched!
      </div>

      <div className="flex relative flex-col px-14 pt-40 pb-6 mt-7 w-full text-center rounded-xl aspect-[0.804]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5075776b8b91f4b18fe6fda34b0eaef0f2d8021a6f6b773fd582bbcec3b8fe?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-cover absolute inset-0 size-full"
        />
        
        <div className="flex relative flex-col mt-8 w-full">
          <div className="w-full text-2xl capitalize text-zinc-800">
            <span className="">{applicantName}</span>
            <br />
            will be coming to fulfill your service request <br />
            at <span className="">{formattedScheduledTime}</span>
          </div>
          {/* Accept and Cancel buttons */}
          <div className="flex justify-around mt-20">
            <button
              onClick={() => handleDecision(false)}
              className="py-3 px-8 text-xl font-medium text-black bg-white rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDecision(true)}
              className="py-3 px-8 text-xl font-medium text-white bg-black rounded-lg"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={openDetails}
        className="gap-9 cursor-pointer self-center px-12 py-4 mt-8 w-full text-xl font-medium tracking-wider text-black whitespace-nowrap bg-zinc-200 text-center rounded-lg max-w-[350px] w-[169px]">
        View Details
      </div>


      {/* Details Modal */}
      {isOpenDetails && (
                <DetailsModal
                    isOpen={isOpenDetails}
                    onClose={closeDetails}
                    data={jobDetails}
                />
      )}
      

      {/* Chat with provider button */}
      {/* <div
        onClick={providerId ? openChat : null} // Only open chat if providerId is not null
        className={`gap-9 self-center px-12 py-4 mt-5 w-full text-xl font-medium tracking-wider text-center rounded-lg max-w-[350px] ${providerId ? 'text-white bg-black cursor-pointer' : 'text-gray-400 bg-gray-200 cursor-not-allowed'
          }`}
      >
        Chat With Provider
      </div> */}
      {/* chat modal */}
      {/* {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-6 w-96 relative">
            <button
              onClick={closeChat}
              className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>

            
            <Chat
              jobId={jobId}
              userId={userId}
              clientId={clientId}
              providerId={providerId}
            />
          </div>
        </div>
      )} */}

    </div>
  );
}