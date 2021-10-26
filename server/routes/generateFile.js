var express = require('express'),
    fs = require('fs');
var router = express.Router();

router.post("/",  (req, res, next) => {
    let response = {
        file_name: req.body.file_name,
        file_content: req.body.file_content
    };
    console.log(response.file_content);
    fs.writeFile(response.)
    res.end(JSON.stringify(response));
})

module.exports = router;