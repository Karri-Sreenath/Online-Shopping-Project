
var express = require('express');
var router = express.Router();
var {getMongoDbCommunication} = require('./common/dbUtils');

/* GET home page. */
router.get('/', function(req, res, next) {
    var productDetails = [];
    var userReq = req.query; // req.body
    getMongoDbCommunication('productData', 'find', userReq).then((data)=>{
        
        console.log('userReq')
        console.log(userReq)
        productDetails = data;
        res.send(JSON.stringify(productDetails));
    });
});

module.exports = router;
