const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  devServer: {
    before: function (app) {
      app.use(
        '/blogs',
        createProxyMiddleware({
          target: 'https://dashboard.taufiqproject.my.id',
          changeOrigin: true,
        })
      );
    },
  },
};
