export default {
  app: {
    baseHref: __INJECTED_CONFIG.baseHref || '/',
    logoHeight: __INJECTED_CONFIG.logoHeight || '80px',
    title: __INJECTED_CONFIG.title || 'Chill Dashboard',
    logoUrl: __INJECTED_CONFIG.logo || require('../public/images/chill.png')
  },
  api: {
    endpoints: {
      status: '/api/status'
    },
    baseUrl: __INJECTED_CONFIG.apiBaseUrl || 'http://localhost:8000'
  },
  websocket: {
    reconnectTimeout: 5000,
    endpoint: __INJECTED_CONFIG.websocketBaseUrl || 'ws://localhost:8080'
  }
};
