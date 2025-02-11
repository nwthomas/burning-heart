const Datauri = require("datauri");
const path = require("path");

const dUri = new Datauri();

const dataUri = req => {
  return dUri.format(
    path.extname(req.file.originalname).toString(),
    req.file.buffer
  );
};

module.exports = dataUri;
