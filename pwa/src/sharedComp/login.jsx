import upperHeadImage from "../assets/images/upperhead.png";
import homeImage from "../assets/images/home.png";
import { useNavigate } from 'react-router-dom';
import ForgotPassword from "./forgotpassword";
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);


  const handleForgotPassword = () => {
    setIsForgotPasswordOpen(true);
  }

  const handleForgotPasswordSave = (email) => {
    console.log('Forgot Password Email:', email);
  }


  const handleNavigate = () => {
    navigate('/question');
    console.log('username:', username);
    console.log('password:', password);
  }

  const handleQuestion = () => {
    navigate('/signupQuestion');
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white mt-5">
      <div className="text-center text-3xl font-medium text-black">Shovel House</div>
      <div className="relative w-full max-w-[500px] pt-16">
        <img src={upperHeadImage} alt="Upper Head" className="absolute top-1 left-0 w-full h-auto" />
      </div>

      <div className="relative flex flex-col items-center w-full max-w-[330px] sm:max-w-[390px] mt-1 px-5">
        <img src={homeImage} alt="Home Shape" className="absolute -top-18 left-0 w-full h-auto" />

        <div className="absolute mt-40 transform flex flex-col items-center z-10 px-6 pt-14 pb-8 rounded-xl bg-[#EEEEEE] w-full shadow-lg">
          <div className="text-3xl font-medium text-center text-black capitalize">
            Login
          </div>
          <div className="flex flex-col mt-8 w-full">
            <div className="flex flex-col w-full text-sm text-zinc-800">
              {/* Username Field */}
              <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-2 items-center w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d37bff9099e72f0bf3ebb0f0fe368c52a3d28c434d397b6937cfbf5603428a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 aspect-square w-[22px]"
                    alt="User Icon"
                  />
                  {/* <div className="self-stretch">User name</div> */}
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="User name"
                    className="flex-1 outline-none bg-transparent"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col justify-center p-3 mt-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex justify-between items-center w-full">
                  <div className="flex gap-2 items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/66871b91e41236b22c08c0b76ca8f261be2b85018bf3d819cb7c88eb30e9b4b1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                      className="object-contain shrink-0 aspect-square w-[22px]"
                      alt="Password Icon"
                    />
                     <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="flex-1 outline-none bg-transparent"
                  />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb322b90745385e92c8e607038daceb851429265745a276cfd155d43f6099b5e?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04"
                    className="object-contain shrink-0 w-4 aspect-square"
                    alt="Eye Icon"
                  />
                </div>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div onClick={handleForgotPassword} className="mt-3 text-xs text-right text-neutral-400">
              Forgot password?
            </div>

            {/* Forgot Password Modal */}
            {isForgotPasswordOpen && (
             <ForgotPassword
             isOpen={isForgotPasswordOpen}
             onClose={() => setIsForgotPasswordOpen(false)}
             onSave={handleForgotPasswordSave}
           />
            )}

            {/* Login Button */}
            <button onClick={handleNavigate} className="mt-6 w-full text-xl font-medium tracking-wider text-center text-white bg-black rounded-lg py-3">
              Login
            </button>
            <div className="mt-3 text-sm text-center text-neutral-600">
              Not a member? <span onClick={handleQuestion} className="text-blue-500 cursor-pointer">Sign Up</span>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Login
