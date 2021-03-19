const mongoose = require('mongoose');

const boatSchema = new mongoose.Schema({
  manufacturer: String,
  model: String,
  year: Number,
  length: Number,
  beam: Number,
  balastRatio: Number,
  sailArea: Number,
  displacmentLength: Number,
  capsize: Number,
  
});