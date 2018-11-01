const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  src: String,
  description: String
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;