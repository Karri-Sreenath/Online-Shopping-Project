var express = require('express');
var router = express.Router();
var {getMongoDbCommunication} = require('./common/dbUtils');

/* GET home page. */
router.post('/', function(req, res, next) {
   var userReqData = req.body;    
   var userResponseData = {}
   console.log(userReqData)
    getMongoDbCommunication("accountDetails",'findOne', userReqData).then((data) => {
        if (data.length > 0) {
            userResponseData.status = 'success';
        } else {
            userResponseData.status = 'failure - Unauthorized User';
        }   
        res.send(JSON.stringify(userResponseData));
    });
});

module.exports = router;
