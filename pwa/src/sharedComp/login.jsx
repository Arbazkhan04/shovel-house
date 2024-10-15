// Login.jsx
import upperHeadImage from "../assets/images/upperhead.png";
import homeImage from "../assets/images/home.png";
import { useNavigate } from 'react-router-dom';
import ForgotPassword from "./forgotpassword";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { forgotPassword } from '../apiManager/shared/ForgotPassword';
import { ROUTES } from '../sharedComp/route'; // Import routes

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if (userInfo) {
        // Navigate based on user role after login
        switch (userInfo.user.role) {
          case 'admin':
            navigate(ROUTES.ADMIN_DASHBOARD);
            break;
          case 'shoveller':
            navigate(userInfo.user.chargesEnabled ? ROUTES.SHOVELLER_SEARCH : ROUTES.SHOVELLER_ONBOARD);
            break;
          case 'houseOwner':
             if(userInfo.user.jobStatus === 'completed'){
              navigate(ROUTES.HOUSEOWNER_SERVICE_FINISHED);
            }
            else if (userInfo.user.paymentStatus === 'authorized') {
              navigate(userInfo.user.jobStatus === 'in-progress' ? ROUTES.HOUSEOWNER_SERVICE_PROGRESS : ROUTES.HOUSEOWNER_LISTOFSHOVELLERAPPLIED);
            } else if (userInfo.user.paymentStatus === 'pending') {
              navigate(ROUTES.HOUSEOWNER_CHECKOUT);
            }
            else {
              navigate(ROUTES.HOUSEOWNER_JOB_PROGRESS);
            }
            break;
          default:
            break; // No action for unrecognized roles
        }
      }
    }, [navigate, userInfo]);

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    setIsForgotPasswordOpen(true);
  }

  const handleForgotPasswordSave = async (email) => {
    try {
      await forgotPassword(email);
      console.log('Forgot password email sent.');
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
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
          <div className="text-3xl font-medium text-center text-black capitalize">Login</div>
          <div className="flex flex-col mt-8 w-full">
            <div className="flex flex-col w-full text-sm text-zinc-800">
              {/* Email Field */}
              <div className="flex flex-col justify-center p-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-2 items-center w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47d37bff9099e72f0bf3ebb0f0fe368c52a3d28c434d397b6937cfbf5603428a?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04" className="object-contain shrink-0 aspect-square w-[22px]" alt="User Icon" />
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="flex-1 outline-none bg-transparent" />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col justify-center p-3 mt-3 w-full rounded-lg border-black border-solid border-[0.5px]">
                <div className="flex gap-2 items-center w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/66871b91e41236b22c08c0b76ca8f261be2b85018bf3d819cb7c88eb30e9b4b1?placeholderIfAbsent=true&apiKey=e30cd013b9554f3083a2e6a324d19d04" className="object-contain shrink-0 aspect-square w-[22px]" alt="Lock Icon" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="flex-1 outline-none bg-transparent" />
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={submitHandler}
                className={`bg-black rounded-lg py-2 mt-4 text-white ${isLoading ? "opacity-50" : "hover:bg-black-800"}`}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>

              {/* Forgot Password Button */}
              <button onClick={handleForgotPassword} className="mt-4 text-sm text-blue-700 hover:underline">
                Forgot Password?
              </button>

              {/* Sign Up Question */}
              <button onClick={handleQuestion} className="mt-4 text-sm text-black hover:underline">
                Don't have an account?
                <span className="text-blue-700"> Sign up</span>
              </button>

            </div>
          </div>
        </div>
      </div>
      {isForgotPasswordOpen && <ForgotPassword onClose={() => setIsForgotPasswordOpen(false)} onSave={handleForgotPasswordSave} />}
    </div>
  );
}

export default Login;
