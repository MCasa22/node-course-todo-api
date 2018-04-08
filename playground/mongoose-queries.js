const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

let user_id = '5ac266bd0f49854507c989fc';
let toto_id = '5ac52c69a9999c100647ddaf';

if (!ObjectID.isValid(user_id)) {
  return console.log('user ID not valid');
}

if (!ObjectID.isValid(toto_id)) {
  console.log('ID not valid');
}

//returns an array of objects or an empty array
Todo.find({
  _id: toto_id
}).then((todos) => {
  console.log('todos', todos);
});

//returns an object or null
Todo.findOne({
  _id: toto_id
}).then((todo) => {
  console.log('todo', todo);
});

//returns an object or null
Todo.findById(toto_id)
  .then((todo) => {
    if (!todo) {
      return console.log('ID not found');
    }
    console.log('todo By Id', todo);
  })
  .catch((e) => console.log(e));

User.findById(user_id)
  .then((user) => {
    if(!user) {
      return console.log('User not found');
    }
    console.log('User By ID', JSON.stringify(user, undefined, 2));
  })
  .catch((e) => console.log(e));
