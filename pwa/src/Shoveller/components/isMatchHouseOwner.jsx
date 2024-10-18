import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateJobStatus } from '../../apiManager/shoveller/matchJobApi'
import Loader from '../../sharedComp/loader';

import { useState } from "react";
// import Chat from '../../sharedComp/chat';

export default function IsMatchShoveller() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const { houseOwnerId, jobId, scheduledTime, name } = location.state || {};  // Extract values from state
  console.log(houseOwnerId, jobId, scheduledTime, name);



  // const clientId = houseOwnerId;
  // const providerId = "66d82ca10001748cce7ccb1b"

  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo.user.id;
  // const providerId = userId;
  // // const {jobId} = useParams();

  // const [isChatOpen, setIsChatOpen] = useState(false);

  // const openChat = () => setIsChatOpen(true);
  // const closeChat = () => setIsChatOpen(false);

  const navigate = useNavigate();
  // const handleChat = () => {
  //   navigate('/shoveller/serviceProgressShoveller');
  // }

  const handleCancel = () => {
    navigate('/shoveller/searchJobByList');
  }

  const handleAccept = async (decision) => {
    try {
      setLoading(true);
      console.log(jobId, userId);
      const res = await updateJobStatus(jobId, userId, decision);
      console.log(res);
      setLoading(false);
      //navigate to the search job by list  
      navigate('/shoveller/searchJobByList');
    } catch (error) {
      setError(error.message || "an error occured");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader />
  if (error) return <div>{error}</div>

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
            <span className="">You will fulfill</span>
            <br />
           {`${name} request`}<br />
            at <span>{`${scheduledTime.hour}:${scheduledTime.minute} ${scheduledTime.period}`}</span>

          </div>
          {/* Accept and Cancel buttons */}
          <div className="flex justify-around mt-20">
            <button
              onClick={() => handleAccept(false)}
              className="py-3 px-8 text-xl font-medium text-black bg-white rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => handleAccept(true)}
              className="py-3 px-8 text-xl font-medium text-white bg-black rounded-lg"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
      <div className="gap-9 self-center px-12 py-4 mt-8 w-full text-xl font-medium tracking-wider text-black whitespace-nowrap bg-zinc-200 text-center rounded-lg max-w-[350px] w-[169px]">
        View Details
      </div>
      {/* <div
        onClick={isHouseOwnerAccepted ? openChat : null}  // Only open chat if not disabled
        className={`gap-9 self-center px-12 py-4 mt-5 w-full text-xl font-medium tracking-wider text-center rounded-lg max-w-[350px] 
          ${!isHouseOwnerAccepted ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-black text-white cursor-pointer"}`}
      >
        Chat With Provider
      </div>
      {isChatOpen && (
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
  )
};