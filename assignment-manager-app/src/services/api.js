import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const fetchAssignments = async () => {
    try {
        const response = await axios.get(`${API_URL}/assignments`);
        return response.data;
    } catch (error) {
        console.error('Error fetching assignments:', error);
        throw error;
    }
};

export const addAssignment = async (assignment) => {
    try {
        const response = await axios.post(`${API_URL}/assignments`, assignment);
        return response.data;
    } catch (error) {
        console.error('Error adding assignment:', error);
        throw error;
    }
};

export const updateAssignment = async (id, updatedAssignment) => {
    try {
        const response = await axios.put(`${API_URL}/assignments/${id}`, updatedAssignment);
        return response.data;
    } catch (error) {
        console.error('Error updating assignment:', error);
        throw error;
    }
};