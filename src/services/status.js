import config from '../config';
import http from '../utils/http';

export const STATUS_UP = 'up';
export const STATUS_DOWN = 'down';
export const STATUS_UP_CLASS = 'status-up';
export const STATUS_UP_MESSAGE = 'Operational';
export const STATUS_DOWN_CLASS = 'status-down';
export const STATUS_DOWN_MESSAGE = 'Major Outage';

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
