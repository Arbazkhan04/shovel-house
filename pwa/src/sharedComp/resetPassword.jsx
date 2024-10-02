import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../apiManager/shared/ForgotPassword";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Function to handle password change
  const handleChangePassword = async () => {
    // Check if passwords are empty
    if (!newPassword || !confirmPassword) {
      setErrorMessage("Please enter both passwords!");
      setSuccessMessage("");
      return;
    }

    // Check for minimum length
    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long!");
      setSuccessMessage("");
      return;
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setSuccessMessage("");
      return;
    }

    // If validation passes, proceed with the reset
    try {
      const res = await resetPassword(newPassword, window.location.pathname.split('/')[2]);
      console.log(res);
      if (res.err) {
        setErrorMessage(res.err)
      }
      else {
        setSuccessMessage("Password changed successfully!");
      setErrorMessage("");
      navigate("/"); // Navigate to the login page after password change
      }
    } catch (err) {
      console.log(err)
      setErrorMessage(err || "An error occurred while resetting the password.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Reset Password</h2>

        {/* New Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="new-password">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 mb-4 text-center">{errorMessage}</div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="text-zinc-900 mb-4 text-center">{successMessage}</div>
        )}

        {/* Change Password Button */}
        <button
          onClick={handleChangePassword}
          className="w-full py-2 bg-zinc-900 text-white rounded-lg focus:outline-none focus:bg-indigo-700"
        >
          Change Password
        </button>
      </div>
    </div>
  );
}
