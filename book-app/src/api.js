
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api';

export const getBooks = async () => {
  try {
    const response = await axios.get(`${apiUrl}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const getAuthors = async () => {
  try {
    const response = await axios.get(`${apiUrl}/authors`);
    return response.data;
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
};



