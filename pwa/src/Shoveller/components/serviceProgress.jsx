import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Chat from '../../sharedComp/chat';
import { jobCompleted } from '../../apiManager/shared/jobCompleted';
import QueryModal from '../../sharedComp/Query';
import Loader from '../../sharedComp/loader'
import { postQuery } from '../../apiManager/shared/Query.js';
import DetailsModal from './detailsModal.jsx'
import { getJobDetails } from '../../apiManager/shoveller/jobDetails.js';


export default function ServiceProgress() {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [jobDetails, setJobDetails] = useState({});

    const [isOpenQuery, setIsOpenQuery] = useState(false)
    const [isOpenDetails, setIsOpenDetails] = useState(false)


    const location = useLocation();
    const { jobId, houseOwnerId, jobStatus, houseOwnerAction, name, payoutStatus, shovellerAction } = location.state || {};
    console.log(name)
    const [isChatOpen, setIsChatOpen] = useState(false);

    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);

    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);
    const providerId = userInfo.user.id;
    const userId = userInfo.user.id;  // This is the same as providerId, so it should be removed

    const handleServiceFinished = async () => {
        setLoading(true);
        try {
            const res = await jobCompleted(jobId, providerId, "shoveller");

            console.log(res)
            // setLoading(false);
            navigate('/shoveller/serviceFinishedByShoveller',{
                state:{
                    Id: jobId,
                    paymentOffering: res.job.paymentInfo.amount/100
                }
            });
        } catch (error) {
            console.log(error)
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }

    };


    const closeDetails = () => { 
        setIsOpenDetails(false)
    }

    const openDetails = async () => {
        try {
            setLoading(true)
            const res = await getJobDetails(jobId, userId)
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
    
    const closeQuery = () => {
        setIsOpenQuery(false)
        setJobDetails({})
    }

   

    const saveQuery = async (query) => {
        setLoading(true)
        try {
            const res = await postQuery(jobId, userId, query.title, query.description)
            if (res && res.error) {
                setError(res.error)
                return;
            }
            alert('Your query has been sent successfully')
        } catch (error) {
            setError(error.error || "server error")
        } finally {
            setLoading(false);
        }
    }

    const openQuery = () => {
        setIsOpenQuery(true)
    }

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    if (error) return <div>{error}</div>
    if (loading) return <div> <Loader /> </div>

    return (
        <div className="flex flex-col pb-10 mx-auto w-full bg-white max-w-[480px]">

            {/* Header Section */}
            <div className="flex flex-col self-end mt-2 mr-20 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                {houseOwnerAction==='accepted' && (
                     <img
                     loading="lazy"
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a0ed20fd1b28fde60598f885257a0572863e17e0c242de30f15e6a59ed85d3b?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                     className="object-contain self-end w-6 aspect-square cursor-pointer"
                     onClick={openQuery}
                 />
                )}
            </div>
                <div className="flex flex-col self-end mt-2 items-center max-w-full mx-auto text-4xl font-medium text-black capitalize whitespace-nowrap w-[350px]">
                    {houseOwnerAction === "canceled" ? "Request Cancelled" : "Service in Progress"}
                </div>
           

            {/* Query Modal */}
            {isOpenQuery && (
                <QueryModal
                    isOpen={openQuery}
                    onClose={closeQuery}
                    onSave={saveQuery}
                />
            )}

            {/* Details Modal */}
            {isOpenDetails && (
                <DetailsModal
                    isOpen={isOpenDetails}
                    onClose={closeDetails}
                    data={jobDetails}
                />
            )}

            {/* Conditional Rendering Based on houseOwnerAction */}
            {houseOwnerAction === "canceled" && (
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="text-2xl text-red-600 font-bold mb-6">
                        The service request has been cancelled by the homeowner.
                    </div>
                    <button
                        onClick={handleGoBack}
                        className="px-12 py-4 mt-2 text-xl font-medium tracking-wider text-white bg-black rounded-lg max-w-[350px]"
                    >
                        Go Back
                    </button>
                </div>
            )}

            {houseOwnerAction === "accepted" && shovellerAction !== 'completed' && (
                <>
                    <div className="flex relative flex-col px-14 pt-40 pb-6 mt-7 w-full text-center rounded-xl aspect-[0.804]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5075776b8b91f4b18fe6fda34b0eaef0f2d8021a6f6b773fd582bbcec3b8fe?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                            className="object-cover absolute inset-0 size-full"
                        />
                        {/* <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w"
                            className="object-contain self-center w-36 max-w-full rounded-none aspect-[2.77]"
                        /> */}
                        <div className="flex relative flex-col mt-12 w-full">
                            <div className="w-full text-2xl capitalize text-zinc-800">
                                You Are Fulfilling <br />
                                <span className="font-bold">{name}</span> Service Request
                            </div>
                            <div
                                onClick={openDetails}
                                className="self-center cursor-pointer py-3.5 px-12 mt-8 max-w-full text-xl font-medium tracking-wider text-black whitespace-nowrap bg-white rounded-lg">
                                Details
                            </div>
                        </div>
                    </div>
                    <button onClick={openChat} className="gap-9 self-center px-12 py-4 mt-9 w-full text-xl font-medium tracking-wider text-black bg-[#EEEEEE] rounded-lg max-w-[350px]">
                        Chat With Client
                    </button>
                    <button onClick={handleServiceFinished} className="gap-9 self-center px-12 py-4 mt-2 w-full text-xl font-medium tracking-wider text-white bg-black rounded-lg max-w-[350px]">
                        Service Finished
                    </button>
                    {/* chat modal */}
                    {isChatOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
                            <div className="bg-white rounded-lg p-6 w-96 relative">
                                {/* <button
                            onClick={closeChat}
                            className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
                        >
                            &times;
                        </button> */}


                                <Chat
                                    jobId={jobId}
                                    userId={userId}
                                    clientId={houseOwnerId}
                                    providerId={providerId}
                                    name={name}
                                    closeChat={closeChat}
                                />
                            </div>
                        </div>
                    )}

                </>
            )}

            {houseOwnerAction === "pending" && (
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="text-2xl text-yellow-500 font-bold mb-6">
                        The service request is pending approval.
                    </div>
                </div>
            )}


            {payoutStatus === 'failed' && (
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="text-2xl text-yellow-500 font-bold mb-6">
                        Your payment transfer has failed. You can submit a query to us, and we will review your account.
                        Our team will reach out to you shortly.
                    </div>
                </div>
            )}


            {houseOwnerAction === 'accepted' && shovellerAction === 'completed' && (
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="text-2xl text-yellow-500 font-bold mb-6">
                        The house owner has not yet accepted your completed job. Please wait for one business day,
                        after which the job will be automatically accepted.
                    </div>
                </div>
            )}


        </div>
    );
}
