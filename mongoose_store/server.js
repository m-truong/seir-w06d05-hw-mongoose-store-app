// ============
// DEPENDENCIES
// ============
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;
const MONGO_STRING = process.env.MONGO_STRING;
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

// ============
// VIEW ENGINE
// ============
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ============
// MIDDLEWARE
// ============
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}));

// ============
// MONGOOSE SETUP
// ============

mongoose.connect(MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

// ===========
// CONTROLLER
// ===========
const productController = require('./controllers/productController.js')
app.use('/products', productController)

// ============
// LISTENER
// ============
app.listen(PORT, () => {
    console.log(`currently on port ${PORT}`)
})