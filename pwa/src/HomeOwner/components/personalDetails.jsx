import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/houseOwnerSignupFormContext";

export default function PersonalDetail({nextStep}) {
  const { formData, handleChange } = useFormContext();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/signupQuestion");
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
          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
            {/* User Name Input Field */}
            <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="text"
                  name="username"
                  placeholder="User name"
                  value={formData.username}
                  onChange={handleChange}
                  className="self-stretch my-auto border-none outline-none"
                />
              </div>
            </div>
            
            {/* Email Input Field */}
            {/* <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f16288d5f70d60463e926f142e1135154079877d6155d81077b775d52f81bab?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="self-stretch my-auto border-none outline-none"
                  />
                </div>
              </div>
            </div> */}

            {/* Phone Input Field */}
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11f769d43488fadcdd13e5e9649d09892c259058a8c2c15036e8f433c1c96e6?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="self-stretch my-auto border-none outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Address Input Field */}
            <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <div className="flex gap-2 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73fdd1df15314a807687ec020558440d507e8b916e92843e907cc29ed6457ef1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="self-stretch my-auto border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-start mt-20 w-full text-xl font-medium tracking-wider text-center whitespace-nowrap">
          <button
            onClick={handleBack}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-black rounded-lg bg-zinc-100"
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
