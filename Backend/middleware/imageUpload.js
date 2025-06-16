const multer = require("multer");
const Path = require('path')
const storage = multer.diskStorage({
    destination:(req,file,cd) => {
        cd(null,'uploads/')
    },
    filename:(req,file,cd) => {
        cd(null,file.fieldname + "_" + Date.now() + Path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

module.exports = upload

