export default {
  app: {
    baseHref: process.env.BASE_HREF || '/',
    title: process.env.APP_TITLE || 'Chill Dashboard',
    logoUrl: process.env.APP_LOGO || require('../public/images/chill.png'),
    logoHeight: process.env.APP_LOGO_HEIGHT || '80px'
  },
  api: {
    baseUrl: process.env.API_ENDPOINT || 'http://localhost:8000',
    endpoints: {
      status: '/api/status'
    }
  },
  websocket: {
    endpoint: process.env.WEBSOCKET_ENDPOINT || 'ws://localhost:8080',
    reconnectTimeout: 5000
  }
};
