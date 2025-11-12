import React from 'react';
import { useSelector } from 'react-redux';
import AssignmentItem from './AssignmentItem';

const AssignmentList = () => {
    const assignments = useSelector(state => state.assignments);

    return (
        <div className="assignment-list">
            <h2>Assignments</h2>
            {assignments.length === 0 ? (
                <p>No assignments available.</p>
            ) : (
                <ul>
                    {assignments.map(assignment => (
                        <AssignmentItem key={assignment.id} assignment={assignment} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AssignmentList;