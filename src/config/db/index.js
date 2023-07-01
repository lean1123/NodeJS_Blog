const mongoose = require('mongoose');

async function connect() {
    await mongoose
        .connect('mongodb://127.0.0.1/ThanhAnShop_Data', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database connection successful');
        })
        .catch((err) => {
            console.error('Database connection error');
        });
}

module.exports = { connect };
