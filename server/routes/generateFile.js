var express = require('express'),
    fs = require('fs');
const path = require('path');
var router = express.Router();
// var css = require('../client/build/static/css/main.6a0d2e46.chunk.css')
// server\client\build\static\css\main.6a0d2e46.chunk.css


var htmlTemplate = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css\"><link href=\"https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css\" rel=\"stylesheet\"><title>Document</title><style>"
var styleClose = "</style></head><body><script src=\"https://kit.fontawesome.com/6fcb08b902.js\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js\"></script><main>"
var htmlClosingTemplate = "</main></body></html>"

router.post("/", async (req, res, next) => {
    let response = {
        file_name: `${req.body.file_name}`,
        file_content: req.body.file_content
    };
    let cssReq = fs.readFileSync(path.resolve(__dirname, '../staticCss', 'allCss.css'), "utf-8")
    console.log(cssReq);
    let fileData = htmlTemplate + cssReq + styleClose + response.file_content.html + htmlClosingTemplate;
     fs.writeFile(`./output/files/${response.file_name}`, fileData, err => logError(err))
    res.send(fileData);
})

const logError = (err) => {
    if (err) {
        console.error(err)
        return null;
    }
}
module.exports = router;