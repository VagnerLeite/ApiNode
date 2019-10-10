const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        //resolvendo a pasta uploads atraves do path.resolve
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext   = path.extname(file.originalname);
            const name  = path.basename(file.originalname, ext);
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
}