// This is a mock API implementation
export const signUp = async (userData: any): Promise<void> => {
    // Simulate API call
    console.log('User data saved:', userData);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  export const login = async (email: string, password: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };
  
  export const verifyOtp = async (email: string, otp: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (otp === '123456') { // Mock correct OTP
          resolve();
        } else {
          reject(new Error('Invalid OTP'));
        }
      }, 1000);
    });
  };