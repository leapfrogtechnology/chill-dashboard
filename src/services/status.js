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
export async function fetchServiceStatuses(tokenId) {
  const { endpoints } = config.api;

  try {
    const { data } = await http.post(endpoints.auth, {
      tokenId
    });

    return data;
  } catch (err) {
    return next(err);
  }
}

export async function fetchLogs() {
  const { endpoints } = config.api;
  const { data } = await http.get(endpoints.statusLogs);

  return data;
}

/**
 * Check if a service is up by it's status.
 *
 * @param {Object} status
 * @returns {Boolean}
 */
export function isUp(status) {
  if (status.name === statusmessage.STATUS_UP) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Get the total counts of the status of services.
 *
 * @param {Array} services
 * @returns {Object}
 */
export function getServiceCounts(services) {
  let total = services.length;
  let totalUp = 0;

  services.map(service => {
    totalUp = totalUp + isUp(service.status);
  });

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
  if (services.every(service => isUp(service.status))) {
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
      className: statusmessage.STATUS_DOWN_CLASS,
      message: statusmessage.STATUS_DOWN_MESSAGE
    };
  }

  return {
    icon: icons.INFO,
    className: statusmessage.STATUS_UP_CLASS,
    message: statusmessage.STATUS_UP_MESSAGE
  };
}

/**
 * Get required parameters to render the status panel.
 *
 * @param {Array} statuses
 * @returns {Object} {message, className}
 */
export function getOutageParams(statuses) {
  let outageLevel = getOutageLevel(statuses);
  let { total, totalUp } = getServiceCounts(statuses);

  switch (outageLevel) {
    case outage.NONE:
      return {
        className: statusmessage.STATUS_UP_CLASS,
        message: statusmessage.ALL_STATUS_UP_MESSAGE
      };

    case outage.PARTIAL:
      return {
        className: statusmessage.PARTIAL_STATUS_DOWN_CLASS,
        message: sprintf(statusmessage.PARTIAL_STATUS_DOWN_MESSAGE, {
          totalUp,
          total
        })
      };

    case outage.ALL:
      return {
        className: statusmessage.STATUS_DOWN_CLASS,
        message: statusmessage.ALL_STATUS_DOWN_MESSAGE
      };
  }
}
