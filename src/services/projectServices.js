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

export function update(id, data) {
  let options = {
    method: 'PUT',
    url: `${config.api.endpoints.updateproject}/${id}`,
    data: data
  };

  return http(addToken(options));
}

export function remove(id) {
  let options = {
    method: 'DELETE',
    url: `${config.api.endpoints.removeproject}/${id}`
  };

  return http(addToken(options));
}

export function getuserinfo() {
  let options = {
    method: 'GET',
    url: config.api.endpoints.userinfo
  };
  
  return http(addToken(options));
}
