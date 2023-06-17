class ProductsController {
    index(req, res) {
        res.render('products');
    }

    show(req, res) {
        res.send('Products Detail');
    }
}

module.exports = new ProductsController();