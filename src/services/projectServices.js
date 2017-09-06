import React from 'react';
import config from '../config';
import http from '../utils/http';

export function fetch() {
  const { endpoints } = config.api;

  return http({
    // url: endpoints + `/self/projects`,
    url: `http://localhost:8000/api/self/projects`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accesToken')}`
    }
  });
}
