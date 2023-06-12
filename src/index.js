const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');


const app = express();
const port = 3000;

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', exphbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/products', (req, res) => {
    res.render('products');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})