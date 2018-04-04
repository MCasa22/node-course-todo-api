// SQL vs noSQL
// table vs collection/array
// row vs document/object
// column vs field/property

//WORKS FOR MONGODB VERSION 2.X.X

//server must be running;

//const MongoClient = require('mongodb').MongoClient;
//using OBJECT DESTRUCTURING to create a variable out of an object's property, it's possible to concatenate variables
const {MongoClient, ObjectID} = require('mongodb');

//for mongodb version 3.x.x (err, client) => {}
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    //return statement makes the program exit the function in case of an error, otherwise it would log both statements;
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //for mongodb version 3.x.x
  //const db = client.db('TodoApp')

  db.collection('Todos').insertOne({
    text: 'something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Todo', err);
    }
    //ops attribute  stores all the documents inserted (in this case 1);
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Matteo',
    age: 22,
    location: 'Milan'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert User', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    //built in function to access objectId's properties;
    console.log(result.ops[0]._id.getTimestamp());
  });

   //closes che connection to the database;
   db.close();

  /*
  for mongodb version 3.x.x
  client.close();
  */
});
