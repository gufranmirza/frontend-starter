/* eslint-disable no-console */
var express = require('express');
var next = require('next');
var compression = require('compression');
var isDev = process.env.NODE_ENV !== 'production';
var ngrok = isDev && process.env.ENABLE_TUNNEL ? require('ngrok') : null;
var logger = require('./loging');
var router = require('../routes');
var customHost = process.env.HOST;
var host = customHost || null; // Let http.Server use its default IPv6/4 host
var prettyHost = customHost || 'localhost';
var port = parseInt(process.env.PORT, 10) || 3000;
var security = require('./Middleware/security');
var app = next({ dev: isDev });
var handle = app.getRequestHandler();
var renderRoutes = function renderRoutes(req, res, pagePath, queryParams) {
    app
        .renderToHTML(req, res, pagePath, queryParams)
        .then(function (html) {
        res.send(html);
    })
        .catch(function (err) {
        app.renderError(err, req, res, pagePath, queryParams);
    });
};
var routerHandler = router.getRequestHandler(app, function (_a) {
    var req = _a.req, res = _a.res, route = _a.route, query = _a.query;
    renderRoutes(req, res, route.page, query);
});
app.prepare().then(function () {
    var server = express();
    server.use(compression({ threshold: 0 }));
    // Apply Middleware to the Routes
    server.use(security.securityMiddleware);
    // Set up reouter handler by Next.JS
    server.use(routerHandler);
    // Server All routes
    server.get('*', function (req, res) { return handle(req, res); });
    server.listen(port, host, function (err) {
        if (err) {
            return logger.error(err.message);
        }
        // Connect to ngrok in dev mode
        if (ngrok) {
            ngrok.connect(port, function (innerErr, url) {
                if (innerErr) {
                    return logger.error(innerErr);
                }
                logger.appStarted(port, prettyHost, url);
            });
        }
        else {
            logger.appStarted(port, prettyHost);
        }
    });
});
