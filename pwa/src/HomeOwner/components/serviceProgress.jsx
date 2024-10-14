import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Chat from '../../sharedComp/chat';
import { cancelJob, getShovellerJobStatus } from '../../apiManager/houseOwner/matchShvoller';
import { jobCompleted } from '../../apiManager/shared/jobCompleted';
import { getShovellerJobStatusAndShovellerName } from "../../apiManager/shoveller/shovellerInfo";
import Loader from '../../sharedComp/loader'
import  ConfirmationModal from "../../sharedComp/customModal";


export default function ServiceProgress() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [shovellerName, setShovellerName] = useState('');
    const [shovellerAction, setShovellerAction] = useState('');
    const [isRequesting, setIsRequesting] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false); // Control the modal visibility

    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);

    const [isChatOpen, setIsChatOpen] = useState(false);

    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);

    const jobId = userInfo.user.jobId;
    const userId = userInfo.user.houseOwnerId;
    const clientId = userInfo.user.houseOwnerId;
    const providerId = userInfo.user.shovellerId || null;
    const paymentOffering = userInfo.user.paymentOffering / 100;

    useEffect(() => {
        if (!providerId || !jobId) return; // Avoid running the effect if userId is not defined
        setLoading(true);
        (async () => {
            try {
                const res = await getShovellerJobStatusAndShovellerName(jobId, providerId);
                console.log(res);
                setShovellerName(res.shovellerName);
                setShovellerAction(res.shovellerAction);
                setIsRequesting(res.isRequestedForCancel);
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [providerId, jobId]);

    // in this handler clear the localstorage 
    const handleServiceFinished = async () => {
        setLoading(true);
        try {
            const res = await jobCompleted(jobId, providerId, "houseOwner");
            console.log(res)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }

        navigate('/houseowner/serviceFinished', {
            state: {
                Id: jobId,
                paymentOffering: paymentOffering,
                name: shovellerName
            }
        });
    }

    const handleAccept = () => {
        navigate('/HouseOwner/serviceProgress'); // Navigate to the accepted job page
    };

    const handleCancel = async () => {
        setShowCancelModal(false); // Close the modal before performing the action
        setLoading(true);
        try {
            const res = await cancelJob(jobId, providerId);
            if (res.err) {
                setError(res.err);
            }
            else {
                //clear the localstorage and navigate to the tot he home page
            }
            console.log(res);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        // navigate('/HouseOwner/cancelledJob'); // Navigate to the cancelled job page
    };

    if (error) return <div>{error}</div>
    if (loading) return <div> <Loader /> </div>

    return (
        <div className="flex overflow-hidden flex-col pb-10 mx-auto w-full bg-white max-w-[480px]">
            <div className="flex flex-col self-end mt-2 mr-20 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a0ed20fd1b28fde60598f885257a0572863e17e0c242de30f15e6a59ed85d3b?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain self-end w-6 aspect-square"
                />
            </div>

            {shovellerAction === 'completed' ? (
                <div className="self-center flex items-center justify-center mt-10 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                    Service Completed!
                </div>
            ) : (
                <div className="self-center flex items-center justify-center mt-10 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                    Service In Progress!
                </div>
            )}

            <div className="flex relative flex-col px-14 pt-40 pb-6 mt-7 w-full text-center rounded-xl aspect-[0.804]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5075776b8b91f4b18fe6fda34b0eaef0f2d8021a6f6b773fd582bbcec3b8fe?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-cover absolute inset-0 size-full"
                />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain self-center w-36 max-w-full rounded-none aspect-[2.77]"
                />
                <div className="flex relative flex-col mt-8 w-full">
                    {shovellerAction === 'completed' ? (
                        <div className="w-full text-2xl capitalize text-zinc-800">
                            <span className="">{shovellerName}</span> marked job as Completed
                            <br /> Now it's your turn!
                        </div>
                    ) : (
                        <div className="w-full text-2xl capitalize text-zinc-800">
                            <span className="">{shovellerName}</span> is Fulfilling
                            <br /> Your Service Request
                        </div>
                    )}
                    <div className="flex justify-around mt-40">
                        {/* if the shovellerAction is completed and isRequesting is false it meamns
                        shoveller mark the job is completed and hide the cancel button */}
                        {isRequesting && shovellerAction === 'completed' && (
                            <button
                                onClick={() => setShowCancelModal(true)}
                                className="py-3 px-8 text-xl font-medium text-black bg-white rounded-lg"
                            >
                                Cancel the job
                            </button>
                        )}
                        {/* if the shovellerActions is completed and houseonwer did not reqyested */}
                        {!isRequesting && shovellerAction !== 'completed' && (
                            <button
                                onClick={() => setShowCancelModal(true)}
                                className="py-3 px-8 text-xl font-medium text-black bg-white rounded-lg"
                            >
                                Cancel the Job
                            </button>
                        )}
                        

                        {/* <button
                            onClick={handleAccept}
                            className="py-3 px-8 text-xl font-medium text-white bg-black rounded-lg"
                        >
                            Details
                        </button> */}
                    </div>
                </div>
            </div>

            <div
                onClick={shovellerAction !== 'completed' ? openChat : null}
                className={`gap-9 self-center px-12 py-4 mt-9 w-full text-xl font-medium tracking-wider text-black rounded-lg max-w-[350px] ${shovellerAction === 'completed' ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#EEEEEE]'
                    }`}
                disabled={shovellerAction === 'completed'}
            >
                Chat With Provider
            </div>

            <div
                onClick={shovellerAction === 'completed' ? handleServiceFinished : null}
                className={`gap-9 self-center cursor-pointer px-12 py-4 mt-2 w-full text-xl font-medium tracking-wider text-center text-white rounded-lg max-w-[350px] ${shovellerAction === 'completed' ? 'bg-black' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                disabled={shovellerAction !== 'completed'}
            >
                Service Finished
            </div>

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
                            clientId={clientId}
                            providerId={providerId}
                            name={shovellerName}
                            closeChat={closeChat}
                        />
                    </div>
                </div>
            )}

       {/* Use the reusable confirmation modal */}
       <ConfirmationModal
        showModal={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        title="Cancel Job"
        message="Are you sure you want to cancel this job? This action cannot be undone."
      />

        </div>
    );
}
