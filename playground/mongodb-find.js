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

  db.collection('Todos').find({
    _id: new ObjectID('5ab3de9089e0d20dcd977c19')
  }).toArray()
    .then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2))
    })
    .catch((err) => {
      console.log('unable to find Todos', err);
    });

  db.collection('Todos').find()
    .count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
    })
    .catch((err) => {
      console.log('unable to find Todos', err);
    });

  db.collection('Users')
    .find({name: 'Matteo'})
    .toArray()
    .then((users) => {
      console.log(JSON.stringify(users, undefined, 2));
    })
    .catch((err) => {
      console.log(err);
    })

   //db.close();
});
