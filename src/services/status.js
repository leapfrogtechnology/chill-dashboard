import config from '../config';
import http from '../utils/http';

const STATUS_UP = 'up';
const STATUS_DOWN = 'down';
const STATUS_UP_CLASS = 'status-up';
const STATUS_DOWN_CLASS = 'status-down';
const STATUS_UP_MESSAGE = 'Operational';
const STATUS_DOWN_MESSAGE = 'Major Outage';
const ALL_STATUS_DOWN_MESSAGE = 'Major System Outage';
const ALL_STATUS_UP_MESSAGE = 'All Systems Operational';

/**
 * Get the latest status of the services.
 *
 * @export
 * @returns
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
  return service.status === STATUS_UP;
}

/**
 * Get the total counts of the services using their statuses.
 *
 * @param {Array} services
 * @returns {Object}
 */
export function getServiceCountsByStatus(services) {
  let totalRunning = services.filter(isUp).length;
  let totalStopped = services.length - totalRunning;

  return { totalRunning, totalStopped };
}

/**
 * Check if any of the service is non operational.
 * 
 * @param {Array} services 
 * @returns {Boolean}
 */
export function isOperational(services) {
  for (let service of services) {
    if (!isUp(service)) {
      return false;
    }
  }

  return true;
}

/**
 * Get required parameters to render the status panel.
 * 
 * @param {Boolean} isOperational 
 * @param {Boolean} hasFullMessage
 * @returns {Object} {message, className}
 */
export function getRenderParams(isOperational, hasFullMessage = false) {
  if (!isOperational) {
    return {
      className: STATUS_DOWN_CLASS,
      message: hasFullMessage ? ALL_STATUS_DOWN_MESSAGE : STATUS_DOWN_MESSAGE
    };
  }

  return {
    className: STATUS_UP_CLASS,
    message: hasFullMessage ? ALL_STATUS_UP_MESSAGE : STATUS_UP_MESSAGE
  };
}
