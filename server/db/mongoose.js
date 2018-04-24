const mongoose = require('mongoose');

//see config.example.js for configuration
const {HOST} = require('../../config.js');

mongoose.Promise = global.Promise;

mongoose.connect(HOST);


module.exports = {
  mongoose
};
