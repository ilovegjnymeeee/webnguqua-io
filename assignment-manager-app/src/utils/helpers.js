export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const validateInput = (input) => {
    return input && input.trim() !== '';
};

export const calculateScore = (correctAnswers, totalQuestions) => {
    return ((correctAnswers / totalQuestions) * 100).toFixed(2);
};