import React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-[#3A244A]">Welcome!</h2>
      <p className="text-gray-600">Thank you for signing up. Your account has been verified successfully.</p>
    </div>
  );
};

export default WelcomePage;