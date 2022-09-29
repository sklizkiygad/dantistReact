const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
	app.use(
		'/accounts/register/',
		createProxyMiddleware({
			target: 'https://praktikd.halal-rabota.ru',
			changeOrigin: true,
			secure: false,
		}),
	)
	app.use(
		'/accounts/login/',
		createProxyMiddleware({
			target: 'https://praktikd.halal-rabota.ru',
			changeOrigin: true,
			secure: false,
		}),
	)
}
