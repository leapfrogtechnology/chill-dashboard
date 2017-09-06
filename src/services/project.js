import { sprintf } from 'sprintf-js';

import config from '../config';
import http from '../utils/http';

import * as icons from '../constants/icons';
import * as statusmessage from '../constants/statuses';
import * as outage from '../constants/enums/outage';

/**
 *
 * @param {*} tokenId
 * @returns {data}
 */

export async function fetchProjectServices(tokenId) {
  console.log(tokenId);
  const { endpoints } = config.api;

  try {
    const { data } = await http.post(endpoints.auth, {
      tokenId
    });

    console.log(tokenId);

    console.log('access token ', data);
    console.log(data.accessToken);
    localStorage.setItem('accesToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);

    return data;
  } catch (err) {
    return next(err);
  }
}
// const checkAuth = () => {
//   const refreshToken= localStorage.getItem('refreshToken');
//   const accessToken = localStorage.getItem('accessToken');
//   if(!accessToken || !refreshToken){
//     return false;
//   }
//   try{
//     const {exp} = decode(refreshToken);
//     if(exp <new Date().getTime()/1000){
//       return false;
//     }catch(err){
//       return false;
//     }
//     return true;
// }
