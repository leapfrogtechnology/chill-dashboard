import React, { Component } from 'react';

import * as httpUtil from '../utils/httpUtil';

const TOKEN_URL = 'localhost:8000/api/auth/google';

export function fetchToken() {
  return httpUtil.get(TOKEN_URL);
}
  
