import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import WelcomePage from './pages/WelcomePage';
import OtpVerification from './components/OtpVerification';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;