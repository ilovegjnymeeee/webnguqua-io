import React, { useState, useEffect } from 'react';
import GradingPanel from '../components/GradingPanel';
import { fetchAssignments } from '../services/api';

const Grading = () => {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAssignments = async () => {
            try {
                const data = await fetchAssignments();
                setAssignments(data);
            } catch (error) {
                console.error("Error fetching assignments:", error);
            } finally {
                setLoading(false);
            }
        };

        loadAssignments();
    }, []);

    if (loading) {
        return <div>Loading assignments...</div>;
    }

    return (
        <div className="grading-page">
            <h1>Grading Assignments</h1>
            {assignments.length === 0 ? (
                <p>No assignments available for grading.</p>
            ) : (
                assignments.map(assignment => (
                    <GradingPanel key={assignment.id} assignment={assignment} />
                ))
            )}
        </div>
    );
};

export default Grading;