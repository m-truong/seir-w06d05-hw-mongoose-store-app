// ============
// DEPENDENCIES
// ============
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;
const MONGO_STRING = process.env.MONGO_STRING;

// ============
// DATABASE
// ============
const Product = require('./models/product.js')

// ============
// VIEW ENGINE
// ============

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ============
// MIDDLEWARE
// ============
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

// ============
// TESTING
// ============
app.get('/', (req, res) => {
    res.send('Hello World');
})

// ======================
// RESTful ROUTES INDUCES
// ======================
/**
 * GET - the user asks for information from a server, 
 * POST - sending data to a server
 * PUT - sending data to a server with the intention of changing something that pre-existed
 * DELETE - request to remove data from a server
 */



// ============
// LISTENER
// ============
app.listen(PORT, () => {
    console.log(`currently on port ${PORT}`)
})