// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { LoadScript, Autocomplete } from '@react-google-maps/api';
// import { useShovellerSignupContext } from '../../context/shovllerSignupFormContext';

// const libraries = ["places"];

// export default function ShovellerDetails({ nextStep }) {
//     const navigate = useNavigate();
//     const { formData, handleChange, setFormData } = useShovellerSignupContext();
//     const [autocomplete, setAutocomplete] = useState(null);

//     // Google Maps API key
//     const googleMapsApiKey = "AIzaSyDJQNAbTK3AGLlmRGVxa3VbejegSp-qB9A"; // Replace with your actual API key

//     // Handler to set the Autocomplete instance
//     const onAutocompleteLoad = (autocompleteInstance) => {
//         setAutocomplete(autocompleteInstance);
//     };

//     // Handler to extract latitude and longitude from the selected place
//     const handlePlaceSelect = () => {
//         if (autocomplete) {
//             const place = autocomplete.getPlace();
//             if (place.geometry) {
//                 const lat = place.geometry.location.lat(); // Get latitude
//                 const lng = place.geometry.location.lng(); // Get longitude
//                 console.log("Latitude:", lat, "Longitude:", lng);

//                 // Update formData in context with new lat and lon
//                 setFormData((prevData) => ({
//                     ...prevData,
//                     latitude:lat,  // Update latitude
//                     longitude: lng, // Update longitude
//                 }));
//             }
//         }
//     };

//     const handleBack = () => {
//         navigate("/signupQuestion");
//     };

//     return (
//         <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
//             <div className="flex overflow-hidden flex-col items-center pb-12 mx-auto w-full bg-white max-w-[480px]">
//                 <div className="mt-16 text-5xl font-medium text-center text-black capitalize w-[305px]">
//                     Earn with Shovel House
//                 </div>
//                 <div className="flex flex-col mt-16 w-full max-w-[354px]">
//                     <div className="flex flex-col w-full rounded-xl">
//                         <div className="text-xl tracking-tight leading-6 text-zinc-800">
//                             What neighborhood would you like to work in?
//                         </div>
//                         <div className="flex flex-col mt-6 w-full">
//                             <div className="flex flex-col w-full tracking-tight text-zinc-800">
//                                 <div className="flex flex-col w-full">
//                                     <div className="text-xl font-medium leading-none">
//                                         Enter your neighborhood
//                                     </div>
//                                     <Autocomplete
//                                         onLoad={onAutocompleteLoad}
//                                         onPlaceChanged={handlePlaceSelect}
//                                     >
//                                         <input
//                                             type="text"
//                                             name="neighborhood" // Optional: If you decide to keep this field in the form
//                                             placeholder="e.g., Downtown, Brooklyn"
//                                             className="flex gap-2 items-center px-4 py-6 mt-3 w-full text-base leading-none rounded-lg bg-zinc-100 border-none min-h-[56px]"
//                                         />
//                                     </Autocomplete>
//                                 </div>
//                             </div>
//                             <div className="mt-4 text-xs text-stone-500">
//                                 (This is usually near your home address. It helps us find clients in your vicinity)
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col mt-12 w-full tracking-tight text-zinc-800">
//                         <div className="flex flex-col w-full">
//                             <div className="text-xl font-medium leading-none">
//                                 Referral code (optional)
//                             </div>
//                             <input
//                                 type="text"
//                                 name="referralCode"
//                                 value={formData.referredBy}
//                                 onChange={handleChange}
//                                 placeholder="e.g., 13223"
//                                 className="flex gap-2 items-center px-4 py-6 mt-3 w-full text-base leading-none rounded-lg bg-zinc-100 border-none min-h-[56px]"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap max-w-[350px] cursor-pointer">
//                     <div onClick={handleBack} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100">
//                         Back
//                     </div>
//                     <div onClick={nextStep} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg">
//                         Next
//                     </div>
//                 </div>
//             </div>
//         </LoadScript>
//     );
// }

