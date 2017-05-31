import Boom from 'boom';
import StatusLog from '../models/StatusLog';

/**
 * Get all status logs.
 *
 * @return {Promise}
 */
export function getAllStatusLogs() {
  return StatusLog.fetchAll();
}

/**
 * Fetch latest status logs.
 *
 * @param  {String} id
 * @return {Promise}
 */
export function fetchLatestStatusLogs() {
  return StatusLog.fetchLatestStatusLogs();
}

/**
 * Get a service status.
 *
 * @param  {string|Number}  id
 * @return {Promise}
 */
export async function getStatus(id) {
  return await new StatusLog({ id }).fetch()
    .then(status => {
      if (!status) {
        throw new Boom.notFound('Service not found');
      }

      return status;
    });
}
