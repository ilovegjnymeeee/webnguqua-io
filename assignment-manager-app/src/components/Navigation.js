import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/assignments">Assignments</Link>
                </li>
                <li>
                    <Link to="/practice">Practice</Link>
                </li>
                <li>
                    <Link to="/grading">Grading</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;