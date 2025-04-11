import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css'; // Make sure this path is correct

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!user) {
        return (
            <div className="profile-layout">
                <h1>Please log in to access the dashboard.</h1>
                <button onClick={() => navigate('/login')}>Go to Login</button>
            </div>
        );
    }

    return (
        <div className="profile-layout">
            <div className="profile-container">
                <div className="profile-avatar">
                    {user.firstName?.charAt(0)}
                </div>
                <div className="profile-title">Hello, {user.firstName + " " + user.lastName}!</div>
                <div className="profile-email">{user.email}</div>
                <div className="profile-message">
                    Here you can manage your movie rentals, explore new releases, and personalize your account.
                </div>
                <button className="profile-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
