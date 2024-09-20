import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useShovellerSignupContext } from '../../context/shovllerSignupFormContext';


export default function ShovellerDetails({ nextStep }) {
    const navigate = useNavigate();
    const { formData, handleChange } = useShovellerSignupContext();
    // const [referralCode, setReferralCode] = useState("");

    const handleBack = () => {
        navigate("/signupQuestion");
    };


    return (
        <div className="flex overflow-hidden flex-col items-center pb-12 mx-auto w-full bg-white max-w-[480px]">
            <div className="mt-16 text-5xl font-medium text-center text-black capitalize w-[305px]">
                Earn with Shovel House
            </div>
            <div className="flex flex-col mt-16 w-full max-w-[354px]">
                <div className="flex flex-col w-full rounded-xl">
                    <div className="text-xl tracking-tight leading-6 text-zinc-800">
                        What neighborhood would you like to work in?{" "}
                    </div>
                    <div className="flex flex-col mt-6 w-full">
                        <div className="flex flex-col w-full tracking-tight text-zinc-800">
                            <div className="flex flex-col w-full">
                                <div className="text-xl font-medium leading-none">
                                    Enter your neighborhood{" "}
                                </div>
                                <input
                                    type="text"
                                    name="neighborhood"
                                    value={formData.neighborhood}
                                    onChange={handleChange}
                                    placeholder="e.g., Downtown, Brooklyn"
                                    className="flex gap-2 items-center px-4 py-6 mt-3 w-full text-base leading-none rounded-lg bg-zinc-100 border-none min-h-[56px]"
                                />
                            </div>
                        </div>
                        <div className="mt-4 text-xs text-stone-500">
                            (This is usually near your home address. It helps us find clients in your vicinity)
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col mt-12 w-full tracking-tight text-zinc-800">
                    <div className="flex flex-col w-full">
                        <div className="text-xl font-medium leading-none">
                            Referral code (optional)
                        </div> */}
                        {/* <input
                            type="text"
                            name="referralCode"
                            value={formData.referralCode}
                            onChange={handleInputChange}
                            placeholder="e.g., 13223"
                            className="flex gap-2 items-center px-4 py-6 mt-3 w-full text-base leading-none rounded-lg bg-zinc-100 border-none min-h-[56px]"
                        /> */}
                    {/* </div>
                </div> */}
            </div>
            <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px] cursor-pointer">
                <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
                    Back
                </div>
                <div onClick={nextStep} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
                    Next
                </div>
            </div>
        </div>
    );
}
