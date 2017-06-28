import { sprintf } from 'sprintf-js';

import config from '../config';
import http from '../utils/http';

import * as outage from '../enums/outage';
import * as statusConstants from '../constants/statusConstants';

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
export function isUp(service) {
  return service.status === statusConstants.STATUS_UP;
}

/**
 * Get the total counts of the status of services.
 *
 * @param {Array} services
 * @returns {Object}
 */
export function getServiceCounts(services) {
  let total = services.length;
  let totalUp = services.filter(isUp).length;
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
  if (services.every(service => isUp(service))) {
    return outage.NONE;
  }
  if (services.every(service => !isUp(service))) {
    return outage.ALL;
  }

  return outage.PARTIAL;
}

/**
 * Get required parameters to render services.
 * 
 * @param {Boolean} isOperational 
 * @returns {Object} {message, className}
 */
export function getServiceParams(isOperational) {
  if (!isOperational) {
    return {
      className: statusConstants.STATUS_DOWN_CLASS,
      message: statusConstants.STATUS_DOWN_MESSAGE
    };
  }

  return {
    className: statusConstants.STATUS_UP_CLASS,
    message: statusConstants.STATUS_UP_MESSAGE
  };
}

/**
 * Get required parameters to render the status panel.
 * 
 * @param {Array} services 
 * @returns {Object} {message, className}
 */
export function getOutageParams(services) {
  let outageLevel = getOutageLevel(services);
  let { total, totalUp } = getServiceCounts(services);

  switch (outageLevel) {
    case outage.NONE:
      return {
        className: statusConstants.STATUS_UP_CLASS,
        message: statusConstants.ALL_STATUS_UP_MESSAGE
      };

    case outage.PARTIAL:
      return {
        className: statusConstants.PARTIAL_STATUS_DOWN_CLASS,
        message: sprintf(statusConstants.PARTIAL_STATUS_DOWN_MESSAGE, { totalUp, total })
      };

    case outage.ALL:
      return {
        className: statusConstants.STATUS_DOWN_CLASS,
        message: statusConstants.ALL_STATUS_DOWN_MESSAGE
      };
  }
}
