import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const REPO_OWNER = 'your-username'; // Replace with your GitHub username
const REPO_NAME = 'assignment-manager-app'; // Replace with your repository name
const ACCESS_TOKEN = 'your-access-token'; // Replace with your GitHub access token

const githubService = {
    authenticate() {
        // Authentication logic can be added here if needed
    },

    async uploadAssignmentData(data) {
        try {
            const response = await axios.post(
                `${GITHUB_API_URL}/repos/${REPO_OWNER}/${REPO_NAME}/contents/assignments/${data.id}.json`,
                {
                    message: `Upload assignment ${data.title}`,
                    content: btoa(JSON.stringify(data)), // Convert data to base64
                },
                {
                    headers: {
                        Authorization: `token ${ACCESS_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error uploading assignment data:', error);
            throw error;
        }
    },
};

export default githubService;