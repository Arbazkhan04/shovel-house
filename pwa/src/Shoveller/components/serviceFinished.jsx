import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNavigte } from "react-router-dom";
export default function ServiceFinished() {
  const location = useLocation();
  const { Id, paymentOffering } = location.state || {};

  // Calculate the remaining amount after deducting 20%
  const [jobId, setJobId] = useState(Id || "");
  const [payment, setPayment] = useState(paymentOffering || "");
  const remainingPayment = payment ? payment * 0.8 : 0; // 80% of the original payment
  const navigate = useNavigate();



  const handlerBackToJobList = () => {
    navigate('/shoveller/searchJobByList')
  }
  return (
    <div className="flex overflow-hidden flex-col pb-60 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col self-end mt-6 mr-20 max-w-full text-3xl font-medium text-center text-black capitalize whitespace-nowrap w-[252px]">
        <div className="self-start mt-14">Service Finished</div>
      </div>
      <div className="flex flex-col items-center self-center mt-5 w-full max-w-[350px]">
        <div className="flex flex-col w-full leading-7 rounded-none">
          <div className="flex flex-col justify-center px-3.5 py-5 rounded-lg bg-zinc-100">
            <div className="flex flex-col w-full">
              <div className="text-xs text-stone-500">Invoice #{jobId}</div>
              <div className="flex gap-10 justify-between items-center mt-3 w-full text-xl capitalize text-zinc-800">
                <div className="my-auto w-[232px]">
                  <span className="">${remainingPayment.toFixed(2)} </span>will be transferred to you within the next 24-hour <br />

                  <br />
                  <span className="text-sm">
                    Note: You have marked the service as finished. We are waiting for the house owner to confirm the completion of the job. If the house owner does not take any action within a reasonable time, we will automatically mark the job as complete, and the payment will be transferred to you.
                  </span>
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
        <div onClick={handlerBackToJobList} className="gap-9 self-center cursor-pointer px-12 py-4 mt-8 w-full text-xl font-medium tracking-wider text-center text-white bg-black rounded-lg max-w-[350px]">
          Continue
        </div>
      </div>
    </div>
  );
}
