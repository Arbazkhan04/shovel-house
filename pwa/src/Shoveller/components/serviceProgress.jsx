import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Chat from '../../sharedComp/chat';

export default function ServiceProgress() {
    const location = useLocation();
    const { jobId, houseOwnerId, jobStatus, houseOwnerAction } = location.state || {};

    const [isChatOpen, setIsChatOpen] = useState(false);

    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);

    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);
    const providerId = userInfo.user.id;
    const userId = userInfo.user.id;  // This is the same as providerId, so it should be removed

    const handleServiceFinished = () => {
        navigate('/shoveller/serviceFinishedByShoveller');
    };

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="flex flex-col pb-10 mx-auto w-full bg-white max-w-[480px]">

            {/* Header Section */}
            <div className="flex flex-col self-end mt-2 mr-20 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a0ed20fd1b28fde60598f885257a0572863e17e0c242de30f15e6a59ed85d3b?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain self-end w-6 aspect-square"
                />
                <div className="self-start mt-5">
                    {houseOwnerAction === "canceled" ? "Request Cancelled" : "Service in Progress"}
                </div>
            </div>

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

            {houseOwnerAction === "accepted" && (
                <>
                    <div className="flex relative flex-col px-14 pt-40 pb-6 mt-7 w-full text-center rounded-xl aspect-[0.804]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5075776b8b91f4b18fe6fda34b0eaef0f2d8021a6f6b773fd582bbcec3b8fe?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w"
                            className="object-contain self-center w-36 max-w-full rounded-none aspect-[2.77]"
                        />
                        <div className="flex relative flex-col mt-12 w-full">
                            <div className="w-full text-2xl capitalize text-zinc-800">
                                You Are Fulfilling <br />
                                <span className="font-bold">JohnAndres's</span> Service Request
                            </div>
                            <div className="self-center py-3.5 px-12 mt-8 max-w-full text-xl font-medium tracking-wider text-black whitespace-nowrap bg-white rounded-lg">
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
                        <button
                            onClick={closeChat}
                            className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
                        >
                            &times;
                        </button>


                        <Chat
                            jobId={jobId}
                            userId={userId}
                            clientId={houseOwnerId}
                            providerId={providerId}
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
        </div>
    );
}
