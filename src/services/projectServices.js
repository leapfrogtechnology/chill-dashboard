import http from '../utils/http';
import { addToken } from './token';
import config from '../config';

export function fetch() {
  let options = {
    url: config.api.endpoints.projects,
    method: 'GET'
  };

  return http(addToken(options));
}

export function add(data) {
  let options = {
    method: 'POST',
    url: config.api.endpoints.addproject,
    data: data
  };

  return http(addToken(options));
}
