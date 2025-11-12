import React, { useEffect, useState } from 'react';
import AssignmentList from '../components/AssignmentList';
import { fetchAssignments } from '../services/api';

const Practice = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAssignments = async () => {
            try {
                const data = await fetchAssignments();
                setAssignments(data);
            } catch (err) {
                setError('Failed to load assignments');
            } finally {
                setLoading(false);
            }
        };

        loadAssignments();
    }, []);

    if (loading) {
        return <div>Loading assignments...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Practice Assignments</h1>
            <AssignmentList assignments={assignments} />
        </div>
    );
};

export default Practice;