import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { useShovellerSignupContext } from '../../context/shovllerSignupFormContext';
import Loader from '../../sharedComp/loader'

const libraries = ["places"];

function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export default function ShovellerDetails({ nextStep }) {
    const navigate = useNavigate();
    const { formData, handleChange, setFormData } = useShovellerSignupContext();
    const [autocomplete, setAutocomplete] = useState(null);

    // Google Maps API key
    const googleMapsApiKey = "AIzaSyDJQNAbTK3AGLlmRGVxa3VbejegSp-qB9A";

    // Load the Google Maps API using the useJsApiLoader hook
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: googleMapsApiKey,
        libraries: libraries,
    });

    // Handler to set the Autocomplete instance
    const onAutocompleteLoad = (autocompleteInstance) => {
        setAutocomplete(autocompleteInstance);
    };

    // Debounced handler to extract latitude and longitude from the selected place
    const handlePlaceSelect = useCallback(
        debounce(() => {
            if (autocomplete) {
                const place = autocomplete.getPlace();
                if (place.geometry) {
                    const lat = place.geometry.location.lat();
                    const lng = place.geometry.location.lng();
                    console.log("Latitude:", lat, "Longitude:", lng);

                    // Update formData in context with new lat and lon
                    setFormData((prevData) => ({
                        ...prevData,
                        latitude: lat,
                        longitude: lng,
                    }));
                }
            }
        }, 500), // Adjust the debounce delay (500ms) as needed
        [autocomplete, setFormData]
    );

    const handleBack = () => {
        navigate("/signupQuestion");
    };

    // Show error message if the API fails to load
    if (loadError) {
        return <div>Error loading Google Maps</div>;
    }

    return (
        !isLoaded ? ( // Check if the API is loaded before rendering
            <div> <Loader /> </div>
        ) : (
            <div className="flex overflow-hidden flex-col items-center pb-12 mx-auto w-full bg-white max-w-[480px]">
                <div className="mt-16 text-5xl font-medium text-center text-black capitalize w-[305px]">
                    Earn with Shovel House
                </div>
                <div className="flex flex-col mt-16 w-full max-w-[354px]">
                    <div className="flex flex-col w-full rounded-xl">
                        <div className="text-xl tracking-tight leading-6 text-zinc-800">
                            What neighborhood would you like to work in?
                        </div>
                        <div className="flex flex-col mt-6 w-full">
                            <div className="flex flex-col w-full tracking-tight text-zinc-800">
                                <div className="flex flex-col w-full">
                                    <div className="text-xl font-medium leading-none">
                                        Enter your neighborhood
                                    </div>
                                    <Autocomplete
                                        onLoad={onAutocompleteLoad}
                                        onPlaceChanged={handlePlaceSelect}
                                    >
                                        <input
                                            type="text"
                                            name="neighborhood"
                                            placeholder="e.g., Downtown, Brooklyn"
                                            className="flex gap-2 items-center px-4 py-6 mt-3 w-full text-base leading-none rounded-lg bg-zinc-100 border-none min-h-[56px]"
                                        />
                                    </Autocomplete>
                                </div>
                            </div>
                            <div className="mt-4 text-xs text-stone-500">
                                (This is usually near your home address. It helps us find clients in your vicinity)
                            </div>
                        </div>

                        <div className="flex flex-col mt-12 w-full tracking-tight text-zinc-800">
                            <div className="flex flex-col w-full">
                                <div className="text-xl font-medium leading-none">
                                    Referral code (optional)
                                </div>
                                <input
                                    type="text"
                                    name="referredBy"
                                    value={formData.referredBy}
                                    onChange={handleChange}
                                    placeholder="e.g., 13223"
                                    className="flex gap-2 items-center px-4 py-6 mt-3 w-full text-base leading-none rounded-lg bg-zinc-100 border-none min-h-[56px]"
                                />
                            </div>
                        </div>

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
            </div>
        )
    );
}

