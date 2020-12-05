const express = require('express')
const router = express.Router()

// ============
// DATABASE
// ============
const Product = require('../models/product.js')

// ============
// TESTING
// ============
// router.get('/', (req, res) => {
//     res.send('Hello World');
// })

// ======================
// RESTful ROUTES INDUCES
// ======================
/**
 * GET - the user asks for information from a server, 
 * POST - sending data to a server
 * PUT - sending data to a server with the intention of changing something that pre-existed
 * DELETE - request to remove data from a server
 */

// Index'/<nameOfResource>' GET ex. app.get('/products'...) 
// Index should have ALL THE BUTTONS
router.get('/', (req, res) => {
    Product.find({}, (err, allProducts) => { 
        if (err) {
            res.send(err)
        } else {
            // console.log("here's the array of document objects!")
            // console.log(allProducts) 
            res.render('Index', {
                products: allProducts
                // can pass as many props as want
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
    // if (req.body.readyToEat === 'on') { 
    //     req.body.readyToEat = true;
    // } else { 
    //     req.body.readyToEat = false;
    // }
    Product.create(req.body, (err, createdProduct) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/');
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
                Product: foundProduct
            })
        }
    });
});

module.exports = router;