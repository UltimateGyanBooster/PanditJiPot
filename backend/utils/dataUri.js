const DataUriParser = require('dataUri/parser.js');
const Path = require('path');

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = Path.extname(file.originalname).toString();
    console.log(extName)
    return parser.format(extName, file.buffer);
}

module.exports = getDataUri;

