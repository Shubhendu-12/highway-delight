# highway-delight
 login and signup form with otp verification

## Overview
This is a MERN (MongoDB, Express, React, Node.js) stack web application that provides user authentication functionality, including SignUp and Login features with OTP verification for SignUp.

## Features
- User SignUp with OTP verification
- User Login
- Secure password hashing
- JWT-based authentication

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed (version 12.x or higher)
- MongoDB installed and running
- npm package manager

## Installation
1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies for both the frontend and backend:
4. Create a `.env` file in the root directory and add the following environment variables:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service_provider
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password

3. Open your browser and navigate to `http://localhost:5000` (or the port specified by your frontend setup)

## API Endpoints
- POST `/api/signup`: Register a new user
- POST `/api/verify-otp`: Verify OTP for SignUp
- POST `/api/login`: Authenticate a user

## Technologies Used
- MongoDB: Database
- Express.js: Backend framework
- React.js: Frontend library
- Node.js: Runtime environment
- JSON Web Tokens (JWT): For authentication
- Bcrypt.js: For password hashing

## Project Structure