

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useJobPostProgressContext } from "../../context/jobPostProgressFrom";


export default function TimeDuration({nextStep, preStep}) {
  const { jobPostProgress, setScheduledTime,setServiceDuration, setPaymentOffering } = useJobPostProgressContext();

  // Time selection state
  const [selectedHour, setSelectedHour] = useState(jobPostProgress.scheduledTime.hour);
  const [selectedMinute, setSelectedMinute] = useState(jobPostProgress.scheduledTime.minute);
  const [selectedPeriod, setSelectedPeriod] = useState(jobPostProgress.scheduledTime.period);
  const [selectedDuration, setSelectedDuration] = useState(jobPostProgress.serviceDuration);

  const navigate = useNavigate();

  // Time selection state
  // const [selectedHour, setSelectedHour] = useState("06");
  // const [selectedMinute, setSelectedMinute] = useState("30");
  // const [selectedPeriod, setSelectedPeriod] = useState("AM");
  // const [selectedDuration, setSelectedDuration] = useState("");

  const [amount, setAmount] = useState(jobPostProgress.paymentOffering);
  const [formattedAmount, setFormattedAmount] = useState('');

  // Dropdown visibility state
  const [showHourDropdown, setShowHourDropdown] = useState(false);
  const [showMinuteDropdown, setShowMinuteDropdown] = useState(false);
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);

   // Dropdown references
   const hourRef = useRef(null);
   const minuteRef = useRef(null);
   const periodRef = useRef(null);

  const hoursOptions = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));
  const minutesOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));
  const periodOptions = ["AM", "PM"];


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


  const handleNext = () => {
    const numericAmount = amount.replace('$', ''); // Remove the dollar sign
  setScheduledTime(selectedHour, selectedMinute, selectedPeriod);
  setServiceDuration(selectedDuration); // Set duration in context
  setPaymentOffering(numericAmount); 
    nextStep();
  };

  const handleBack = () => {
   preStep();
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-2 items-center px-5 mt-7">
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        {/* <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 rounded-md basis-0 bg-zinc-100" /> */}
        <div className="flex flex-1 shrink self-stretch my-auto h-2 rounded-md basis-0 bg-zinc-100 w-[65px]" />
      </div>
      <div className="flex flex-col self-center mt-8 w-full max-w-[350px]">
        <div className="text-3xl font-medium tracking-wide text-black">
          Service Start Time
        </div>

        {/* Time Display with clock icon */}
        <div 
          className="flex gap-4 justify-center items-center px-4 py-6 mt-3 w-full text-3xl tracking-tight leading-none text-center rounded-lg bg-zinc-100 text-zinc-800"
          onClick={() => {
            setShowHourDropdown(false);
            setShowMinuteDropdown(false);
            setShowPeriodDropdown(false);
          }}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d6b55cdc2ef2c20ea693ef32f0223e6c124a54340b8e1bb9fab5abfdc67d1f5?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
            alt="Clock Icon"
          />
          
          {/* Time Display */}
          <div className="flex gap-1">
            {/* Hour */}
            <span
              ref={hourRef}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowHourDropdown(!showHourDropdown);
                setShowMinuteDropdown(false);
                setShowPeriodDropdown(false);
              }}
            >
              {selectedHour}
            </span>
            :
            {/* Minute */}
            <span
               ref={minuteRef}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowMinuteDropdown(!showMinuteDropdown);
                setShowHourDropdown(false);
                setShowPeriodDropdown(false);
              }}
            >
              {selectedMinute}
            </span>
            :
            {/* AM/PM */}
            <span
              ref={periodRef}
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowPeriodDropdown(!showPeriodDropdown);
                setShowHourDropdown(false);
                setShowMinuteDropdown(false);
              }}
            >
              {selectedPeriod}
            </span>
          </div>
        </div>

        {/* Dropdown for Hours */}
        {showHourDropdown && (
          <div
          className="absolute w-16 max-h-40 overflow-y-auto text-center bg-white border border-gray-200 rounded-lg shadow-md"
          style={{
            top: hourRef.current?.getBoundingClientRect().bottom + window.scrollY,
            left: hourRef.current?.getBoundingClientRect().left + window.scrollX
          }}
        >
            {hoursOptions.map((hour) => (
              <div
                key={hour}
                onClick={() => {
                  setSelectedHour(hour);
                  setShowHourDropdown(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
              >
                {hour}
              </div>
            ))}
          </div>
        )}

        {/* Dropdown for Minutes */}
        {showMinuteDropdown && (
          <div
          className="absolute w-16 max-h-40 overflow-y-auto text-center bg-white border border-gray-200 rounded-lg shadow-md"
          style={{
            top: minuteRef.current?.getBoundingClientRect().bottom + window.scrollY,
            left: minuteRef.current?.getBoundingClientRect().left + window.scrollX
          }}
        >
            {minutesOptions.map((minute) => (
              <div
                key={minute}
                onClick={() => {
                  setSelectedMinute(minute);
                  setShowMinuteDropdown(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
              >
                {minute}
              </div>
            ))}
          </div>
        )}

        {/* Dropdown for AM/PM */}
        {showPeriodDropdown && (
          <div
          className="absolute w-16 max-h-40 overflow-y-auto text-center bg-white border border-gray-200 rounded-lg shadow-md"
          style={{
            top: periodRef.current?.getBoundingClientRect().bottom + window.scrollY,
            left: periodRef.current?.getBoundingClientRect().left + window.scrollX
          }}
        >
            {periodOptions.map((period) => (
              <div
                key={period}
                onClick={() => {
                  setSelectedPeriod(period);
                  setShowPeriodDropdown(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-zinc-100"
              >
                {period}
              </div>
            ))}
          </div>
        )}
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


      <div className="flex mt-4 w-full bg-zinc-100 min-h-[2px]" />

      <div className="flex flex-col self-center mt-10 w-full max-w-[350px]">
        {/* Rest of your Service Duration content */}
        <div className="flex flex-col w-full text-zinc-800">
          <div className="text-3xl font-medium">Service Duration</div>
          <div className="flex flex-col mt-5 w-full text-xl tracking-tight leading-none text-center">
            {["Less than 30 min", "30-60 min", "60-90 min", "90-120 min", "More than 120 min"].map((duration, index) => (
              <div
                key={index}
                className={`flex gap-2.5 items-center p-4 mt-2 w-full rounded-lg cursor-pointer ${
                  selectedDuration === duration ? "bg-black text-white" : "bg-zinc-100"
                }`}
                onClick={() => setSelectedDuration(duration)}
              >
                <img
                  loading="lazy"
                  src={selectedDuration === duration
                    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/4330f6c81dbba60a247a44d8035f40c5c84775222b161fbaa4108d2fc318e88f?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    : "https://cdn.builder.io/api/v1/image/assets/TEMP/4421d3e18aeb69d9dbfb24d36307be4a50d30b73ff2ab029ed0a4a1bb013eb44?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  }
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt={duration}
                />
                <div className="self-stretch my-auto">{duration}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="gap-2.5 self-start px-2 mt-5 text-xs text-stone-500">
          Duration is an estimate and may vary.
        </div>
      </div>

      {/* Next/Back Buttons */}
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




