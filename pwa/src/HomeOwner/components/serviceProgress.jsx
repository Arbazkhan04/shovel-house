import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Chat from '../../sharedComp/chat';

export default function ServiceProgress() {
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);

    const [isChatOpen, setIsChatOpen] = useState(false);

    const openChat = () => setIsChatOpen(true);
    const closeChat = () => setIsChatOpen(false);

    const jobId = userInfo.user.jobId;
    const userId = userInfo.user.houseOwnerId;
    const clientId = userInfo.user.houseOwnerId;
    const providerId = userInfo.user.shovellerId || null;

    const handleServiceFinished = () => {
        navigate('/houseowner/serviceFinished');
    }

    const handleAccept = () => {
        navigate('/HouseOwner/serviceProgress'); // Navigate to the accepted job page
    };

    const handleCancel = () => {
        // navigate('/HouseOwner/cancelledJob'); // Navigate to the cancelled job page
    };

    return (
        <div className="flex overflow-hidden flex-col pb-10 mx-auto w-full bg-white max-w-[480px]">
            <div className="flex flex-col self-end mt-2 mr-20 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a0ed20fd1b28fde60598f885257a0572863e17e0c242de30f15e6a59ed85d3b?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain self-end w-6 aspect-square"
                />
            </div>

            <div className="self-center flex items-center justify-center mt-10 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                Service In Progress!
            </div>

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
                    <div className="w-full text-2xl capitalize text-zinc-800">
                        <span className="">Huzaifa</span> is Fulfilling
                        <br /> Your Service Request
                    </div>
                    <div className="flex justify-around mt-40">
                        <button
                            onClick={handleCancel}
                            className="py-3 px-8 text-xl font-medium text-black bg-white rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleAccept}
                            className="py-3 px-8 text-xl font-medium text-white bg-black rounded-lg"
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>

            <div
                onClick={openChat}
                className="gap-9 self-center px-12 py-4 mt-9 w-full text-xl font-medium tracking-wider text-black bg-[#EEEEEE] rounded-lg max-w-[350px]"
            >
                Chat With Provider
            </div>

            <div onClick={handleServiceFinished} className="gap-9 self-center cursor-pointer px-12 py-4 mt-2 w-full text-xl font-medium tracking-wider text-center text-white bg-black rounded-lg max-w-[350px]">
                Service Finished
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
            )}
        </div>
    );
}
