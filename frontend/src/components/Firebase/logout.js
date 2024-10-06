// useLogout.js
import { useCallback } from 'react';
import { auth } from './firebase'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const navigate = useNavigate();

    const logoutUser = useCallback(async () => {
        try {
            await auth.signOut();
            console.log("User logged out successfully");
            navigate('/', { replace: true }); // Navigate to home after logging out
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }, [navigate]);

    return logoutUser; // Return the logout function
};

export default useLogout;
