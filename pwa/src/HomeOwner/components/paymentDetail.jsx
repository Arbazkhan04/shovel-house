import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentDetail() {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [formattedAmount, setFormattedAmount] = useState('');

  const handleNext = () => {
    navigate('/houseowner/reviewDetail');
  };

  const handleBack = () => {
    // Reset the selected payment method when navigating back
    setSelectedPaymentMethod('');
    navigate('/houseowner/timeDuration');
  };

  const handlePaymentMethodSelect = (method) => {
    // Set the selected payment method, ensuring only one can be selected at a time
    setSelectedPaymentMethod(method);
  };

  const handleAmountChange = (e) => {
    let inputValue = e.target.value;
  
    // Remove the dollar sign if present
    if (inputValue[0] === "$") { inputValue = inputValue.slice(1); }
  
    // Allow only numbers and the decimal point
    if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
      setAmount("$" + inputValue);
    }
  };

  const handleBlur = () => {
    // Remove the dollar sign before converting to a number
    const numericValue = parseFloat(amount.replace('$', ''));
    if (!isNaN(numericValue)) {
      const formattedValue = numericValue.toFixed(2);
      setAmount("$" + formattedValue);
    } else {
      setAmount(""); // Handle invalid input, e.g., clear it
    }
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      {/* Progress Indicators */}
      <div className="flex gap-2 items-center px-5 mt-7">
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
        <div className="self-stretch py-6 mt-3 w-full text-3xl tracking-tight leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 flex items-center justify-center">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            onBlur={handleBlur} // Format on blur (when the input loses focus)
            placeholder="$50.00"
            maxLength={5}
            className="w-full text-center max-w-[150px] text-3xl bg-transparent border-none outline-none"
          />
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
              className={`flex gap-10 justify-between items-center p-4 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${selectedPaymentMethod === 'Credit /Debit' ? 'bg-black text-white' : ''
                }`}
              onClick={() => handlePaymentMethodSelect('Credit /Debit')}
            >
              <div className="flex gap-2.5 items-center self-stretch my-auto">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit /Debit"
                  checked={selectedPaymentMethod === 'Credit /Debit'}
                  onChange={() => handlePaymentMethodSelect('Credit /Debit')}
                  className="mr-2"
                />
                <div className="self-stretch my-auto">Credit /Debit</div>
              </div>
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
              className={`flex gap-10 justify-between items-center p-4 mt-2 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${selectedPaymentMethod === 'Paypal' ? 'bg-black text-white' : ''
                }`}
              onClick={() => handlePaymentMethodSelect('Paypal')}
            >
              <div className="flex gap-3 items-center self-stretch my-auto">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Paypal"
                  checked={selectedPaymentMethod === 'Paypal'}
                  onChange={() => handlePaymentMethodSelect('Paypal')}
                  className="mr-2"
                />
                <div className="self-stretch my-auto">Paypal</div>
              </div>
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
              className={`flex gap-10 justify-between items-center p-4 mt-2 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${selectedPaymentMethod === 'Master Card' ? 'bg-black text-white' : ''
                }`}
              onClick={() => handlePaymentMethodSelect('Master Card')}
            >
              <div className="flex gap-3 items-center self-stretch my-auto">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Master Card"
                  checked={selectedPaymentMethod === 'Master Card'}
                  onChange={() => handlePaymentMethodSelect('Master Card')}
                  className="mr-2"
                />
                <div className="self-stretch my-auto">Master Card</div>
              </div>
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
              className={`flex gap-10 justify-between items-center p-4 mt-2 w-full text-xl leading-none text-center rounded-lg bg-zinc-100 text-zinc-800 cursor-pointer ${selectedPaymentMethod === 'Apple Pay' ? 'bg-black text-white' : ''
                }`}
              onClick={() => handlePaymentMethodSelect('Apple Pay')}
            >
              <div className="flex gap-2.5 items-center self-stretch my-auto">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Apple Pay"
                  checked={selectedPaymentMethod === 'Apple Pay'}
                  onChange={() => handlePaymentMethodSelect('Apple Pay')}
                  className="mr-2"
                />
                <div className="self-stretch my-auto">Apple Pay</div>
              </div>
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
                      type="email"
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

      <div className="flex gap-3 items-start self-center mt-28 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
        <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
          Back
        </div>
        <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
          Next
        </div>
      </div>

    </div>
  );
}
