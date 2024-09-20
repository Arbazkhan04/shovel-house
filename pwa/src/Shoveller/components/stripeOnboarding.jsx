import React, { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice'; 

export default function StripeOnboard() {
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch(); // Get the dispatch function
    const { userInfo } = useSelector((state) => state.auth); // Get the user info from Redux store
    const userId = userInfo ? userInfo.user.id : null; // Get the user ID from Redux or local storage
    // const userId = '66ed8918ffc1de1a6cb89328'; // Ideally, get this from context or some global state like Redux

    const handleStripeSetup = async () => {
        setLoading(true); // Start loading

        try {
            // Call backend to generate the Stripe onboarding URL
            const response = await fetch(`https://shovel-house-b93eaebaf538.herokuapp.com/api/oauth/connect/${userId}`, {
                method: 'GET',
            });

            if (response.ok) {
                const { stripeUrl } = await response.json(); // Get the Stripe onboarding URL from backend
                window.location.href = stripeUrl; // Redirect to Stripe
            } else {
                console.error('Error initiating Stripe connection:', response.statusText);
            }
        } catch (error) {
            console.error('Error initiating Stripe connection:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };
    // Callback handler: detect query parameters after Stripe redirects back to your site
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('code');
        const state = queryParams.get('state');

        if (code && state) {
            finalizeStripeConnection(code, state);
        }
    }, [location.search]);

    // Finalize Stripe Connection after redirect
    const finalizeStripeConnection = async (code, state) => {
        try {
            const response = await fetch(`https://shovel-house-b93eaebaf538.herokuapp.com/api/oauth/stripe/callback?code=${code}&state=${state}`, {
                method: 'GET',
            });

            if (response.ok) {
                const data = await response.json();
                dispatch(setCredentials({...data})); // Save the user info to Redux store
                console.log('Stripe connection successful:', data);
                navigate('/success'); // Or navigate to a success page after successful onboarding
            } else {
                console.error('Error finalizing Stripe connection:', response.statusText);
            }
        } catch (error) {
            console.error('Error finalizing Stripe connection:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center pb-12 mx-auto w-full bg-white max-w-[480px]">
            {/* Heading */}
            <div className="mt-16 text-center">
                <h1 className="text-4xl font-bold text-black">
                    You're Almost There!
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-[300px] mx-auto">
                    Just one more step to complete your profile and start earning.
                </p>
            </div>

            {/* Stripe Setup Instructions */}
            <div className="mt-16 w-full max-w-[360px] bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-xl font-medium text-gray-800">
                    Set Up Your Stripe Connect Account
                </div>
                <p className="mt-4 text-sm text-gray-500">
                    (Enter your details to set up your Stripe account and begin receiving payments.)
                </p>
            </div>

            {/* Set Up Stripe Button */}
            <div className="mt-20 w-full max-w-[350px]">
                <button
                    className="w-full py-3.5 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
                    onClick={handleStripeSetup} // Attach the click handler here
                >
                     {loading ? 'Redirecting...' : 'Set Up Stripe'}
                </button>
            </div>
        </div>
    );
}
