import React from 'react';
import useLogout from '../../components/Firebase/logout'; 
import useAuth from '../../components/Firebase/useAuth';

const ExampleComponent = () => {
    useAuth();
    const logout = useLogout();

    const handleLogout = () => {
        logout(); 
    };

    return (
        <div>
            <h1>Welcome to the Example Component</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ExampleComponent;
