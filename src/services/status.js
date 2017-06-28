import config from '../config';
import http from '../utils/http';
import Outage from '../enums/Outage';

const STATUS_UP = 'up';
const STATUS_DOWN = 'down';
const STATUS_UP_CLASS = 'status-up';
const STATUS_DOWN_CLASS = 'status-down';
const STATUS_UP_MESSAGE = 'Operational';
const STATUS_DOWN_MESSAGE = 'Major Outage';
const ALL_STATUS_DOWN_MESSAGE = 'Major System Outage';
const ALL_STATUS_UP_MESSAGE = 'All Systems Operational';
const PARTIAL_STATUS_DOWN_CLASS = 'status-partial-down';
const PARTIAL_STATUS_DOWN_MESSAGE = 'Partial System Outage';

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
 * @returns {Outage}
 */
export function getSystemStatus(services) {
  if (services.every(service => isUp(service))) {
    return Outage.NONE;
  }
  if (services.every(service => !isUp(service))) {
    return Outage.ALL;
  }

  return Outage.PARTIAL;
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
      className: STATUS_DOWN_CLASS,
      message: STATUS_DOWN_MESSAGE
    };
  }

  return {
    className: STATUS_UP_CLASS,
    message: STATUS_UP_MESSAGE
  };
}

/**
 * Get required parameters to render the status panel.
 * 
 * @param {Outage} outage 
 */
export function getOutageParams(outage) {
  switch (outage) {
    case Outage.NONE:
      return {
        className: STATUS_UP_CLASS,
        message: ALL_STATUS_UP_MESSAGE
      };

    case Outage.PARTIAL:
      return {
        className: PARTIAL_STATUS_DOWN_CLASS,
        message: PARTIAL_STATUS_DOWN_MESSAGE
      };

    case Outage.ALL:
      return {
        className: STATUS_DOWN_CLASS,
        message: ALL_STATUS_DOWN_MESSAGE
      };
  }
}
