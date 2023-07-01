const productModel = require('../models/productsModels');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/products
    storedProducts(req, res, next) {
        Promise.all([
            productModel.find({}),
            productModel.countDocumentsDeleted(),
        ])
            .then(([docs, count]) => {
                console.log(count);
                res.render('me/stored-products', {
                    count,
                    docs: multipleMongooseToObject(docs),
                });
            })
            .catch(next);
    }

    trashProducts(req, res, next) {
        productModel
            .findDeleted({})
            .then((docs) => {
                res.render('me/trash-products', {
                    docs: multipleMongooseToObject(docs),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
