const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

Todo.remove({})
  .then((res) => {
    console.log(res);
  });

Todo.findOneAndRemove({_id: '5aca263c56e2dd660a01233c'})
  .then((todo) => {
    console.log(todo);
  });

Todo.findByIdAndRemove('5aca263c56e2dd660a01233c')
  .then((todo) => {
    console.log(todo);
  });
