const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://dbUser:qwertyasdf@ds145438.mlab.com:45438/todo-api-db'
};
mongoose.connect(db.mlab || db.localhost);


module.exports = {
  mongoose
};
