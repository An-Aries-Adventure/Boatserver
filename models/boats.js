const mongoose = require('mongoose');

const boatSchema = new mongoose.Schema({
  manufacturer: {type: String, required: true, minlength: 2, maxlength: 100},
  model: {type: String, required: true, minlength: 2, maxlength: 100},
  year: {type: Number, required: true, minlength: 2, maxlength: 4},
  length: {type: Number, required: true, minlength: 2, maxlength: 3},
  beam: Number,
  balastRatio: Number,
  sailArea: Number,
  displacmentLength: Number,
  capsize: Number,
  motorType: String,
  
});

const Boat = mongoose.model('Boat', boatSchema);





module.exports = Boat;

