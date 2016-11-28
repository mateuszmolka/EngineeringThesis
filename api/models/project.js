var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  projectName: {type: String, required: true},
  projectType: {type: String, required: true},
  files: [{type: Schema.Types.ObjectId, ref: 'File'}],
  users: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Project', schema);
