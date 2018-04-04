// SQL vs noSQL
// table vs collection/array
// row vs document/object
// column vs field/property

//WORKS FOR MONGODB VERSION 2.X.X

//server must be running;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos')
    .findOneAndUpdate({
      _id: new ObjectID('5ac2415600390a8fc31c9e33')
    }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    });

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5ab3fbdcf0789b0f2cedb82d')
    }, {
      $set: {name: 'Matteo'},
      $inc: {age: 1}
    }, {
      returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    })

   //db.close();
});
