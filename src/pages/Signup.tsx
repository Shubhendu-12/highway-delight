import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUp } from '../api/auth';
import SignU from '../assets/SignUp.png'

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [contactMode, setContactMode] = useState<'email' | 'phone'>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== retypePassword) {
       setError("Passwords don't match");
       return;
     }
     try {
       const { token, otp } = await signUp({ firstName, lastName, password, email, phone });
       // Store the token in local storage or context
       localStorage.setItem('token', token);
       navigate('/verify-otp', { state: { email, otp } });
     } catch (error) {
       setError('Sign up failed. Please try again.');
     }
  };

    return (
      <div className='flex h-screen items-center justify-center bg-[#F4F4F4]'>
      <div className='flex w-[900px] bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='w-1/2 p-6'>
          <img src={SignU} alt="signup" className='w-full h-full object-cover' />
        </div>
        <div className='w-1/2 p-8'>
        <div className='flex justify-between items-center'>
     
          <h2 className="text-3xl font-bold mb-6 text-[#3A244A]">Let us know  <span className='text-[#D72638]'>!</span></h2>
        
          {/* <div className="text-right mt-4"> */}
            <button
              onClick={() => navigate('/login')}
              className="text-[#3A244A] hover:underline text-lg font-bold underline"
            >
              Sign <span className='text-[#D72638]'>In</span>
            </button>
          {/* </div> */}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Set Password"
                className="w-full p-2 border border-gray-300 rounded-md text-sm pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showRetypePassword ? "text" : "password"}
                value={retypePassword}
                onChange={(e) => setRetypePassword(e.target.value)}
                placeholder="Retype Password"
                className="w-full p-2 border border-gray-300 rounded-md text-sm pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowRetypePassword(!showRetypePassword)}
                className="absolute right-2 top-2 text-gray-400"
              >
                {showRetypePassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <select
              value={contactMode}
              onChange={(e) => setContactMode(e.target.value as 'email' | 'phone')}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            {contactMode === 'email' ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                required
              />
            ) : (
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                required
              />
            )}
            {error && <p className="text-[#D72638] text-xs">{error}</p>}
            <button
              type="submit"
              className="w-full p-2 bg-[#3A244A] text-white rounded-lg hover:bg-[#2A1A3A] transition-colors text-sm"
            >
              Sign Up
            </button>
          </form>
          
        </div>
      </div>
    </div> 
  );
};

export default SignUp;