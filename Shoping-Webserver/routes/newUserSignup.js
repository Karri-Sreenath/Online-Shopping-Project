var express = require('express');
var router = express.Router();
var {getMongoDbCommunication} = require('./common/dbUtils');

/* GET home page. */
router.post('/', function(req, res, next) {
    var userReqData = req.body;
    var userResponseData = {};
    try {
        getMongoDbCommunication("accountDetails", 'insert', userReqData).then((data) => {
            userResponseData.status = 'success';
            res.send(JSON.stringify(userResponseData));
        });
    } catch(e) {
        console.log("Exception");
        console.log(e);
    }
});

module.exports = router;