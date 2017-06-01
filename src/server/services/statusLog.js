import Boom from 'boom';
import StatusLog from '../models/StatusLog';

/**
 * Get all status logs.
 *
 * @return {Promise}
 */
export function fetchLogs() {
  return StatusLog.fetchAll();
}

/**
 * Fetch latest status logs.
 *
 * @return {Promise}
 */
export function fetchLatestStatusLogs() {
  return StatusLog.fetchLatestStatusLogs();
}

/**
 * Get a service status.
 *
 * @param  {String|Number}  id
 * @return {Promise}
 */
export async function getStatus(id) {
  let status = await new StatusLog({ id }).fetch();

  if (!status) {
    throw new Boom.notFound('Service not found');
  }

  return status;
}
