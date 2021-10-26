var express = require('express'),
    fs = require('fs');
var router = express.Router();

router.post("/",  (req, res, next) => {
    let response = {
        file_name: req.body.file_name,
        file_content: req.body.file_content
    };
    console.log(response.file_content);
    fs.writeFile(`output/${response.file_name}`, response.file_content, err => {
        if (err) {
            console.error(err)
            return null;
        }
        //file written successfully
    })
    res.end(JSON.stringify(response));
})

module.exports = router;