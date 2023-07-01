const productModel = require('../models/productsModels');
const { mongooseToObject } = require('../../util/mongoose');
const { doc } = require('prettier');

class ProductsController {
    // [GET] products/:slug
    show(req, res, next) {
        productModel
            .findOne({ slug: req.params.slug })
            .then((product) =>
                res.render('products/show', {
                    product: mongooseToObject(product),
                }),
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('products/create');
    }

    store(req, res, next) {
        const formData = req.body;
        var imgs = formData.imgsDetails.split(', ');

        formData.imgsDetails = imgs;

        const product = new productModel(formData);
        product
            .save()
            .then(() => {
                res.redirect('/me/stored/products');
            })
            .catch((err) => {});
    }

    // [GET] /products/:id/edit
    edit(req, res, next) {
        productModel
            .findById(req.params.id)
            .then((doc) =>
                res.render('products/edit', {
                    doc: mongooseToObject(doc),
                }),
            )
            .catch(next);
    }

    // [GET] /products/:id
    update(req, res, next) {
        const formData = req.body;
        var imgs = formData.imgsDetails.split(', ');

        formData.imgsDetails = imgs;

        productModel
            .updateOne({ _id: req.params.id }, formData)
            .then(() => {
                res.redirect('/me/stored/products');
            })
            .catch(next);
    }

    destroy(req, res, next) {
        productModel
            .delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    forceDestroy(req, res, next) {
        productModel
            .deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    restore(req, res, next) {
        productModel
            .restore({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    //[Post] /products/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.chooseAction) {
            case 'remove': {
                productModel
                    .delete({ _id: { $in: req.body.chooseItems } })
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);

                break;
            }

            default: {
                res.send('Action Invailed');
            }
        }
    }
}

module.exports = new ProductsController();
