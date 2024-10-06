// useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Ensure this path is correct

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (!currentUser) {
                navigate('/', { replace: true }); // Redirect to home if no user is found
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [navigate]);
};

export default useAuth;
