const mongoose = require('mongoose');

// Không dùng
// const slug = require('mongoose-slug-generator');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        name: { type: String },
        price: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        imgsDetails: { type: Array },
    },
    {
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('product', Product);
