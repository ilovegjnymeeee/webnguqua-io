import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                <li style={{ margin: '0 15px' }}>
                    <Link to="/">Dashboard</Link>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <Link to="/assignments">Assignments</Link>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <Link to="/practice">Practice</Link>
                </li>
                <li style={{ margin: '0 15px' }}>
                    <Link to="/grading">Grading</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;