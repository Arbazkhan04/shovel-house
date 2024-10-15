import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { setCredentials } from '../../slices/authSlice';
import { useDispatch } from 'react-redux';

export default function Transaction() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { Id,shovellerName, payment } = location.state || {};

  const [jobId, setJobId] = useState(Id || "");
  const [name, setName] = useState( shovellerName || "");
  const [paymentTransferred, setPaymentTransferred] = useState(payment || "");
  
  const handleContinue = () => {
    // get data from localstorage and remove the job status and only keep houseonwer and role 
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userData);
    dispatch(setCredentials({ 
      user:{
        id: userData.user.id,
        role: userData.user.role,
      },
      token: userData.token
    }))
    navigate('/houseowner/jobPostProgress'); // Navigate to the accepted job page
  };


  return (
    <div className="flex overflow-hidden flex-col pb-60 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col self-end mt-6 mr-6 max-w-full text-3xl font-medium text-center text-black capitalize whitespace-nowrap w-[252px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b43acc558e919fa473cbcf367b1c477c8b3e999f6752c6162c0bae03bc699b9?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain self-end w-6 aspect-square"
        />
        
      </div>
      <div className="self-center flex items-center justify-center mt-10 max-w-full text-4xl font-medium text-black capitalize whitespace-nowrap w-[254px]">
        Transaction
      </div>
      <div className="flex flex-col items-center self-center mt-5 w-full max-w-[350px]">
        <div className="flex flex-col w-full leading-7 rounded-none">
          <div className="flex flex-col justify-center px-3.5 py-5 rounded-lg bg-zinc-100">
            <div className="flex flex-col w-full">
              <div className="text-xs text-stone-500">Invoice #{jobId}</div>
              <div className="flex gap-10 justify-between items-center mt-3 w-full text-xl capitalize text-zinc-800">
                <div className="my-auto w-[232px]">
                  <span className="">${paymentTransferred} </span>has been <br />
                  transferred to <span className="">{name}</span>
                  <br />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cf894460911c2c2b9b297f08010ec0bd5e037886d3b398e3291d05b502c085?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 max-w-full text-2xl font-medium leading-7 text-center text-stone-500 w-[248px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75d6b58e5a0015916233b1aab892a2109488a436e510b58a97ae48df8e50bc69?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="object-contain aspect-square w-[72px]"
          />
          <div className="mt-6">Thank you for choosing Shovelhouse!</div>
        </div>
      </div>
      <div onClick={handleContinue} className="gap-9 self-center cursor-pointer px-12 py-4 mt-8 w-full text-xl font-medium tracking-wider text-center text-white bg-black rounded-lg max-w-[350px]">
                Continue
            </div>
    </div>
  );
}