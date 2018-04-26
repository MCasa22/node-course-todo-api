const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('*** Connected to DB on *** ', process.env.MONGODB_URI);
  })
  .catch((err) => {
    console.log('*** There was an error *** ', err);
  });



module.exports = {
  mongoose
};
