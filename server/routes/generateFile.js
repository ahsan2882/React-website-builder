var express = require('express'),
    fs = require('fs'),
    url = require('url');
var cookieParser = require('cookie-parser');
var router = express.Router();

router.post("/",  (req, res, next) => {
    let response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

module.exports = router;