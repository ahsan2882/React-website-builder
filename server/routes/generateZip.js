var express = require('express'),
    fs = require('fs');
var router = express.Router();
var JSZip = require('JSZip');

const addFilesFromDirectoryToZip = (zip, directoryPath) => {
    const directoryContents = fs.readdirSync(directoryPath, {
        withFileTypes: true,
    });

    directoryContents.forEach(({ name }) => {
        const path = `${directoryPath}/${name}`;

        if (fs.statSync(path).isFile()) {
            zip.file(path, fs.readFileSync(path, "utf-8"));
        }

        if (fs.statSync(path).isDirectory()) {
            addFilesFromDirectoryToZip(zip, path);
        }
    });
};

const zipFileGen = async (directoryPath = "./output/files") => {
    const zip = new JSZip();

    zip.file(
        "standalone.txt",
        "I will exist inside of the zip archive, but I'm not a real file here on the server."
    );

    addFilesFromDirectoryToZip(zip, directoryPath);
    // let zipFile = await zip.generateAsync({ type: "base64" })
    // return zipFile;
}

router.get("/", (req, res, next) => {
    res.send(zipFileGen)
})

module.exports = router;