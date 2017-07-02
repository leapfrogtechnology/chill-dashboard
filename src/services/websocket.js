import config from '../config';

const CONNECTION_ESTABLISHED_EVENT = 'ws-connection-establish';

let ws = new WebSocket(config.api.websocketEndpoint);

export default function initializeWebSocket(onMessage) {
  connectWebSocket(onMessage);
}

/**
 * Connect to the websocket endpoint
 *
 * @param onMessage
 */
function connectWebSocket(onMessage) {
  ws.onclose = function () {
    setTimeout(() => {
      connectWebSocket(onMessage);
    }, 5000);
  };

  ws.onmessage = function (event) {
    let message = JSON.parse(event.data);

    // Do not call callback function for connection established event
    if (message.event !== CONNECTION_ESTABLISHED_EVENT) {
      onMessage(message);
    }
  };
}
