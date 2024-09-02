import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentDetail() {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleNext = () => {
    navigate('/houseowner/reviewDetail');
  };

  const handleBack = () => {
    // Reset the selected payment method when navigating back
    setSelectedPaymentMethod('');
    navigate('/houseowner/timeDuration');
  };

  const handlePaymentMethodSelect = (method) => {
    // Toggle the selected payment method
    setSelectedPaymentMethod((prevMethod) => (prevMethod === method ? '' : method));
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      {/* Progress Indicators */}
      <div className="flex gap-2 items-center px-5 mt-7">
        {/* Adjusted for clarity */}
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 rounded-md basis-0 bg-zinc-100 w-[65px]" />
      </div>

      {/* Payment Offering */}
      <div className="flex flex-col self-center mt-8 w-full max-w-[350px]">
        <div className="text-3xl font-medium tracking-wide text-black">
          Payment Offering
        </div>
        <div className="gap-4 self-stretch px-4 py-6 mt-3 w-full text-3xl tracking-tight leading-none text-center rounded-lg bg-zinc-100 text-zinc-800">
          $ 50.00
        </div>
      </div>

      <div className="flex mt-6 w-full bg-zinc-100 min-h-[2px]" />

      {/* Payment Method Selection */}
      <div className="flex flex-col self-center mt-10 w-full max-w-[350px]">
        <div className="flex flex-col w-full">
          <div className="text-3xl font-medium text-zinc-800">
            Payment Method
          </div>
          <div className="flex flex-col mt-5 w-full tracking-tight">
            {/* Credit / Debit Card */}
            <div
              className={`flex gap-10 justify-between items-center p-4 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${
                selectedPaymentMethod === 'Credit /Debit' ? 'bg-black text-white' : ''
              }`}
              onClick={() => handlePaymentMethodSelect('Credit /Debit')}
            >
              <div className="flex gap-2.5 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1df82230037aa25e5c67535a8e35d82ce99075218bf72306b95e4c15304eacf?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="Credit / Debit"
                />
                <div className="self-stretch my-auto">Credit /Debit</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a8fbc9183edeb50cc62e151aa667427dd6da5610c952d30c3e1dfae832fa2a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Select Credit / Debit"
              />
            </div>

            {/* Card Number Input for Credit / Debit */}
            {selectedPaymentMethod === 'Credit /Debit' && (
              <div className="flex flex-col mt-1 w-full rounded-none">
                <div className="flex flex-col justify-center p-6 rounded-lg bg-zinc-100">
                  <div className="flex flex-col w-full">
                    <div className="text-xl leading-none text-zinc-800">
                      Card Number
                    </div>
                    <input
                      type="text"
                      className="gap-2.5 self-stretch px-4 py-3.5 mt-4 w-full text-base leading-none text-center text-black bg-white rounded"
                      placeholder="Enter card number"
                      // Consider adding value and onChange handlers
                    />
                  </div>
                </div>
              </div>
            )}

            {/* PayPal */}
            <div
              className={`flex gap-10 justify-between items-center p-4 mt-2 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${
                selectedPaymentMethod === 'Paypal' ? 'bg-black text-white' : ''
              }`}
              onClick={() => handlePaymentMethodSelect('Paypal')}
            >
              <div className="flex gap-3 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5358b326d1b88f95234a99a9e24df257b2bb2bb13cc7c149be326e16d8f9c091?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="PayPal"
                />
                <div className="self-stretch my-auto">Paypal</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19f216f350651a976a1ab169a95080ad9c2c3da54c67239f9ba86304d694adc3?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Select PayPal"
              />
            </div>

            {/* Optional: Add PayPal additional inputs if required */}
            {selectedPaymentMethod === 'Paypal' && (
              <div className="flex flex-col mt-1 w-full rounded-none">
                <div className="flex flex-col justify-center p-6 rounded-lg bg-zinc-100">
                  <div className="flex flex-col w-full">
                    <div className="text-xl leading-none text-zinc-800">
                      PayPal Email
                    </div>
                    <input
                      type="email"
                      className="gap-2.5 self-stretch px-4 py-3.5 mt-4 w-full text-base leading-none text-center text-black bg-white rounded"
                      placeholder="Enter PayPal email"
                      // Consider adding value and onChange handlers
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Master Card */}
            <div
              className={`flex gap-10 justify-between items-center p-4 mt-2 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${
                selectedPaymentMethod === 'Master Card' ? 'bg-black text-white' : ''
              }`}
              onClick={() => handlePaymentMethodSelect('Master Card')}
            >
              <div className="flex gap-3 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eb9a8f3e60c16ae96be86086423ef5073449a68b44799b1d9d1c45f7b4563a0?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="Master Card"
                />
                <div className="self-stretch my-auto">Master Card</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2a3274436cc1d161e670d5f28b1a7547b2ee6c918173d7dad54d48075085673?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Select Master Card"
              />
            </div>

            {/* Card Number Input for Master Card */}
            {selectedPaymentMethod === 'Master Card' && (
              <div className="flex flex-col mt-1 w-full rounded-none">
                <div className="flex flex-col justify-center p-6 rounded-lg bg-zinc-100">
                  <div className="flex flex-col w-full">
                    <div className="text-xl leading-none text-zinc-800">
                      Card Number
                    </div>
                    <input
                      type="text"
                      className="gap-2.5 self-stretch px-4 py-3.5 mt-4 w-full text-base leading-none text-center text-black bg-white rounded"
                      placeholder="Enter card number"
                      // Consider adding value and onChange handlers
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Apple Pay */}
            <div
              className={`flex gap-10 justify-between items-center p-4 mt-2 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${
                selectedPaymentMethod === 'Apple Pay' ? 'bg-black text-white' : ''
              }`}
              onClick={() => handlePaymentMethodSelect('Apple Pay')}
            >
              <div className="flex gap-2.5 items-center self-stretch my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7a7081ba5f2b6c8bf7329253706b0bc6a36db3508a8e0ea9ce6a55643032103?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt="Apple Pay"
                />
                <div className="self-stretch my-auto">Apple Pay</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd931f5992163249032fb3c6704e5d18d5132cd38bb54997451f6080e0d9c5c?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Select Apple Pay"
              />
            </div>

            {/* Optional: Add Apple Pay additional inputs if required */}
            {selectedPaymentMethod === 'Apple Pay' && (
              <div className="flex flex-col mt-1 w-full rounded-none">
                <div className="flex flex-col justify-center p-6 rounded-lg bg-zinc-100">
                  <div className="flex flex-col w-full">
                    <div className="text-xl leading-none text-zinc-800">
                      Apple ID
                    </div>
                    <input
                      type="text"
                      className="gap-2.5 self-stretch px-4 py-3.5 mt-4 w-full text-base leading-none text-center text-black bg-white rounded"
                      placeholder="Enter Apple ID"
                      // Consider adding value and onChange handlers
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 items-start self-center mt-11 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
        <div
          onClick={handleBack}
          className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100 cursor-pointer"
        >
          Back
        </div>
        <div
          onClick={handleNext}
          className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg cursor-pointer"
        >
          Next
        </div>
      </div>
    </div>
  );
}
