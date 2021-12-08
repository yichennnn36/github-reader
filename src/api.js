const BASE_URL = `https://api.github.com`;
const name = `yichennnn36`;

export const fetchData = async (perPage, page) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${name}/repos?per_page=${perPage}&page=${page}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (response.status >= 200 && response.status < 400) return response.json();
    return;
  } catch (error) {
    alert('操作失敗，發生錯誤');
  }
};

export const fetchDataCount = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/${name}/repos`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    if (response.status >= 200 && response.status < 400) return response.json();
    return;
  } catch (error) {
    alert('操作失敗，發生錯誤');
  }
};