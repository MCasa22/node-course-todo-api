const mongoose = require('mongoose');

//see config.example.js for configuration
const {LOCAL_HOST, M_LAB} = require('../../config.js');

mongoose.Promise = global.Promise;

let db = {
  localhost: LOCAL_HOST,
  mlab: M_LAB
};
mongoose.connect( process.env.PORT ? db.mlab : db.localhost);


module.exports = {
  mongoose
};
