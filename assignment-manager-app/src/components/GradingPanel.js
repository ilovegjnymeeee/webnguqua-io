import React, { useState } from 'react';

const GradingPanel = ({ assignments }) => {
    const [grades, setGrades] = useState({});

    const handleGradeChange = (assignmentId, grade) => {
        setGrades({
            ...grades,
            [assignmentId]: grade,
        });
    };

    const calculateScore = (assignment) => {
        // Logic to calculate score based on assignment and user input
        return grades[assignment.id] || 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to submit grades, e.g., sending to an API
        console.log('Grades submitted:', grades);
    };

    return (
        <div className="grading-panel">
            <h2>Grading Panel</h2>
            <form onSubmit={handleSubmit}>
                {assignments.map((assignment) => (
                    <div key={assignment.id} className="assignment-grade">
                        <label>
                            {assignment.title}:
                            <input
                                type="number"
                                value={grades[assignment.id] || ''}
                                onChange={(e) => handleGradeChange(assignment.id, e.target.value)}
                                min="0"
                                max="100"
                            />
                        </label>
                        <p>Score: {calculateScore(assignment)}</p>
                    </div>
                ))}
                <button type="submit">Submit Grades</button>
            </form>
        </div>
    );
};

export default GradingPanel;