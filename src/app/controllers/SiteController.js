const productModel = require('../models/productsModels');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    home(req, res, next) {
        // res.render('home');

        productModel
            .find({})
            .then((docs) => {
                res.render('home', {
                    docs: multipleMongooseToObject(docs),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
