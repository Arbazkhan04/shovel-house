
// // import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useShovellerSignupContext } from '../../context/shovllerSignupFormContext';
// import Resizer from 'react-image-file-resizer';

// export default function ShovellerPersonalDetail({ nextStep,preStep }) {
//   const { formData, handleChange, handleImageChange } = useShovellerSignupContext();


//   const [selectedImage, setSelectedImage] = useState(formData.image);


//   const handleImageFileChange = (event) => {
//     const file = event.target.files[0];
//     const validImageTypes = ['image/jpeg', 'image/png'];

//     if (file && validImageTypes.includes(file.type)) {
//       Resizer.imageFileResizer(
//         file,
//         81, // width in pixels
//         77, // height in pixels
//         file.type === 'image/jpeg' ? 'JPEG' : 'PNG', // output format
//         100, // quality percentage
//         0, // rotation degree
//         (uri) => {
//           setSelectedImage(uri);
//           handleImageChange(uri); // Update context with new image
//         },
//         'base64' // output type: 'base64' or 'blob'
//       );
//     } else {
//       setSelectedImage(null);
//       handleImageChange(null); // Clear image in context
//     }
//   };

//   return (
//     <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
//       <div className="flex flex-col px-5 mt-5 w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//           className="object-contain w-6 aspect-square cursor-pointer"
//           onClick={preStep}
//         />
//         <div className="flex flex-col mt-3.5">
//           <div className="text-2xl font-medium tracking-wide text-black">
//             Personal Information
//           </div>

//           {/* Profile Image Section */}
//           <div className="flex justify-center mt-6 relative">
//             <div className="relative">
//               <img
//                 src={
//                   selectedImage
//                     ? selectedImage
//                     : "https://cdn-icons-png.flaticon.com/512/149/149071.png" // default profile image
//                 }
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full object-cover"
//               />
//               <label htmlFor="profileImageInput" className="absolute bottom-0 right-0">
//                 <img
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain w-6 aspect-square cursor-pointer"
//                 />
//               </label>
//               <input
//                 id="profileImageInput"
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageFileChange}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
//             <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
//               <div className="flex gap-2 items-center w-full">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                 />
//                 <input
//                   type="text"
//                   name="userName"
//                   value={formData.userName}
//                   placeholder="User name"
//                   onChange={handleChange}
//                   className="self-stretch my-auto border-none bg-transparent outline-none"
//                 />
//               </div>
//             </div>

//             {/* <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
//               <div className="flex gap-2 items-center w-full">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f16288d5f70d60463e926f142e1135154079877d6155d81077b775d52f81bab?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                 />
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   placeholder="Email"
//                   onChange={formData.email}
//                   className="self-stretch my-auto border-none bg-transparent outline-none"
//                 />
//               </div>
//             </div> */}

//             <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
//               <div className="flex gap-2 items-center w-full">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11f769d43488fadcdd13e5e9649d09892c259058a8c2c15036e8f433c1c96e6?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   placeholder="Phone"
//                   onChange={handleChange}
//                   className="self-stretch my-auto border-none bg-transparent outline-none"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
//               <div className="flex gap-2 items-center w-full">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/73fdd1df15314a807687ec020558440d507e8b916e92843e907cc29ed6457ef1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   placeholder="Address"
//                   onChange={handleChange}
//                   className="self-stretch my-auto border-none bg-transparent outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap cursor-pointer">
//           <div
//             onClick={preStep}
//             className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100"
//           >
//             Back
//           </div>
//           <div
//             onClick={nextStep}
//             className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
//           >
//             Next
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useShovellerSignupContext } from '../../context/shovllerSignupFormContext';
import Resizer from 'react-image-file-resizer';

export default function ShovellerPersonalDetail({ nextStep, preStep }) {
  const { formData, handleChange, handleImageChange } = useShovellerSignupContext();
  const [selectedImage, setSelectedImage] = useState(formData.image);

  // Validation states
  const [errors, setErrors] = useState({
    userName: '',
    phone: '',
    address: '',
  });

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    const validImageTypes = ['image/jpeg', 'image/png'];

    if (file && validImageTypes.includes(file.type)) {
      Resizer.imageFileResizer(
        file,
        81, // width in pixels
        77, // height in pixels
        file.type === 'image/jpeg' ? 'JPEG' : 'PNG', // output format
        100, // quality percentage
        0, // rotation degree
        (uri) => {
          setSelectedImage(uri);
          handleImageChange(uri); // Update context with new image
        },
        'base64' // output type: 'base64' or 'blob'
      );
    } else {
      setSelectedImage(null);
      handleImageChange(null); // Clear image in context
    }
  };

  const validateFields = () => {
    let valid = true;
    const newErrors = { userName: '', phone: '', address: '' };

    if (!formData.userName.trim()) {
      newErrors.userName = 'Username is required.';
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone must be a 10-digit number.';
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.';
      valid = false;
    }

    if (!selectedImage) {
      newErrors.image = 'Please upload a profile picture.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNextStep = () => {
    if (validateFields()) {
      nextStep();
    }
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square cursor-pointer"
          onClick={preStep}
        />
        <div className="flex flex-col mt-3.5">
          <div className="text-2xl font-medium tracking-wide text-black">
            Personal Information
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center mt-6 relative">
            <div className="relative">
              <img
                src={
                  selectedImage
                    ? selectedImage
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png" // default profile image
                }
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <label htmlFor="profileImageInput" className="absolute bottom-0 right-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain w-6 aspect-square cursor-pointer"
                />
              </label>
              <input
                id="profileImageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageFileChange}
              />
            </div>
          </div>
          {errors.image && <p className="text-red-500 text-xs mt-1 text-center">{errors.image}</p>}

          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
            {/* Username Field */}
            <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  placeholder="User name"
                  onChange={handleChange}
                  className="self-stretch my-auto border-none bg-transparent outline-none"
                />
              </div>
              {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName}</p>}
            </div>

            {/* Phone Field */}
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11f769d43488fadcdd13e5e9649d09892c259058a8c2c15036e8f433c1c96e6?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone"
                  onChange={handleChange}
                  className="self-stretch my-auto border-none bg-transparent outline-none"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Address Field */}
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73fdd1df15314a807687ec020558440d507e8b916e92843e907cc29ed6457ef1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  placeholder="Address"
                  onChange={handleChange}
                  className="self-stretch my-auto border-none bg-transparent outline-none"
                />
              </div>
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap cursor-pointer">
          <div
            onClick={preStep}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100"
          >
            Back
          </div>
          <div
            onClick={handleNextStep}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
