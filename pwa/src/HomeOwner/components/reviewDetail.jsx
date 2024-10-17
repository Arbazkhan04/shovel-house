// import React from 'react';
// import { useJobPostProgressContext } from '../../context/jobPostProgressFrom';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCredentials } from '../../slices/authSlice';

// export default function ReviewDetail({nextStpe, preStep}) {
//   const { jobPostProgress } = useJobPostProgressContext();
//   const { userInfo } = useSelector((state) => state.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleBack = () => {
//     preStep();
//   };

//   const handleNext = async () => {
//     // Convert the payment amount from dollars to cents
//     const paymentAmountInCents = Math.round(jobPostProgress.paymentOffering * 100); 

//     // Transform jobPostProgress into the required format
//     const jobData = {
//       // houseOwnerId: userInfo ? userInfo.user.id : null,// Replace this with dynamic houseOwnerId
//       services: jobPostProgress.selectedServices,
//       location: {
//         type: 'Point',
//         coordinates: [jobPostProgress.location.lng, jobPostProgress.location.lat], // Extract lat/lng from jobPostProgress
//       },
//       scheduledTime: jobPostProgress.scheduledTime, // Pass the full scheduled time object
//       paymentInfo: {
//         amount: paymentAmountInCents, // Amount in cents
//         // method: 'stripe',  // Assuming payment method is Stripe (change if needed)
//       },
//       jobStatus: 'open', // Set initial job status as 'open'
//     };

//     console.log(jobData);
//     try {
//       // Send the transformed job data to your backend
//       const response = await fetch(`http://localhost:3003/api/job/createJob/${userInfo.user.id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(jobData), // Send the formatted jobData object
//       });

//       if (response.ok) {
//         const data = await response.json();
//         dispatch(setCredentials({ ...data })); //udpate the user info
//         console.log('Job created successfully:', data);

//         // Navigate to the next step (e.g., a payment page or success page)
//         navigate('/houseowner/stripeCheckout')
//       } else {
//         console.log('Failed to create job');
//       }
//     } catch (error) {
//       console.log('Error creating job:', error);
//     }
//   };


//   return (
//     <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
//       <div className="flex gap-2 items-center px-5 mt-7">
//         <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
//         <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
//         <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
//         <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
//       </div>
//       <div className="flex flex-col self-center mt-8 w-full max-w-[350px]">
//         <div className="flex flex-col w-full">
//           <div className="text-3xl font-medium text-black">Review</div>
//           <div className="flex flex-col mt-8 w-full tracking-tight">
//             <div className="flex flex-col w-full text-xl leading-none whitespace-nowrap text-zinc-800">
//               <div className="flex flex-col w-full">
//                 <div className="font-medium">Location</div>
//                 <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
//                   <div className="flex gap-3 items-center self-stretch my-auto">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb82b742813622010ee12f9939f2f338f5f58d480a45108cc8a5ba99f59dcee?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                       className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                     />
//                     <div className="self-stretch my-auto break-words whitespace-normal">{jobPostProgress.location.address || 'N/A'}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
//               <div className="flex flex-col w-full">
//                 <div className="font-medium">Service Required</div>
//                 <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
//                   <div className="flex gap-3 items-center self-stretch my-auto">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a68778be4e38bd5b3514919ae22c700288b50d42c558db8c27ba09b1c7c993?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                       className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                     />
//                     <div className="self-stretch my-auto">{jobPostProgress.selectedServices.join(', ') || 'N/A'}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
//               <div className="flex flex-col w-full">
//                 <div className="font-medium">Service Start Time</div>
//                 <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
//                   <div className="flex gap-3 items-center self-stretch my-auto">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b4686dcb78bf82908b35c26055a80a23bf180d08eb606d87b9c02f63dfc963?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                       className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                     />
//                     <div className="self-stretch my-auto">
//                       {`${jobPostProgress.scheduledTime.hour}:${jobPostProgress.scheduledTime.minute}:00 ${jobPostProgress.scheduledTime.period}` || 'N/A'}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
//               <div className="flex flex-col w-full">
//                 <div className="font-medium">Service Duration</div>
//                 <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
//                   <div className="flex gap-3 items-center self-stretch my-auto">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b4686dcb78bf82908b35c26055a80a23bf180d08eb606d87b9c02f63dfc963?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                       className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                     />
//                     <div className="self-stretch my-auto">{jobPostProgress.serviceDuration || 'N/A'}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
//               <div className="flex flex-col w-full">
//                 <div className="font-medium">Payment Offering</div>
//                 <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
//                   <div className="gap-3 self-stretch my-auto">${jobPostProgress.paymentOffering || 'N/A'}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-3 items-start self-center mt-12 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
//         <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch py-3.5 text-black rounded-lg bg-zinc-100">
//           Back
//         </div>
//         <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch text-center py-3 text-white bg-black rounded-lg">
//           Next
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { useJobPostProgressContext } from '../../context/jobPostProgressFrom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import Loader from '../../sharedComp/loader'
import { createJob } from '../../apiManager/houseOwner/createJob';

// ErrorDisplay Component
const ErrorDisplay = ({ message }) => (
  <div className="text-red-600 text-sm mt-1">{message}</div>
);

