const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Configure storage as needed

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Image file is required' });
  }
  res.json({ message: 'Upload successful', file: req.file });
});

module.exports = router;
