import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUp } from '../api/auth';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp({ email, password });
      navigate('/verify-otp', { state: { email } });
    } catch (error) {
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#3A244A]">Create an account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {error && <p className="text-[#D72638] text-xs mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 bg-[#3A244A] text-white rounded hover:bg-[#2A1A3A] transition-colors text-sm mb-4"
        >
          Sign Up
        </button>
      </form>
      <button
        onClick={() => navigate('/login')}
        className="w-full p-3 border border-[#3A244A] text-[#3A244A] rounded hover:bg-gray-100 transition-colors text-sm"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignUp;