import config from '../config';

const CONNECTION_ESTABLISHED_EVENT = 'ws-connection-establish';

let ws;
let handlers = {};

/**
 * Initialize Websocket client.
 *
 * @param {Object} handlers
 */
export function initialize(handlers) {
  if (!ws) {
    connect(handlers);
  }
}

/**
 * Connect to the websocket endpoint.
 *
 * @param {Object} handlers
 */
function connect(eventHandlers) {
  ws = new WebSocket(config.websocket.endpoint);
  handlers = eventHandlers || {};

  ws.onclose = handleClose;
  ws.onmessage = handleMessage;
}

/**
 * Handle websocket incomming message.
 *
 * @param {Object} e
 */
function handleMessage(e) {
  let data = JSON.parse(e.data);

  // Do not call callback function for connection established event
  if (data.event !== CONNECTION_ESTABLISHED_EVENT) {
    handlers.onMessage(e, data);
  }
}

/**
 * Handle websocket connection closed.
 *
 * @param {Object} e
 */
function handleClose() {
  setTimeout(() => {
    connect(handlers);
  }, config.websocket.reconnectTimeout);
}

