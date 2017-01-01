
var express = require('express');
var router = express.Router();
var Project = require('../models/project');

router.post('/create', function(req, res, next){
  var project = new Project({
    projectName: req.body.projectName,
    projectType: req.body.projectType
  });

  project.save(function(err, result){
    if(err){
      return res.status(404).json({
        title: 'An error occured',
        error: err
      })
    }
    res.status(200).json({
      message: 'success',
      obj: result
    })
  })
});


module.exports = router;

