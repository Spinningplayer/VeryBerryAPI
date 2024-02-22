const multer = require('multer');
const env = require('../Config/env/env')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, env.env.storagePath);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});  

const fileFilter = (req, file, cb) => {
    if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
        cb(null, true);
    } else{
        cb(null, false);

    }

};

let upload = multer({ storage: storage, fileFilter: fileFilter});

module.exports = upload.single('file')