import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/houseOwnerSignupFormContext";
import Resizer from 'react-image-file-resizer';

export default function PersonalDetail({ nextStep }) {
  const { formData, handleChange, handleImageChange } = useFormContext();
  const [selectedImage, setSelectedImage] = useState(formData.image);

  const [errors, setErrors] = useState({}); // State for managing validation errors

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

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/signupQuestion");
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.userName) {
      newErrors.userName = "User name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!selectedImage) {
      newErrors.image = "Profile image is required";
    }

    return newErrors;
  };

  const handleNext = () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      nextStep(); // Proceed to the next step if no errors
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
          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">

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

            {errors.image && (
              <span className="text-red-500 text-xs text-center">{errors.image}</span>
            )}

            {/* User Name Input Field */}
            <div className="flex flex-col justify-center p-3 w-full mt-3 rounded-lg border-black border-solid border-[0.5px]">
              <div className="flex gap-2 items-center w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
                <input
                  type="text"
                  name="userName"
                  placeholder="User name"
                  value={formData.userName}
                  onChange={handleChange}
                  className="self-stretch my-auto border-none outline-none"
                />
              </div>
              {errors.userName && (
                <span className="text-red-500 text-xs">{errors.userName}</span>
              )}
            </div>

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
              {errors.phone && (
                <span className="text-red-500 text-xs">{errors.phone}</span>
              )}
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
              {errors.address && (
                <span className="text-red-500 text-xs">{errors.address}</span>
              )}
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
            onClick={handleNext}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
