// src/components/GoogleButton/GoogleButton.js
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGoogle } from 'react-icons/fa'; // Importing Google icon
import { auth } from '../Firebase/firebase';

const GoogleButton = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in: ', result.user); // You can handle the user info as needed
    } catch (error) {
      console.error('Error during Google sign-in: ', error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline-primary d-flex align-items-center justify-content-center"
        style={{
          borderRadius: '8px',
          padding: '8px 16px',
          fontSize: '14px',
          width: '100%',
          height: '50px'
        }}
      >
        <FaGoogle className="me-2" />
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleButton;
