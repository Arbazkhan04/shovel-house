// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function ShovellerPersonalDetail() {
//   const navigate = useNavigate();

//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const handleNext = () => {
//     navigate("/shoveller/paymentSingIn");
//   };
  
//   const handleBack = () => {
//     navigate("/shoveller/serviceDetail");
//   };

//   return (
//     <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
//       <div className="flex flex-col px-5 mt-5 w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//           className="object-contain w-6 aspect-square cursor-pointer"
//           onClick={handleBack}
//         />
//         <div className="flex flex-col mt-3.5">
//           <div className="text-2xl font-medium tracking-wide text-black">
//             Personal Information
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
//                   value={userName}
//                   placeholder="User name"
//                   onChange={(e) => setUserName(e.target.value)}
//                   className="self-stretch my-auto border-none bg-transparent outline-none"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
//               <div className="flex gap-2 items-center w-full">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f16288d5f70d60463e926f142e1135154079877d6155d81077b775d52f81bab?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                 />
//                 <input
//                   type="text"
//                   value={email}
//                   placeholder="Email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="self-stretch my-auto border-none bg-transparent outline-none"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
//               <div className="flex gap-2 items-center w-full">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11f769d43488fadcdd13e5e9649d09892c259058a8c2c15036e8f433c1c96e6?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                   className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                 />
//                 <input
//                   type="text"
//                   value={phone}
//                   placeholder="Phone"
//                   onChange={(e) => setPhone(e.target.value)}
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
//                   value={address}
//                   placeholder="Address"
//                   onChange={(e) => setAddress(e.target.value)}
//                   className="self-stretch my-auto border-none bg-transparent outline-none"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap cursor-pointer">
//           <div
//             onClick={handleBack}
//             className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100"
//           >
//             Back
//           </div>
//           <div
//             onClick={handleNext}
//             className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
//           >
//             Next
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Resizer from "react-image-file-resizer";

export default function ShovellerPersonalDetail() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [resizedImageFile, setResizedImageFile] = useState(null); // For storing the resized image

  const [imageError, setImageError] = useState('');

  const handleNext = () => {
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);

    // Append the resized image
    if (resizedImageFile) {
      formData.append("profileImage", resizedImageFile);
    }

    navigate("/shoveller/paymentSingIn");
  };

  const handleBack = () => {
    navigate("/shoveller/serviceDetail");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ['image/jpeg', 'image/png'];
    if (file && validImageTypes.includes(file.type)) {
      // Resize the image using react-image-file-resizer
      Resizer.imageFileResizer(
        file,
        81, // width in pixels
        77, // height in pixels
        file.type === 'image/jpeg' ? 'JPEG' : 'PNG', // output format
        100, // quality percentage
        0, // rotation degree
        (uri) => {
          setProfileImage(uri); // Preview the resized image
          setResizedImageFile(uri); // Store the resized image file in state
        },
        "base64" // output format
      );
    }
    else {
    setImageError('Please upload a jpg or png file.');
    setProfileImage(null);
  }
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square cursor-pointer"
          onClick={handleBack}
        />

        <div className="flex flex-col mt-3.5">
          <div className="text-2xl font-medium tracking-wide text-black">
            Personal Information
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center mt-10 relative">
            <div className="relative">
              <img
                src={
                  profileImage
                    ? profileImage
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
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
            {/* User name input */}
            <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="text"
                  value={userName}
                  placeholder="User name"
                  onChange={(e) => setUserName(e.target.value)}
                  className="self-stretch my-auto border-none bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Email input */}
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f16288d5f70d60463e926f142e1135154079877d6155d81077b775d52f81bab?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="self-stretch my-auto border-none bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Phone input */}
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11f769d43488fadcdd13e5e9649d09892c259058a8c2c15036e8f433c1c96e6?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="tel"
                  value={phone}
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  className="self-stretch my-auto border-none bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Address input */}
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73fdd1df15314a807687ec020558440d507e8b916e92843e907cc29ed6457ef1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="text"
                  value={address}
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="self-stretch my-auto border-none bg-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap cursor-pointer">
          <div
            onClick={handleBack}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100"
          >
            Back
          </div>
          <div
            onClick={handleNext}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
