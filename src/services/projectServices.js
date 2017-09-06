import http from '../utils/http';

export function fetch() {
  return http({
    url: `http://localhost:8000/api/self/projects`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`
    }
  });
}
