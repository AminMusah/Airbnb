const multer = require("multer");

const upload = multer({ dest: "/photos" });

module.exports = upload;
