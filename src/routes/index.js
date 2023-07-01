const productsRoute = require('./products');
const meRoute = require('./me');
const siteRoute = require('./site');

function route(app) {
    app.use('/me', meRoute);
    app.use('/products', productsRoute);
    app.use('/', siteRoute);
}

module.exports = route;
