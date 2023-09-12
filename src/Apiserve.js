import axios from 'axios';

const jsonPlaceholderApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// 獲取前5個帖子
export const getPosts = async () => {
  try {
    const response = await jsonPlaceholderApi.get('/posts', {
      params: {
        _limit: 5,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};