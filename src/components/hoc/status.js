import { update } from 'ramda';
import { compose, withState, withHandlers } from 'recompose';

/**
 * HOC that wraps the status page component with state
 * containing latest status of services.
 */
export const withStatusInfo = compose(
  withState('status', 'setStatus', {
    services: [],
    isLoading: false
  }),
  withHandlers({
    /**
     * Update the current status of services.
     */
    updateStatus: ({ status, setStatus }) => (newStatus) => {
      let updatedStatus = Object.assign({}, status, newStatus);

      setStatus(updatedStatus);
    },

    /**
     * Handle websocket status change notifcation.
     */
    handleWebSocketNotification: ({ status, setStatus }) => (e, data) => {
      // Updates the only the updated service data in the services list (Immutable).
      let index = status.services.findIndex(item => item.name === data.name);
      let services = update(index, Object.assign({}, status.services[index], data), status.services);

      setStatus(Object.assign({}, status, { services }));
    }
  })
);
