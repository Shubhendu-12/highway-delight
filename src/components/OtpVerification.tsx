import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import { verifyOtp } from '../api/auth';

const OtpVerification: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verifyOtp(email, otp);
      navigate('/welcome');
    } catch (error) {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#3A244A]">Verify OTP</h2>
      <p className="mb-4 text-sm">Enter the OTP sent to {email}</p>
      <form onSubmit={handleSubmit}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="mx-2">-</span>}
          renderInput={(props) => <input {...props} className="w-10 h-10 text-center border border-gray-300 rounded" />}
        />
        {error && <p className="text-[#D72638] text-xs mt-3">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 bg-[#3A244A] text-white rounded hover:bg-[#2A1A3A] transition-colors text-sm mt-4"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpVerification;