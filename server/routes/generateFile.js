var express = require('express'),
    fs = require('fs');
var router = express.Router();

var htmlTemplate = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link href=\"https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css\" rel=\"stylesheet\"><title>Document</title></head><body><main>"
var htmlClosingTemplate = "</main></body></html>"

router.post("/",  (req, res, next) => {
    let response = {
        file_name: req.body.file_name,
        file_content: req.body.file_content
    };
    console.log(response.file_content);
    let fileData = htmlTemplate + response.file_content + htmlClosingTemplate;
    fs.writeFile(`output/${response.file_name}`, fileData, err => {
        if (err) {
            console.error(err)
            return null;
        }
        //file written successfully
    })
    res.end(JSON.stringify(response));
})

module.exports = router;