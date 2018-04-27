const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = 'abc123!';

//generate encrypted and salted password
bcrypt.genSalt(10, (err, salt) => {
  bcrypt. hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

//check if hashedPassword is the actual password
let hashedPassword = '$2a$10$hTMlqChl/D4PME.cdm8vsewGJ3STe2TPAFl13AwyIc5OUpTQoUj1e';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log('res: ', res);
});

// let data = {
//   id: 10
// }
//
// let token = jwt.sign(data, 'salting the hash');
// console.log('TOKEN', token);
//
// let decoded = jwt.verify(token, 'salting the hash');
// console.log('DECODED', decoded);
