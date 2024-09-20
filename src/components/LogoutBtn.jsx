import React from 'react';
import { useAuth } from './Auth/AuthContext'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';

const LogoutBtn = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout(); // Ensure the logout function returns a promise if it involves async operations
            notification.success({
                message: 'Logout Successful',
                description: 'You have been logged out.',
                placement: 'top',
                duration: 0.5, // Notification will hide after 0.5 seconds
                style: {
                    transition: 'transform 0.5s ease-in-out',
                    transform: 'translateY(0)',
                },
                onClose: () => {
                    navigate('/login'); // Redirect to login page after the notification disappears
                },
            });
        } catch (error) {
            notification.error({
                message: 'Logout Failed',
                description: 'There was an issue logging you out. Please try again.',
                placement: 'top',
                duration: 0.5, // Notification will hide after 0.5 seconds
                style: {
                    transition: 'transform 0.5s ease-in-out',
                    transform: 'translateY(0)',
                },
            });
        }
    };

    return (
        <button onClick={handleLogout} className="btn btn-danger">
            Logout
        </button>
    );
};

export default LogoutBtn;
