# MERN Authentication Backend
**Backend** [Live Demo](https://mern-auth-backend-9nx9.onrender.com)

**Frontend**[Live Demo](https://mern-auth-frontend-5h4z.vercel.app/)

Welcome to the backend of the MERN Authentication system. This project provides the authentication API for a user authentication system using **JSON Web Tokens (JWT)**. It allows for user registration, login, password reset, OTP generation/verification, and protected routes for authorized users.

## Overview

This backend API handles authentication processes such as registering users, logging them in, handling password resets, and generating/validating OTPs. It integrates with **MongoDB** to store user data securely, and the **JWT** authentication mechanism ensures secure access to protected resources.

## Features

### 1. **User Registration**
   - Registers a new user with username and email.
   - **OTP Verification**: Sends a One-Time Password (OTP) to verify the user's email or phone number.

### 2. **User Login**
   - Allows users to log in with their username or email.
   - **JWT Authentication**: After a successful login, a JSON Web Token (JWT) is issued to authenticate the user on subsequent requests.

### 3. **Password Reset**
   - Sends a password recovery link to the user's email if they forget their password.
   - Resets the password after the user clicks the recovery link.

### 4. **Change Password**
   - Allows users who are logged in to change their password.

### 5. **OTP Functions**
   - **Send OTP**: Sends an OTP for registration or verification.
   - **Verify OTP**: Validates the OTP provided by the user.

### 6. **JWT Authentication Middleware**
   - Protects routes and ensures that only authenticated users can access certain endpoints.

## Prerequisites

- **Node.js** (>=14.x.x)
- **npm** (or **yarn**)
- A **MongoDB** instance for user data storage.
- **nodemailer** for sending OTP and password reset emails.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies
Make sure Node.js is installed, then install the necessary packages:

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root of the project and define the following environment variables:

```bash
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT secret key>
EMAIL_HOST=<Your email host>
EMAIL_PORT=<Your email port>
EMAIL_USER=<Your email username>
EMAIL_PASS=<Your email password>
```

### 4. Run the Development Server

To start the backend server:

```bash
node index.js
```

This will start the backend API on `http://localhost:5000`.

## File Structure

```plaintext
backend/
│
├── controllers/               
│   ├── changePassword.js        
│   ├── checkLoginOnStart.js     
│   ├── forgotPassword.js        
│   ├── loginUser.js           
│   ├── logoutUser.js            
│   ├── registerUser.js         
│   ├── resetPassword.js         
│   └── sendOtp.js              
│
├── middlewares/                
│   ├── checkAuth.js             
│   └── verifyOtp.js       
│
├── models/                      
│   ├── Otp.js                   
│   ├── PasswordResetToken.js    
│   └── User.js                
│
├── node_modules/              
├── routes/                     
│   └── authRoutes.js           
│
├── .gitignore                 
├── .env                         
├── index.js                   
├── package-lock.json            
├── package.json                
└── README.md                   
```

## API Endpoints

### Authentication

- **POST /api/register**: Registers a new user and sends OTP for verification.
- **POST /api/login**: Authenticates the user and returns a JWT token.
- **POST /api/forgot-password**: Sends a password reset link to the user's email.
- **POST /api/reset-password**: Resets the password.
- **PUT /api/change-password**: Allows logged-in users to change their password.

### OTP

- **POST /api/send-otp**: Sends an OTP for registration or login verification.
- **POST /api/verify-otp**: Verifies the OTP sent to the user.

### Middleware

- **checkAuth**: Middleware that checks whether the user is authenticated using JWT.

## Testing the Application

1. **User Registration**: Test by registering a new user and verifying OTP.
2. **User Login**: Test the login functionality using username or email.
3. **Password Reset**: Test the "Forgot Password" functionality.
4. **Password Change**: Test changing the password after successful login.

## Tech Stack

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **JWT (JSON Web Token)**: For secure user authentication.
- **Nodemailer**: For sending emails (OTP, password reset links).
- **Bcrypt.js**: For securely hashing passwords.


## Acknowledgments

- **Express.js** for the web framework.
- **MongoDB** for the database solution.
- **JWT** for secure authentication.
- **Nodemailer** for email integration.
