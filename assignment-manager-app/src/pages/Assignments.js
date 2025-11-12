import React, { useState, useEffect } from 'react';
import AssignmentForm from '../components/AssignmentForm';
import AssignmentList from '../components/AssignmentList';
import { fetchAssignments, addAssignment } from '../services/api';

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const loadAssignments = async () => {
            const data = await fetchAssignments();
            setAssignments(data);
        };
        loadAssignments();
    }, []);

    const handleAddAssignment = async (newAssignment) => {
        const addedAssignment = await addAssignment(newAssignment);
        setAssignments([...assignments, addedAssignment]);
    };

    return (
        <div className="assignments-page">
            <h1>Assignments</h1>
            <AssignmentForm onAddAssignment={handleAddAssignment} />
            <AssignmentList assignments={assignments} />
        </div>
    );
};

export default Assignments;