// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { signUp } from '../api/auth';

// const SignUp: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signUp({ email, password });
//       navigate('/verify-otp', { state: { email } });
//     } catch (error) {
//       setError('Sign up failed. Please try again.');
//     }
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
//       <h2 className="text-3xl font-bold mb-6 text-[#3A244A]">Create an account</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full p-3 border border-gray-300 rounded text-sm"
//           />
//         </div>
//         <div className="mb-6 relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full p-3 border border-gray-300 rounded text-sm"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-3 text-gray-400"
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </button>
//         </div>
//         {error && <p className="text-[#D72638] text-xs mb-4">{error}</p>}
//         <button
//           type="submit"
//           className="w-full p-3 bg-[#3A244A] text-white rounded hover:bg-[#2A1A3A] transition-colors text-sm mb-4"
//         >
//           Sign Up
//         </button>
//       </form>
//       <button
//         onClick={() => navigate('/login')}
//         className="w-full p-3 border border-[#3A244A] text-[#3A244A] rounded hover:bg-gray-100 transition-colors text-sm"
//       >
//         Sign In
//       </button>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUp } from '../api/auth';

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
      await signUp({ firstName, lastName, password, [contactMode]: contactMode === 'email' ? email : phone });
      navigate('/verify-otp', { state: { [contactMode]: contactMode === 'email' ? email : phone } });
    } catch (error) {
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#3A244A]">Let us know!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded text-sm"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Set Password"
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
        <div className="mb-4 relative">
          <input
            type={showRetypePassword ? "text" : "password"}
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            placeholder="Retype Password"
            className="w-full p-3 border border-gray-300 rounded text-sm"
          />
          <button
            type="button"
            onClick={() => setShowRetypePassword(!showRetypePassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showRetypePassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="mb-4">
          <select
            value={contactMode}
            onChange={(e) => setContactMode(e.target.value as 'email' | 'phone')}
            className="w-full p-3 border border-gray-300 rounded text-sm"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>
        {contactMode === 'email' ? (
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full p-3 border border-gray-300 rounded text-sm"
            />
          </div>
        ) : (
          <div className="mb-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone"
              className="w-full p-3 border border-gray-300 rounded text-sm"
            />
          </div>
        )}
        {error && <p className="text-[#D72638] text-xs mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 bg-[#3A244A] text-white rounded hover:bg-[#2A1A3A] transition-colors text-sm mb-4"
        >
          Sign Up
        </button>
      </form>
      <div className="text-right">
        <button
          onClick={() => navigate('/login')}
          className="text-[#3A244A] hover:underline text-sm"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;