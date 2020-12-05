const express = require('express')
const router = express.Router()

// ============
// DATABASE
// ============
const Product = require('../models/product.js')

// ======================
// RESTful ROUTES "INDUCES"
// ======================
/**
 * GET - the user asks for information from a server, 
 * POST - sending data to a server
 * PUT - sending data to a server with the intention of changing something that pre-existed
 * DELETE - request to remove data from a server
 */

// Index'/<nameOfResource>' GET ex. app.get('/products'...) 
router.get('/', (req, res) => {
    Product.find({}, (err, allProducts) => { 
        if (err) {
            res.send(err)
        } else {
            res.render('Index', {
                products: allProducts
            })
        }
    });
});

// New '/<nameOfResorce>/new' GET ex. app.get('/products/new')
router.get('/new', (req, res) => {
    res.render('New');
});

// Delete '/<nameOfResource/:id' DELETE ex. app.delete('/products/:id')

// Update '/<nameOfResource/:id' PUT ex. app.put('/products/:id')

// Create '/<nameOfResource>/' POST ex. app.post('/products/')
router.post('/', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/products');
        }
    });
});

// Edit '/<nameOfResource>/:id/edit' GET ex. app.get('/products/:id/edit')

// Show '/<nameOfResource>/:id' GET ex. app.get('/products/:id')
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (err) {
            res.send(err) 
        } else {
            res.render('Show', {
                product: foundProduct
            })
        }
    });
});

module.exports = router;