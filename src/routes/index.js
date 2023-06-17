const productsRoute = require('./products');
const siteRoute = require('./site');

function route(app) {
    app.use("/products", productsRoute);

    app.use('/', siteRoute);
}

module.exports = route;