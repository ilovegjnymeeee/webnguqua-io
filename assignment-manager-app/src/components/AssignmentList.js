import React from 'react';
import { calculateScore } from '../utils/helpers';

const AssignmentItem = ({ assignment, onEdit, onDelete }) => {
    return (
        <li className="assignment-list-item">
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <div className="assignment-actions">
                <button className="button" onClick={() => onEdit(assignment.id)}>
                    Edit
                </button>
                <button className="button" onClick={() => onDelete(assignment.id)}>
                    Delete
                </button>
                {assignment.score && (
                    <span className="score">Score: {assignment.score}%</span>
                )}
            </div>
        </li>
    );
};

export default AssignmentItem;

const AssignmentList = ({ assignments = [] }) => {
    const handleEdit = (id) => {
        // Handle edit functionality
        console.log('Edit assignment:', id);
    };

    const handleDelete = (id) => {
        // Handle delete functionality
        console.log('Delete assignment:', id);
    };

    return (
        <div className="assignment-list">
            <h2>Assignments</h2>
            {assignments.length === 0 ? (
                <p>No assignments available.</p>
            ) : (
                <ul className="assignment-list">
                    {assignments.map(assignment => (
                        <AssignmentItem 
                            key={assignment.id} 
                            assignment={assignment}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AssignmentList;