import axios from 'axios';

const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8080/api/auth/register', userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Registration successful:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Error response:', error.response.data);
            return error.response.data; // Thông tin lỗi từ backend
        } else {
            console.error('Error:', error.message);
            return 'Something went wrong!';
        }
    }
};

export default registerUser;
