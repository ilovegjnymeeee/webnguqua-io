import React from 'react';
import AssignmentList from '../components/AssignmentList';
import Navigation from '../components/Navigation';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navigation />
            <h1>Welcome to the Assignment Manager</h1>
            <p>Your one-stop solution for managing assignments and grading.</p>
            <h2>Overview of Assignments</h2>
            <AssignmentList />
        </div>
    );
};

export default Dashboard;