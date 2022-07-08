// configurado multer para armazenar os arquivos enviados

const multer = require('multer');

const storage = multer.diskStorage({
  // pasta onde serão armazenados os arquivos
  destination: './src/assets',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.png');
  },
});

const upload = multer({ storage });

module.exports = { upload };
