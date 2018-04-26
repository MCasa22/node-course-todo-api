const jwt = require('jsonwebtoken');

let data = {
  id: 10
}

let token = jwt.sign(data, 'salting the hash');
console.log('TOKEN', token);

let decoded = jwt.verify(token, 'salting the hash');
console.log('DECODED', decoded);
