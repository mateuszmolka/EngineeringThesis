var express = require('express');
var multer = require('multer');
var DIRusers = "./images/";
var router = express.Router();
var fs = require('fs');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var FINAL_DIR = DIRusers + req.query.id;
    fs.mkdir(FINAL_DIR, function(){
      console.log('----------------------------------');
      }
    );
    cb(null, FINAL_DIR); // Absolute path. Folder must exist, will not be created for you.
  }
});
var upload = multer({ storage: storage });




router.post('/',upload.single('file'), function (req, res) {
  //console.log("file: "+JSON.stringify(req.file));
  //console.log("files: "+JSON.stringify(req.files));
  res.end('uploaded file');
});
module.exports = router;
