import Boom from 'boom';
import Status from '../models/Status';

/**
 * Get all status.
 *
 * @return {Promise}
 */
export async function getAllStatus() {
  return await Status.fetchAll();
}

/**
 * Fetch a service by its name.
 *
 * @param  {String} id
 * @return {Promise}
 */
export async function fetchByName(name) {
  return await new Status({ name }).groupBy('name').orderBy('created_at', 'DSC').fetch().attributes;
}

/**
 * Get a service status.
 *
 * @param  {string|Number}  id
 * @return {Promise}
 */
export async function getStatus(id) {
  return await new Status({ id }).fetch()
    .then(status => {
      if (!status) {
        throw new Boom.notFound('Service not found');
      }

      return status;
    });
}
