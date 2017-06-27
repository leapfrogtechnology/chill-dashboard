module.exports = {
  app: {
    logoUrl: process.env.APP_LOGO,
    logoHeight: process.env.APP_LOGO_HEIGHT || '80px'
  },
  api: {
    baseUrl: process.env.API_ENDPOINT || 'http://localhost:8000',
    endpoints: {
      status: '/api/status'
    }
  }
};
