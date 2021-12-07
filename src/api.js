require('dotenv').config();
const BASE_URL = process.env.REACT_APP_URL;
const TOKEN = process.env.REACT_APP_TOKEN;

export const fetchData = async (perPage, page) => {
  try {
    const response = await fetch(`${BASE_URL}/users/yichennnn36/repos?per_page=${perPage}&page=${page}`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      method: 'GET'
    });
    return response.json();
  } catch (error) {
    alert('操作失敗，發生錯誤');
    console.log('error', error);
  }
};

export const fetchDataCount = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/yichennnn36/repos`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      method: 'GET'
    });
    return response.json();
  } catch (error) {
    alert('操作失敗，發生錯誤');
    console.log('error', error);
  }
};