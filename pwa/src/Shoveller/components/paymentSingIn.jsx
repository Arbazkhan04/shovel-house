// import { useNavigate } from "react-router-dom";

// export default function PayementSingIn() {
//   const navigate = useNavigate();
//   const handleNext = () => {
//     navigate("/shoveller/searchJobByList");
//   };
//   const handleBack = () => {
//     navigate("/shoveller/shovellerPersonalDetail");
//   };
//   const handleSingUp = () => {
//     navigate('/shoveller/paymentSingUp')
//   }
//   return (
//     <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
//       <div className="flex flex-col px-5 mt-5 w-full">
//         <img onClick={handleBack}
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//           className="object-contain w-6 aspect-square"
//         />
//         <div className="flex flex-col mt-5">
//           <div className="text-2xl font-medium tracking-wide text-black">
//             Payment Information
//           </div>
//           <div className="mt-6 text-xs leading-5 text-black">
//             Enter your email and password below to log in to your Stripe
//             account.
//           </div>
//           <div className="flex flex-col mt-6 w-full">
//             <div className="flex flex-col w-full text-sm text-zinc-800">
//               <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
//                 <div className="flex gap-2 items-center w-full">
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3333b41e7bf16af057b0df9e449fbda4ec405e3cbf54855a177c82605af8555?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                   />
//                   <div className="self-stretch my-auto">User name</div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
//                 <div className="flex gap-10 justify-between items-center w-full">
//                   <div className="flex gap-2 items-center self-stretch my-auto">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/5736dff29994b11c69f9e3615eea4cc1528d3cb06f76fcf0b479c48245d425ae?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                       className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
//                     />
//                     <div className="self-stretch my-auto">Password</div>
//                   </div>
//                   <img
//                     loading="lazy"
//                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/e84f008ed26a86ef12af0c205001afa5e89a0a41eff9e6f0cdb8a5250ae14830?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
//                     className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 shrink gap-2.5 self-stretch pr-2 mt-3 w-full text-xs text-right text-neutral-400">
//               Dont have an account? <span onClick={handleSingUp} className="text-black">Signup</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-3 items-start mt-20 text-xl font-medium tracking-wider text-center text-white whitespace-nowrap">
//           <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 w-full bg-black rounded-lg min-w-[240px]">
//             Signin
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentSignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => {
    navigate("/shoveller/searchJobByList");
  };
  const handleBack = () => {
    navigate("/shoveller/shovellerPersonalDetail");
  };
  const handleSignUp = () => {
    navigate("/shoveller/paymentSingUp");
  };

  return (
    <div className="flex overflow-hidden flex-col pb-12 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex flex-col px-5 mt-5 w-full">
        <img
          onClick={handleBack}
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b4b91b9c57b90dd883ecf517bededc2915ea909e4a211385ef791c20c162e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
          className="object-contain w-6 aspect-square cursor-pointer"
        />
        <div className="flex flex-col mt-5">
          <div className="text-2xl font-medium tracking-wide text-black">
            Payment Information
          </div>
          <div className="mt-6 text-xs leading-5 text-black">
            Enter your email and password below to log in to your Stripe account.
          </div>
          <div className="flex flex-col mt-6 w-full">
            <div className="flex flex-col w-full text-sm text-zinc-800">
              <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-2 items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3333b41e7bf16af057b0df9e449fbda4ec405e3cbf54855a177c82605af8555?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                  />
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="User name"
                    className="self-stretch my-auto border-none bg-transparent outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center p-3 mt-3 w-full whitespace-nowrap rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex items-center w-full">
                  <div className="flex gap-2 items-center self-stretch my-auto flex-grow">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5736dff29994b11c69f9e3615eea4cc1528d3cb06f76fcf0b479c48245d425ae?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="self-stretch my-auto border-none bg-transparent outline-none flex-grow"
                    />
                  </div>
                  <img
                    onClick={() => setShowPassword(!showPassword)}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e84f008ed26a86ef12af0c205001afa5e89a0a41eff9e6f0cdb8a5250ae14830?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain cursor-pointer w-4 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 shrink gap-2.5 self-stretch pr-2 mt-3 w-full text-xs text-right text-neutral-400">
              Don't have an account? <span onClick={handleSignUp} className="text-black cursor-pointer">Signup</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start mt-20 text-xl font-medium tracking-wider text-center text-white whitespace-nowrap">
          <div onClick={handleNext} className="flex-1 shrink gap-9 self-stretch px-12 py-3.5 w-full bg-black rounded-lg min-w-[240px] cursor-pointer">
            Signin
          </div>
        </div>
      </div>
    </div>
  );
}

