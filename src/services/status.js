import { sprintf } from 'sprintf-js';

import config from '../config';
import http from '../utils/http';

import * as icons from '../constants/icons';
import * as mess from '../constants/statuses';
import * as outage from '../constants/enums/outage';

/**
 * Get the latest status of the services.
 *
 * @returns {Promise}
 */
export async function fetchServiceStatuses() {
  const { endpoints } = config.api;
  const { data } = await http.get(endpoints.status);

  return data;
}

/**
 * Check if a service is up by it's status.
 *
 * @param {Object} service
 * @returns {Boolean}
 */
export function isUp(status) {
  console.log(status);

  // console.log(mess.STATUS_UP);
  console.log(status.name === mess.STATUS_UP)
  if(status.name === mess.STATUS_UP)
     {
  return 1;
    }
else{
  return 0 ;
}
  // console.log(status.name);

}

/**
 * Get the total counts of the status of services.
 *
 * @param {Array} services
 * @returns {Object}
 */
export function getServiceCounts(services) {
  let total = services.length;
  // console.log(services.length);
  
  let totalUp = 0;
  
  services.map(service =>{
    totalUp = totalUp + isUp(service.status);
    console.log(totalUp);
  });
  

  console.log("total up:",totalUp);
  let totalDown = total - totalUp;
  return {
    total,
    totalUp,
    totalDown
  };
}
/**
 * Check outage status.
 *
 * @param {Array} services
 * @returns {Number} outage
 */
export function getOutageLevel(services) {
  // console.log(services);

  if (services.every(service => isUp(service.status))) {
    // console.log(services);
    return outage.NONE;
  }
  if (services.every(service => !isUp(service.status))) {
    return outage.ALL;
  }

  return outage.PARTIAL;
}

/**
 * Get required parameters to render services.
 *
 * @param {Boolean} isOperational
 * @returns {Object} {icon, message, className}
 */
export function getServiceParams(isOperational) {
  
  if (!isOperational) {

    return {
      icon: icons.EXCLAMATION,
      className: mess.STATUS_DOWN_CLASS,
      message: mess.STATUS_DOWN_MESSAGE
    };
          console.log ("class ",message);

  }

  return {
    icon: icons.INFO,
    className: mess.STATUS_UP_CLASS,
    message: mess.STATUS_UP_MESSAGE
  };
}

/**
 * Get required parameters to render the status panel.
 *
 * @param {Array} services
 * @returns {Object} {message, className}
 */
export function getOutageParams(statuses) {
  // console.log(statuses);
  let outageLevel = getOutageLevel(statuses);
  
  // console.log ("I am outagelevel ",outageLevel);
  
  let { total, totalUp } = getServiceCounts(statuses);
  console.log (statuses);

  switch (outageLevel) {
    case outage.NONE:
      return {

        className: mess.STATUS_UP_CLASS,
        message: mess.ALL_STATUS_UP_MESSAGE
      };

    case outage.PARTIAL:
      return {
        
        className: mess.PARTIAL_STATUS_DOWN_CLASS,
        message: sprintf(mess.PARTIAL_STATUS_DOWN_MESSAGE, { totalUp, total })
      };

    case outage.ALL:
     console.log(mess.STATUS_DOWN_CLASS);
    //  console.log(statuses.ALL_STATUS_DOWN_MESSAGE);
      return {
       
        className: mess.STATUS_DOWN_CLASS,
        
        message: mess.ALL_STATUS_DOWN_MESSAGE
      };
      console.log(statuses.ALL_STATUS_DOWN_MESSAGE);


  }
}
