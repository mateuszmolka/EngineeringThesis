var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  fileName: {type: String, required: true},
  fileType: {type: String, required: true},
  time: {type: Date, required: true},
  project: {type: Schema.Types.ObjectId, ref: 'Project'},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('File', schema);
