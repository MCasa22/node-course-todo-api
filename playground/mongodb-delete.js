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
    .deleteMany({text: 'eat lunch'})
    .then((result) => {
      console.log(result);
    });

  db.collection('Todos')
    .deleteOne({text: 'eat lunch'})
    .then((result) => {
      console.log(result);
    });

  db.collection('Todos')
    .findOneAndDelete({completed: false})
    .then((result) => {
      console.log(result);
    });

  db.collection('Users').count({name: 'Matteo'}).then((count) => {
    if(count > 1) {
      db.collection('Users').deleteMany({name: 'Matteo'});
      console.log('deleted something');
    } else {
      console.log('found no duplicates');
    };
  });

  db.collection('Users')
    .findOneAndDelete({
      _id: new ObjectID('5ab409e1f336731147b60e2e')
    })
    .then((result) => {
      console.log(result);
    });



   //db.close();
});
