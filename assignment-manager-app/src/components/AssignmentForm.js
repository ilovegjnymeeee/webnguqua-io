import React, { useState } from 'react';
import { addAssignment } from '../services/api';
import { uploadToGitHub } from '../services/github';

const AssignmentForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [answers, setAnswers] = useState(['']);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const addAnswerField = () => {
        setAnswers([...answers, '']);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const assignmentData = { title, description, answers };
        
        try {
            await addAssignment(assignmentData);
            await uploadToGitHub(assignmentData);
            // Reset form fields
            setTitle('');
            setDescription('');
            setAnswers(['']);
        } catch (error) {
            console.error('Error adding assignment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Answers:</label>
                {answers.map((answer, index) => (
                    <input
                        key={index}
                        type="text"
                        value={answer}
                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                        required
                    />
                ))}
                <button type="button" onClick={addAnswerField}>
                    Add Answer
                </button>
            </div>
            <button type="submit">Submit Assignment</button>
        </form>
    );
};

export default AssignmentForm;