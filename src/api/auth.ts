// This is a mock API implementation
const API_URL = 'http://localhost:5000/api/auth';

export const signUp = async (userData: any): Promise<void> => {
    // Simulate API call
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Sign up failed');
    }
    // console.log('User data saved:', userData);
    // return new Promise((resolve) => setTimeout(resolve, 1000));
    return response.json();
   
  };

  export const login = async (email: string, password: string): Promise<{ token: string }> => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json();
  };
  
  export const verifyOtp = async (email: string, otp: string): Promise<void> => {
    const response = await fetch(`${API_URL}/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });
  
    if (!response.ok) {
      throw new Error('OTP verification failed');
    }
  };