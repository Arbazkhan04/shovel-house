

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51Pv37VRvOCLWc0jZXjSgH518nFoSDP7ML1fTVdJHsfniJGfIbbzEKQW4Co8JzfCApZ0UwDMm79fRQwIgCM5FuLbU008V8ZHFdQ');

const StripeCheckout = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [canceled, setCanceled] = useState(false);
  const navigate = useNavigate(); // Use useNavigate here

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    const canceledParam = urlParams.get('canceled');

    // If the payment was canceled, show the cancel message
    if (canceledParam) {
      setCanceled(true);
      setLoading(false);
      return;
    }

    // If there is a session_id, fetch payment status from the backend
    if (sessionId) {
      const checkPaymentStatus = async () => {
        try {
          const response = await fetch('http://localhost:3003/api/stripe/verifyStatus', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sessionId }),
          });

          if (!response.ok) {
            throw new Error('Failed to fetch payment status');
          }

          const data = await response.json();
          dispatch(setCredentials({ ...data }));//udpate the user info
          console.log('Payment status:', data);
          setPaymentStatus(data.user.paymentStatus);
        } catch (err) {
          console.error('Error fetching payment status:', err);
          setError('An error occurred while checking the payment status.');
        } finally {
          setLoading(false);
        }
      };

      checkPaymentStatus();
    } else {
      setLoading(false);
    }
  }, []);

  // Handle checkout button click
  const handleCheckout = async () => {
    // const price = 4; // Replace with the price from your backend
    // const jobId = '66efd711fea9d88f22a7c5a7'; // Replace with the job ID from your backend
    try {
      // Send the price to the backend to create the checkout session
      const response = await fetch('http://localhost:3003/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: userInfo.user.paymentOffering, // Send amount in cents
            jobId: userInfo.user.jobId, // Include jobId if required in your backend
          }),          
      });

      if (!response.ok) {
        const errorText = await response.text(); // Get response text for error details
        throw new Error(`Failed to create checkout session: ${errorText}`);
      }

      const { id } = await response.json();
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId: id });

      if (error) {
        console.error('Error redirecting to checkout:', error);
        alert(`Failed to redirect to checkout: ${error.message}`);
      }
    } catch (error) {
      console.error('Error handling checkout:', error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  // Render based on payment result
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (canceled) {
    return (
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-3xl font-bold text-red-500">Payment Cancelled</h1>
        <p className="mt-4 text-lg text-gray-600">
          It looks like you cancelled the payment. Please try again.
        </p>
        <button
          onClick={() => handleCheckout()} // Call the checkout function again
          className="mt-8 py-2 px-4 bg-black text-white rounded hover:bg-black-500 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (paymentStatus === 'authorized') {
    return (
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-3xl font-bold text-green-500">Payment Authorized!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Thank you, your payment is authorized! Your job is now confirmed.
        </p>
        <button
          onClick={() => navigate('/houseowner/isMatchShoveller')} // Navigate to matching dashboard
          className="mt-8 py-2 px-4 bg-black text-white rounded hover:bg-black-500 transition"
        >
          Go to Matching Dashboard
        </button>
      </div>
    );
  }

  // Checkout button and input when no session_id or canceled parameter is present
  return (
            <div className="flex flex-col items-center justify-center pb-12 mx-auto w-full bg-white max-w-[480px]">
                {/* Heading */}
                <div className="mt-16 text-center">
                    <h1 className="text-4xl font-bold text-black">
                        Complete Your Payment!
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-[300px] mx-auto">
                        Your job has been successfully posted. Proceed to payment to confirm the job.
                    </p>
                </div>
    
                {/* Payment Instructions */}
                <div className="mt-16 w-full max-w-[360px] bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="text-xl font-medium text-gray-800">
                        Secure Your Job Posting with Payment
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        (Complete the payment to confirm your job and get it listed for shovelers.)
                        Don't worry, your payment will only be authorized now and will not be captured until you confirm the job is completed. You can cancel anytime if you don't receive the service.
                    </p>
                </div>
    
                {/* Pay Now Button */}
                <div className="mt-20 w-full max-w-[350px]">
                    <button
                        className="w-full py-3.5 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
                        onClick={handleCheckout} // Attach the click handler here
                    >
                        Checkout & Pay
                    </button>
                </div>
            </div>
        );
};

export default StripeCheckout;