export default function ReviewDetail({ nextStep, preStep }) {
  const { jobPostProgress } = useJobPostProgressContext();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State for field errors
  const [serverError, setServerError] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    preStep();
  };

  const validateFields = () => {
    const newErrors = {};
    if (!jobPostProgress.location || !jobPostProgress.location.address) {
      newErrors.location = 'Please provide a valid location.';
    }
    if (!jobPostProgress.selectedServices || jobPostProgress.selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service.';
    }
    if (!jobPostProgress.scheduledTime) {
      newErrors.scheduledTime = 'Please select a scheduled time.';
    }
    if (!jobPostProgress.serviceDuration) {
      newErrors.serviceDuration = 'Please specify the service duration.';
    }
    if (!jobPostProgress.paymentOffering || jobPostProgress.paymentOffering <= 0) {
      newErrors.paymentOffering = 'Please provide a valid payment offering.';
    }

    setErrors(newErrors); // Set errors if any found
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleNext = async () => {
    // Clear previous errors
    setErrors({});

    if (!validateFields()) {
      return; // Stop if validation fails
    }

    // Convert the payment amount from dollars to cents
    const paymentAmountInCents = Math.round(jobPostProgress.paymentOffering * 100);

    // Transform jobPostProgress into the required format
    const jobData = {
      services: jobPostProgress.selectedServices,
      location: {
        type: 'Point',
        coordinates: [jobPostProgress.location.lng, jobPostProgress.location.lat],
      },
      scheduledTime: jobPostProgress.scheduledTime,
      paymentInfo: {
        amount: paymentAmountInCents,
      },
      jobStatus: 'open',
    };

    console.log(jobData);
    setLoading(true);
    try {
      const res = await createJob(userInfo.user.id, jobData);
      if (res.error) {
        setServerError(res.error);
        setLoading(false);
        return;
      }
      dispatch(setCredentials({ ...res }));
      navigate('/houseowner/stripeCheckout');
    } catch (error) {
      setServerError('Failed to create job - please try again.');
    } finally {
      setLoading(false);
    }
   
  };

  if (loading) {
    return <Loader />
  }

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-2 items-center px-5 mt-7">
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
        <div className="flex flex-1 shrink self-stretch my-auto w-16 h-2 bg-black rounded-md basis-0" />
        <div className="flex flex-1 shrink self-stretch my-auto h-2 bg-black rounded-md basis-0 w-[65px]" />
      </div>
      <div className="flex flex-col self-center mt-8 w-full max-w-[350px]">
        <div className="flex flex-col w-full">
          <div className="text-3xl font-medium text-black">Review</div>
          {/* Error Alert */}
          {serverError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 w-full max-w-[330px] sm:max-w-[390px] text-center">
              <strong className="font-bold">ServerError: </strong>
              <span className="block sm:inline">{serverError}</span>
            </div>
          )}

          <div className="flex flex-col mt-8 w-full tracking-tight">
            <div className="flex flex-col w-full text-xl leading-none whitespace-nowrap text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Location</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb82b742813622010ee12f9939f2f338f5f58d480a45108cc8a5ba99f59dcee?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto break-words whitespace-normal">{jobPostProgress.location.address || 'N/A'}</div>
                  </div>
                </div>
                {errors.location && <ErrorDisplay message={errors.location} />} {/* Error display for location */}
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Service Required</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a68778be4e38bd5b3514919ae22c700288b50d42c558db8c27ba09b1c7c993?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">{jobPostProgress.selectedServices.join(', ') || 'N/A'}</div>
                  </div>
                </div>
                {errors.services && <ErrorDisplay message={errors.services} />} {/* Error display for services */}
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Service Start Time</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b4686dcb78bf82908b35c26055a80a23bf180d08eb606d87b9c02f63dfc963?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">
                      {`${jobPostProgress.scheduledTime.hour}:${jobPostProgress.scheduledTime.minute}:00 ${jobPostProgress.scheduledTime.period}` || 'N/A'}
                    </div>
                  </div>
                </div>
                {errors.scheduledTime && <ErrorDisplay message={errors.scheduledTime} />} {/* Error display for scheduled time */}
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Service Duration</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b4686dcb78bf82908b35c26055a80a23bf180d08eb606d87b9c02f63dfc963?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">{jobPostProgress.serviceDuration || 'N/A'}</div>
                  </div>
                </div>
                {errors.serviceDuration && <ErrorDisplay message={errors.serviceDuration} />} {/* Error display for service duration */}
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full text-xl leading-none text-zinc-800">
              <div className="flex flex-col w-full">
                <div className="font-medium">Payment Offering</div>
                <div className="flex gap-2.5 items-center p-4 mt-3 w-full text-center rounded-lg bg-zinc-100">
                  <div className="flex gap-3 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/55a68778be4e38bd5b3514919ae22c700288b50d42c558db8c27ba09b1c7c993?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">{jobPostProgress.paymentOffering || 'N/A'}</div>
                  </div>
                </div>
                {errors.paymentOffering && <ErrorDisplay message={errors.paymentOffering} />} {/* Error display for payment offering */}
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-start self-center mt-12 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px]">
            <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch py-3.5 text-black rounded-lg bg-zinc-100">
              Back
            </div>
            <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch text-center py-3 text-white bg-black rounded-lg">
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}