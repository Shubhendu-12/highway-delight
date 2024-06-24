import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from '../api/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/welcome');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#3A244A]">Fill what we know<span className='text-[#D72638]'>!</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded text-sm"
            required
          />
        </div>
        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded text-sm"
            required
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
          className="w-full p-3 bg-[#3A244A] text-white rounded-lg hover:bg-[#2A1A3A] transition-colors text-sm mb-4"
        >
          Sign In
        </button>
      </form>
      <button
        onClick={() => navigate('/signup')}
        className="w-full p-3 border border-[#3A244A] text-[#3A244A] rounded-lg hover:bg-gray-100 transition-colors text-sm"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Login;