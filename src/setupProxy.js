const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://193.46.199.249:5354/',
      changeOrigin: true,
    })
  );
};