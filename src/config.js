module.exports = {
  api: {
    baseUrl: process.env.API_ENDPOINT || 'http://localhost:8000',
    endpoints: {
      status: '/api/status'
    }
  }
};
