import { useState } from "react";
import { useShovellerSignupContext } from '../../context/shovllerSignupFormContext';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginAccountDetail({nextStep,preStep}) {
    const { formData, handleChange } = useShovellerSignupContext();
  // const navigate = useNavigate();

  // State for form fields
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      navigate('/shoveller/stripeOnboard');
    }
  }, [navigate, userInfo]);

  // const handleNext = () => {
  //   navigate("/houseowner/loginPaymentInfo");
  // };

  // const handleBack = () => {
  //   navigate("/houseowner/personalDetail");
  // };

  const hadleSubmit = async (e) => {
    e.preventDefault();


     // Create a new FormData object
  const data = new FormData();
  
  // Append all the form data
  data.append('userRole', formData.userRole);
  data.append('userName', formData.userName);
  data.append('phone', formData.phone);
  data.append('address', formData.address);
  data.append('email', formData.email);
  data.append('neighborhood', formData.neighborhood);
  data.append('name', formData.name);
  data.append('password', formData.password);
  data.append('servicesProvide', JSON.stringify(formData.servicesProvide));
  if(formData.image){
    data.append('image', formData.image);
  }
  else{
    console.log("iamge is not provider")
  }

    try {
      const res = await register(data).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/shoveller/stripeOnboard'); //for now let have dummy naviagtion
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
    console.log(formData);
  }

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
            Account Details
          </div>
          <div className="flex flex-col mt-6 w-full text-sm text-zinc-800">
            <div className="flex flex-col w-full">
              {/* Email Field */}
              <div className="flex flex-col justify-center p-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-2 items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c51bea7e316b37bee8e2c92083a7a3e85c4faf44a7c13cfc47030aeac52bf350?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="self-stretch my-auto outline-none"
                  />
                </div>
              </div>
              {/* Name Field */}
              <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-2 items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aafd9b5d868a2b4ab93be69d6a30800a9f772342074f271884589ac82bd5a0a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="self-stretch my-auto outline-none"
                  />
                </div>
              </div>
              {/* Password Field */}
              <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-10 justify-between items-center w-full">
                  <div className="flex gap-2 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d22604acdbcca3720f62c0ac911d1c4c7c2549f38bb93be39b4654d603155a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                    />
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="self-stretch my-auto outline-none"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ef8afe2c37fbd8211cecc072a89488a2e75bf43d919f723ba689650730598e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"  
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square cursor-pointer"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  />
                </div>
              </div>
              {/* Confirm Password Field */}
              <div className="flex flex-col justify-center p-3 mt-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-10 justify-between items-center w-full">
                  <div className="flex gap-2 items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d22604acdbcca3720f62c0ac911d1c4c7c2549f38bb93be39b4654d603155a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                    />
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="self-stretch my-auto outline-none"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ef8afe2c37fbd8211cecc072a89488a2e75bf43d919f723ba689650730598e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"  
                    className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square cursor-pointer"
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                  />
                </div>
              </div>
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
            onClick={hadleSubmit}
            className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 text-white bg-black rounded-lg"
          >
            Next 
          </div>
        </div>
      </div>
    </div>
  );
}
