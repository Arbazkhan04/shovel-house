import * as React from "react";

export default function ServiceProgress() {
    return (
        <div className="flex overflow-hidden flex-col pb-10 mx-auto w-full bg-white max-w-[480px]">

            <div className="flex flex-col self-end mt-2 mr-20 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a0ed20fd1b28fde60598f885257a0572863e17e0c242de30f15e6a59ed85d3b?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain self-end w-6 aspect-square"
                />
                <div className="self-start mt-5">Service in Progress</div>
            </div>
            <div className="flex relative flex-col px-14 pt-40 pb-6 mt-7 w-full text-center rounded-xl aspect-[0.804]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5075776b8b91f4b18fe6fda34b0eaef0f2d8021a6f6b773fd582bbcec3b8fe?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-cover absolute inset-0 size-full"
                />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61f218a5e71d24bc3dfa5060bb7615e62d7d7e1c87227b76dc176c67f059d25e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain self-center w-36 max-w-full rounded-none aspect-[2.77]"
                />
                <div className="flex relative flex-col mt-12 w-full">
                    <div className="w-full text-2xl capitalize text-zinc-800">
                        Your Are Fulfilling <br />
                        <span className="">JohnAndres's</span> Service <br /> Request
                    </div>
                    <div className="gap-9 self-center py-3.5 pr-12 pl-12 mt-8 max-w-full text-xl font-medium tracking-wider text-black whitespace-nowrap bg-white rounded-lg min-h-[52px] w-[169px]">
                        Details
                    </div>
                </div>
            </div>
            <div className="gap-9 self-center px-12 py-4 mt-9 w-full text-xl font-medium tracking-wider text-center text-black bg-[#EEEEEE] rounded-lg max-w-[350px]">
                Chat With Client
            </div>
            <div className="gap-9 self-center px-12 py-4 mt-2 w-full text-xl font-medium tracking-wider text-center text-white bg-black rounded-lg max-w-[350px]">
                Service Finished
            </div>
        </div>
    );
}