import axios from 'axios';
import config from '../config';

const statusUrl = `${config.API_ENDPOINT}/api/status`;

export function getAll() {
  return axios.get(statusUrl);
}
