export default {
  app: {
    baseHref: __INJECTED_CONFIG.baseHref || '/',
    title: __INJECTED_CONFIG.title || 'Chill Dashboard',
    logoUrl: __INJECTED_CONFIG.logo || require('../public/images/chill.png'),
    logoHeight: __INJECTED_CONFIG.logoHeight || '80px'
  },
  api: {
    baseUrl: __INJECTED_CONFIG.apiBaseUrl || 'http://localhost:8000',
    endpoints: {
      status: '/api/status'
    }
  },
  websocket: {
    endpoint: __INJECTED_CONFIG.websocketBaseUrl || 'ws://localhost:8080',
    reconnectTimeout: 5000
  }
};
