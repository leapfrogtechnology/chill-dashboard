import config from '../config';
import http from '../utils/http';

/**
 * Token from google server
 * @param {*} tokenId
 * @returns {data}
 */

export async function login(tokenId) {
  const { endpoints } = config.api;

  try {
    const { data } = await http.post(endpoints.auth, {
      tokenId
    });

    localStorage.setItem('accesToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);

    return data;
  } catch (err) {
    return err;
  }
}
